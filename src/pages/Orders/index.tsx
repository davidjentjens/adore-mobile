import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

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
  AllDetailsContainer,
  MemberContainer,
  MemberInfoView,
  MemberInfoText,
  MemberInfoSubtitleText,
  MemberStatusView,
  MemberText,
  MemberStatusText,
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

  return orders ? (
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

        {/* <SectionText>Locais</SectionText> */}

        <Divider style={{ backgroundColor: '#2f2f2f', marginTop: 25 }} />

        <AllDetailsContainer>
          <MemberContainer>
            <MemberInfoView>
              <MemberInfoText>Cafeteria Tranjan</MemberInfoText>
              <MemberInfoSubtitleText>Botafogo</MemberInfoSubtitleText>
            </MemberInfoView>
            <MemberStatusView>
              <MemberText>Membro</MemberText>
              <MemberStatusText>Ouro</MemberStatusText>
            </MemberStatusView>
          </MemberContainer>
        </AllDetailsContainer>
      </ScrollView>
    </Container>
  ) : (
    <Container />
  );
};

export default Orders;
