import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  ActivityIndicator,
  Dimensions,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import api from '../../services/api';
import Button from '../../components/Button';
import formatValue from '../../utils/formatValue';
import getRankColor from '../../utils/getRankColor';

import {
  Container,
  Header,
  HeaderText,
  SectionText,
  TierCard,
  TierList,
  TierText,
  TierTextBackground,
  OtherTiersCard,
  PriceText,
} from './styles';

interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
  perks: [string];
}

interface Params {
  id: string;
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

const Tier: React.FC = () => {
  const [tier, setTier] = useState<Tier>();
  const [tierList, setTierList] = useState<Tier[]>([]);

  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadTier(): Promise<void> {
      const { data: tierData } = await api.get(`/tiers/${routeParams.id}`);

      const { data: tierListData } = await api.get(
        `tiers/business/${routeParams.business.id}`,
      );

      const filteredTierList = tierListData.filter((item: Tier) => {
        return item.id !== routeParams.id;
      });

      setTier(tierData);
      setTierList(filteredTierList);
    }

    loadTier();
  }, [routeParams.business.id, routeParams.id]);

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
        <HeaderText>{routeParams.business.name}</HeaderText>
      </Header>
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>
        <SectionText>{tier.name}</SectionText>
        <TierCard>
          <View
            style={{
              borderRadius: 10,
              overflow: 'hidden',
              borderWidth: 7,
              borderColor: getRankColor(tier.rank),
              borderTopEndRadius: 10,
            }}
          >
            <ImageBackground
              style={{
                width: '100%',
                height: 180,
                borderRadius: 10,
              }}
              source={{
                uri: tier.image_url
                  ? tier.image_url
                  : 'https://images.unsplash.com/photo-1449049607083-e29383d58423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI2MDAzfQ&auto=format&fit=crop&w=500&q=80',
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
        <Button
          onPress={() =>
            navigate('PaymentValidation', {
              tier,
              business: routeParams.business,
            })
          }
        >
          {formatValue(tier.value)}/mês
        </Button>
        <SectionText>Outros Planos</SectionText>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginLeft: -20, marginRight: -20 }}
        >
          <TierList style={{ width: Dimensions.get('window').width }}>
            {tierList.map(item => (
              <OtherTiersCard
                key={item.id}
                onPress={() =>
                  navigate('Tier', {
                    id: item.id,
                    business: routeParams.business,
                  })}
              >
                <TierTextBackground
                  style={{ backgroundColor: getRankColor(item.rank) }}
                >
                  <TierText>{item.name}</TierText>
                </TierTextBackground>
                <PriceText>{formatValue(item.value)}</PriceText>
              </OtherTiersCard>
            ))}
          </TierList>
        </ScrollView>
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
