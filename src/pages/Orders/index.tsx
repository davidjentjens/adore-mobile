import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView, View, Text } from 'react-native';
import { Divider } from 'react-native-elements';

import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

interface Business {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
}

interface Subscriptions {
  business: Business;
}

interface Tier {
  id: string;
  name: string;
  image_url: string;
  rank: number;
  value: number;
  desc: string;
}

interface Perk {
  title: string;
  desc: string;
  image_url: string;
  day: number;
}

const Orders: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const [nextPerk, setNextPerk] = useState<Perk>();
  const [subscriptions, setSubs] = useState<Subscriptions[]>([]);
  const [business, setBusinesses] = useState<Business[]>([]);

  const route = useRoute();

  useEffect(() => {
    const loadNextPerk = async (): Promise<void> => {
      api.get('perks/next').then(response => {
        setNextPerk(response.data);
      });
    };
    const loadSubs = async (): Promise<void> => {
      api.get('subscriptions').then(response => {
        setSubs(response.data);
      });
    };

    loadNextPerk();
    loadSubs();
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
        {nextPerk ? (
          <SubscriptionDataContainer>
            <SubscriptionText>Próxima Vantagem</SubscriptionText>
            <SubscriptionSubtitleText>
              <Icon name="shopping-bag" size={20} />
              {nextPerk.title}
            </SubscriptionSubtitleText>
            <SubscriptionSubtitleText>
              <Icon name="clock" size={20} />
              {nextPerk.day}
            </SubscriptionSubtitleText>
          </SubscriptionDataContainer>
        ) : (
          <TierSubscribedContainer>
            <TierSubscribedText>
              Você ainda não tem assinaturas ativas
            </TierSubscribedText>
            <View style={styles.headerOptionsView}>
              <TouchableOpacity
                style={styles.headerSubCount}
                onPress={() => navigate('DashboardStack')}
              >
                <Text style={styles.headerInfoText}>
                  Conheça restaurantes da sua região
                </Text>
              </TouchableOpacity>
            </View>
          </TierSubscribedContainer>
        )}

        {subscriptions ? (
          <AllDetailsContainer>
            {subscriptions.map(subscription => (
              <MemberContainer>
                <MemberInfoView>
                  <MemberInfoText>{subscription.business.name}</MemberInfoText>
                  <MemberInfoSubtitleText>Botafogo</MemberInfoSubtitleText>
                </MemberInfoView>
                <MemberStatusView>
                  <MemberText>Membro</MemberText>
                </MemberStatusView>
              </MemberContainer>
            ))}
          </AllDetailsContainer>
        ) : (
          <TierSubscribedContainer>
            <TierSubscribedText>
              Você ainda não tem assinaturas ativas
            </TierSubscribedText>
            <View style={styles.headerOptionsView}>
              <TouchableOpacity
                style={styles.headerSubCount}
                onPress={() => navigate('DashboardStack')}
              >
                <Text style={styles.headerInfoText}>
                  Conheça restaurantes da sua região
                </Text>
              </TouchableOpacity>
            </View>
          </TierSubscribedContainer>
        )}
      </ScrollView>
    </Container>
  ) : (
    <Container />
  );
};

export default Orders;
