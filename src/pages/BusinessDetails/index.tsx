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
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute, DarkTheme } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderGradient,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
  ScrollContainer,
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
  id: number;
  name: string;
  location: string;
  image_url: string;
  perks: [string];
}

const BusinessDetails: React.FC = () => {
  const [business, setBusiness] = useState<Business>();
  // const [isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadBusiness(): Promise<void> {
      const { data } = await api.get(`business/${routeParams.id}`);

      setBusiness(data);
    }

    loadBusiness();
  }, [routeParams.id]);

  // useLayoutEffect(() => {
  // Add the favorite icon on the right of the header bar
  // navigation.setOptions({
  //   headerRight: () => (
  //     <MaterialIcon
  //       name={favoriteIconName}
  //       size={24}
  //       color="#FFB84D"
  //       onPress={() => toggleFavorite()}
  //     />
  //   ),
  // });
  // }, [navigation]);

  return business ? (
    <Container>
      <Header source={{ uri: business.image_url }}>
        <HeaderGradient
          colors={['rgba(10, 10, 10, 0.4)', 'rgba(10, 10, 10, 0.9)']}
        >
          <HeaderSafeArea>
            <HeaderBackButton onPress={() => navigation.goBack()}>
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
      <ScrollView>
        <SafeAreaView style={styles.contentSafeArea}>
          <SectionContainer>
            <TierContainer>
              <SectionTitle>Planos</SectionTitle>
              <ScrollView
                horizontal="true"
                showsHorizontalScrollIndicator="false"
              >
                <TierList>
                  <TierCard onPress={() => navigation.navigate('Tier')}>
                    <TierTextBackground>
                      <TierText>Ouro</TierText>
                    </TierTextBackground>
                    <PriceText>R$ 50,90</PriceText>
                  </TierCard>
                  <TierCard>
                    <TierTextBackground style={{ backgroundColor: '#5a5854' }}>
                      <TierText>Prata</TierText>
                    </TierTextBackground>
                    <PriceText>R$ 40,90</PriceText>
                  </TierCard>
                  <TierCard>
                    <TierTextBackground style={{ backgroundColor: '#65511b' }}>
                      <TierText>Bronze</TierText>
                    </TierTextBackground>
                    <PriceText>R$ 30,90</PriceText>
                  </TierCard>
                </TierList>
              </ScrollView>
            </TierContainer>
          </SectionContainer>
          <FlatList
            alwaysBounceVertical
            showsVerticalScrollIndicator={false}
            data={business.perks}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item: perk }) => (
              <View style={styles.perksContainer}>
                <Text style={styles.perkText}>{perk}</Text>
              </View>
            )}
          />
          <ScrollContainer />
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
