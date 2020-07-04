import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute, DarkTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';

import formatValue from '../../utils/formatValue';
import getRankColor from '../../utils/getRankColor';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderGradient,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
  SectionContainer,
  SectionTitle,
  TierContainer,
  TierList,
  TierCard,
  PriceText,
  TierTextBackground,
  TierText,
  subscribersButton,
  subscribersText,
  NavigationButton,
  ButtonPrice,
  ButtonText,
  styles,
} from './styles';
import Tier from '../Tier';

interface Params {
  id: number;
}

interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
  perks: [string];
}

interface Tier {
  id: number;
  name: string;
  desc: string;
  rank: number;
  value: number;
}

const BusinessDetails: React.FC = () => {
  const [business, setBusiness] = useState<Business>();
  const [tiers, setTiers] = useState<Tier[]>([]);

  const { navigate, goBack } = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadBusiness(): Promise<void> {
      const { data: businessData } = await api.get(
        `business/${routeParams.id}`,
      );

      const { data: tiersData } = await api.get(`tiers/${businessData.id}`);

      setBusiness(businessData);
      setTiers(tiersData);
    }

    loadBusiness();
  }, [routeParams.id]);

  return business ? (
    <Container>
      <Header source={{ uri: business.image_url }}>
        <HeaderGradient
          colors={['rgba(10, 10, 10, 0.4)', 'rgba(10, 10, 10, 0.9)']}
        >
          <HeaderSafeArea>
            <HeaderBackButton onPress={() => goBack()}>
              <HeaderBackButtonIcon name="chevron-left" size={30} />
            </HeaderBackButton>
            <Text style={styles.headerTitle}>{business.name}</Text>
            <Text style={styles.headerSubTitle}>{business.location}</Text>
            <View style={styles.headerInfoView}>
              <TouchableOpacity style={styles.headerSubCount}>
                <Text style={styles.headerInfoText}>30 membros</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerSpecialty}>
                <Text style={styles.headerInfoText}>
                  Especialista em Cervejas
                </Text>
              </TouchableOpacity>
            </View>
          </HeaderSafeArea>
        </HeaderGradient>
      </Header>
      <ScrollView horizontal={false}>
        <SafeAreaView style={styles.contentSafeArea}>
          <SectionContainer>
            <TierContainer>
              <SectionTitle>Planos</SectionTitle>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TierList style={{ width: Dimensions.get('window').width }}>
                  {tiers.map(tier => (
                    <TierCard
                      key={tier.id}
                      onPress={() => navigate('Tier', { id: tier.id })}
                    >
                      <TierTextBackground
                        style={{ backgroundColor: getRankColor(tier.rank) }}
                      >
                        <TierText>{tier.name}</TierText>
                      </TierTextBackground>
                      <PriceText>{formatValue(tier.value)}</PriceText>
                    </TierCard>
                  ))}
                </TierList>
              </ScrollView>
            </TierContainer>
          </SectionContainer>
          {/* <Button style={styles.buttonSub}>Tornar-se membro</Button> */}
        </SafeAreaView>
        {/* <NavigationButton>
          <ButtonText onPress={() => navigation.navigate('Tier')}>
            Tornar-se membro
          </ButtonText>
          <ButtonPrice>R$ 32,90</ButtonPrice>
        </NavigationButton> */}
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

export default BusinessDetails;
