import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import { useNavigation, useRoute } from '@react-navigation/native';
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
  TierStatusText,
  TierSubscribedContainer,
  TierSubscribedText,
  FoodsContainer,
  FoodList,
  Food,
  FoodImageContainer,
  FoodContent,
  FoodTitle,
  FoodDescription,
  FoodPricing,
  styles,
} from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Business {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
}

interface Tier {
  id: string;
  name: string;
  image_url: string;
  rank: number;
  value: number;
  desc: string;
}

const Orders: React.FC = () => {

  const { navigate, goBack } = useNavigation();

  const [business, setBusinesses] = useState<Business[]>([]);

  const route = useRoute();

  useEffect(() => {
    const loadBusinesses = async (): Promise<void> => {
      api.get('business').then(response => {
        setBusinesses(response.data);
      });
    };

    loadBusinesses();
  }, []);

  return business ? (
    <Container>
      <Header>
        <HeaderTitle>Assinaturas</HeaderTitle>
        <Icon
          name="user"
          size={30}
          color="#fff"
          onPress={() => navigate('Profile')}
          style={styles.opacityView}
        />
      </Header>
      <ScrollView>
        <TierSubscribedContainer>
          <TierSubscribedText>Você ainda não tem assinaturas ativas</TierSubscribedText>
          <View style={styles.headerOptionsView}>
            <TouchableOpacity style={styles.headerSubCount} onPress={() =>
                      navigate('DashboardStack')}>
              <Text style={styles.headerInfoText}>Conheça restaurante da sua região</Text>
            </TouchableOpacity>
          </View>
        </TierSubscribedContainer>

        {/* <SubscriptionDataContainer>
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


        <SectionText>Últimos 6 meses</SectionText>

        <AllDetailsContainer>
          <MemberContainer>
            <MemberInfoView>
              <MemberInfoText>Cervejaria Lacis</MemberInfoText>
              <MemberInfoSubtitleText>Botafogo</MemberInfoSubtitleText>
            </MemberInfoView>
            <MemberStatusView>
              <MemberText>Membro</MemberText>
              <MemberStatusText>Ouro</MemberStatusText>
            </MemberStatusView>
          </MemberContainer>
        </AllDetailsContainer> */}
      </ScrollView>
    </Container>
  ) : (
    <Container />
  );
};

export default Orders;
