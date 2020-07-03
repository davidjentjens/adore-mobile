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
  subscribersButton,
  subscribersText,
  NavigationButton,
  ButtonPrice,
  ButtonText,
  styles,
} from './styles';

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
      const { data } = await api.get(`restaurants/${routeParams.id}`);

      setBusiness(data);
    }

    loadBusiness();
  }, [routeParams.id]);

  // const toggleFavorite = useCallback(async () => {
  //   await api.post(`favorites`, business);

  //   setIsFavorite(!isFavorite);
  // }, [isFavorite, business]);

  // // Calculate the correct icon name
  // const favoriteIconName = useMemo(
  //   () => (isFavorite ? 'favorite' : 'favorite-border'),
  //   [isFavorite],
  // );

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
              <HeaderBackButtonIcon name="arrow-left" size={24} />
            </HeaderBackButton>
            <Text style={styles.headerTitle}>{business.name}</Text>
            <Text style={styles.headerSubTitle}>{business.location}</Text>
            <View style={styles.headerInfoView}>
              <TouchableOpacity style={styles.headerSubCount}>
                <Text style={styles.headerInfoText}>32 inscritos</Text>
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
      <SafeAreaView style={styles.contentSafeArea}>
        <Text style={styles.sectionTitle}>Vantagens</Text>
        <FlatList
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          data={business.perks}
          renderItem={({ item: perk }) => (
            <View style={styles.perksContainer}>
              <Text style={styles.perkText}>{perk}</Text>
            </View>
          )}
        />
        <ScrollContainer />
        {/* <Button style={styles.buttonSub}>Tornar-se membro</Button> */}
        <NavigationButton>
          <ButtonText>Tornar-se membro</ButtonText>
          <ButtonPrice>R$ 32,90</ButtonPrice>
        </NavigationButton>
      </SafeAreaView>
    </Container>
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
};

export default BusinessDetails;
