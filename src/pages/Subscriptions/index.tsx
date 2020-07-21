import React, { useEffect, useState, useMemo } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { getMonth, getYear, format } from 'date-fns';

import { useNavigation, useIsFocused } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  AllDetailsContainer,
  Header,
  HeaderText,
  SubscriptionDataContainer,
  SubscriptionSubtitleText,
  SubscriptionText,
  MemberInfoText,
  MemberInfoSubtitleText,
  MemberStatusView,
  MemberText,
  MemberInfoView,
  MemberContainer,
  TierSubscribedContainer,
  TierSubscribedText,
  ProfileIcon,
  styles,
} from './styles';

interface Business {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
  zone: string;
}

interface Subscriptions {
  id: string;
  business: Business;
  tier: Tier;
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
  date: number;
}

const Subscriptions: React.FC = () => {
  const { navigate } = useNavigation();

  const [nextPerk, setNextPerk] = useState<Perk>();
  const [subscriptions, setSubs] = useState<Subscriptions[]>([]);
  const [business, setBusinesses] = useState<Business[]>([]);

  const inFocused = useIsFocused();

  useEffect(() => {
    const loadNextPerk = async (): Promise<void> => {
      api
        .get('perks/next')
        .then(response => {
          setNextPerk(response.data);
        })
        .catch(() => {
          console.log('  ');
        });
    };
    const loadSubs = async (): Promise<void> => {
      api
        .get('subscriptions')
        .then(response => {
          setSubs(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    };

    loadNextPerk();
    loadSubs();
  }, [inFocused]);

  const calculateDate = useMemo((): string => {
    const currentDate = new Date();
    const currentMonth = getMonth(currentDate);
    const currentYear = getYear(currentDate);
    const perkDate = new Date(
      currentYear,
      currentMonth,
      nextPerk ? nextPerk.date : 1,
      0,
      0,
      0,
    );

    return format(perkDate, 'dd/MM/yyyy');
  }, [nextPerk]);

  return business ? (
    <Container>
      <Header>
        <HeaderText>Assinaturas</HeaderText>
        <ProfileIcon
          name="user"
          size={30}
          color="#fff"
          onPress={() => navigate('Profile')}
        />
      </Header>
      <ScrollView>
        {nextPerk ? (
          <SubscriptionDataContainer>
            <SubscriptionText>Próxima Vantagem</SubscriptionText>
            <SubscriptionSubtitleText>
              <Icon name="shopping-bag" size={20} />
              {'  '}
              {nextPerk.title}
            </SubscriptionSubtitleText>
            <SubscriptionSubtitleText>
              <Icon name="clock" size={20} />
              {'  '}
              {calculateDate}
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
              <MemberContainer
                onPress={() =>
                  navigate('Perks', {
                    tier: subscription.tier,
                    subscription_id: subscription.id,
                  })}
                key={subscription.id}
              >
                <MemberInfoView>
                  <MemberInfoText>{subscription.business.name}</MemberInfoText>
                  <MemberInfoSubtitleText>
                    {subscription.business.zone}
                  </MemberInfoSubtitleText>
                </MemberInfoView>
                <MemberStatusView>
                  <MemberText>{subscription.tier.name}</MemberText>
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

export default Subscriptions;
