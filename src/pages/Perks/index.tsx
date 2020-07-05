import React, { useEffect, useState, useCallback } from 'react';

import {
  View,
  ActivityIndicator,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { getMonth, getYear, format } from 'date-fns';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
  PerksContainer,
  TierCard,
  PerkTitleText,
  PerkDescText,
  PerkDateText,
  PerkDateNumberText,
  styles,
} from './styles';

interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
}

interface Perk {
  id: string;
  title: string;
  image_url: string;
  desc: string;
  tier: Tier;
  date: number;
}

interface Tier {
  id: string;
  title: string;
  desc: string;
  image_url: string;
  date: string;
}

interface Params {
  tier: Tier;
  subscription_id: string;
}

interface Post {
  id: string;
  title: string;
  short_desc: string;
  desc: string;
  image_url: string;
}

const Perks: React.FC = () => {
  // API
  const [perks, setPerks] = useState<Perk[]>();

  // Navigation
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadPerks(): Promise<void> {
      const { data: postData } = await api.get(`/perks/${routeParams.tier.id}`);

      setPerks(postData);
    }

    loadPerks();
  }, [routeParams.tier.id]);

  const unsubscribe = useCallback(() => {
    api
      .delete(`subscriptions/${routeParams.subscription_id}`)
      .then(response => {
        navigate('Feed');
      });
  }, [navigate, routeParams.subscription_id]);

  const calculateDate = useCallback((perk: Perk): string => {
    const currentDate = new Date();
    const currentMonth = getMonth(currentDate);
    const currentYear = getYear(currentDate);
    const perkDate = new Date(
      currentYear,
      currentMonth,
      perk ? perk.date : 1,
      0,
      0,
      0,
    );

    return format(perkDate, 'dd/MM/yyyy');
  }, []);

  return perks ? (
    <Container>
      <Header>
        <HeaderSafeArea>
          <HeaderBackButton onPress={() => goBack()}>
            <HeaderBackButtonIcon name="chevron-left" size={30} />
          </HeaderBackButton>
          <Text style={styles.headerTitle}>Vantagens</Text>
          <View style={styles.headerInfoView}>
            <Text style={styles.headerSubTitle}>{}</Text>
          </View>
        </HeaderSafeArea>
      </Header>
      <ScrollView showsVerticalScrollIndicator={false}>
        {perks.map(perk => (
          <View key={perk.id}>
            <TierCard>
              <ImageBackground
                style={{
                  width: '100%',
                  height: 180,
                  borderRadius: 10,
                }}
                source={{
                  uri: perk.image_url,
                }}
              />
            </TierCard>
            <PerksContainer>
              <PerkTitleText>{perk.title}</PerkTitleText>
              <PerkDescText>{perk.desc}</PerkDescText>
              <View
                style={{
                  backgroundColor: '#1c1c1c',
                  marginTop: 25,
                  padding: 0,
                  height: 1,
                  width: '100%',
                }}
              />
              <PerkDateText>Você receberá esse pacote em</PerkDateText>
              <PerkDateNumberText>{calculateDate(perk)}</PerkDateNumberText>
            </PerksContainer>
          </View>
        ))}
        <Button
          style={{
            marginBottom: 50,
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: '#742635',
          }}
          onPress={unsubscribe}
        >
          Cancelar Assinatura
        </Button>
      </ScrollView>
    </Container>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
      }}
    >
      <ActivityIndicator size="large" color="#a58238" />
    </View>
  );
};

export default Perks;
