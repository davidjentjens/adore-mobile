import React, { useRef, useCallback, useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import Button from '../../components/Button';

import { Container, Header, HeaderText, SectionText, TierCard } from './styles';

interface Params {
  id: string;
  business_name: string;
}

interface Tier {
  id: string;
  name: string;
  image_url: string;
  rank: number;
  value: string;
  desc: string;
}

const Tier: React.FC = () => {
  const [tier, setTier] = useState<Tier>();

  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadTier(): Promise<void> {
      const { data: tierData } = await api.get(`/tiers/${routeParams.id}`);
      console.log(tierData);
      setTier(tierData);
    }

    loadTier();
  }, [routeParams.id]);

  return tier ? (
    <Container>
      <Header>
        <Icon
          name="chevron-left"
          size={30}
          color="#fff"
          onPress={() => goBack()}
          style={{ marginBottom: 10 }}
        />
        <HeaderText>{routeParams.business_name}</HeaderText>
      </Header>
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>
        <SectionText>{tier.name}</SectionText>
        <TierCard>
          <View
            style={{
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <ImageBackground
              style={{ width: '100%', height: 180, borderRadius: 10 }}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1449049607083-e29383d58423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI2MDAzfQ&auto=format&fit=crop&w=500&q=80',
              }}
            />
          </View>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                textAlign: 'justify',
                lineHeight: 20,
              }}
            >
              {tier.desc}
            </Text>
          </View>
        </TierCard>
        <Button onPress={() => navigate('PaymentValidation')}>
          R$ 50,90/mês
        </Button>
        <SectionText>Outros Planos</SectionText>
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

export default Tier;
