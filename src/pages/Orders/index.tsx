import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Header,
  HeaderTitle,
  SubscriptionDataContainer,
  SubscriptionText,
  SubscriptionSubtitleText,
  SectionText,
  SectionSubtitleText,
  FoodsContainer,
  FoodList,
  Food,
  FoodImageContainer,
  FoodContent,
  FoodTitle,
  FoodDescription,
  FoodPricing,
} from './styles';

interface Food {
  id: number;
  name: string;
  description: string;
  price: number;
  formattedValue: number;
  thumbnail_url: string;
}

const Orders: React.FC = () => {
  const navigation = useNavigation();

  const [orders, setOrders] = useState<Food[]>([]);

  useEffect(() => {
    async function loadOrders(): Promise<void> {
      const { data } = await api.get('orders');

      setOrders(data);
    }

    loadOrders();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderTitle>Assinaturas</HeaderTitle>
        <Icon
          name="user"
          size={30}
          color="#fff"
          onPress={() => navigation.navigate('Profile')}
        />
      </Header>
      <ScrollView>
        <SubscriptionDataContainer>
          <SubscriptionText>Próxima Vantagem</SubscriptionText>
          <SubscriptionSubtitleText>
            <Icon name="home" size={20} />
            {'  '}Cervejaria Lacis
          </SubscriptionSubtitleText>
          <SubscriptionSubtitleText>
            <Icon name="shopping-bag" size={20} />
            {'  '}Pack de bebidas
          </SubscriptionSubtitleText>
          <SubscriptionSubtitleText>
            <Icon name="clock" size={20} />
            {'  '}15 de julho de 2020
          </SubscriptionSubtitleText>
        </SubscriptionDataContainer>

        <SectionText>Restaurantes</SectionText>

        <FoodsContainer>
          <FoodList
            data={orders}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => (
              <Food key={item.id} activeOpacity={0.6}>
                <FoodImageContainer>
                  <Image
                    style={{ width: 88, height: 88 }}
                    source={{ uri: item.thumbnail_url }}
                  />
                </FoodImageContainer>
                <FoodContent>
                  <FoodTitle>{item.name}</FoodTitle>
                  <FoodDescription>{item.description}</FoodDescription>
                  <FoodPricing>{formatValue(item.price)}</FoodPricing>
                </FoodContent>
              </Food>
            )}
          />
        </FoodsContainer>
      </ScrollView>
    </Container>
  );
};

export default Orders;
