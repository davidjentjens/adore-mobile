import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import { View, Image, ActivityIndicator, Text } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute, DarkTheme } from '@react-navigation/native';
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
} from './styles';

interface Params {
  id: number;
}

interface Business {
  id: number;
  name: string;
  location: string;
  image_url: string;
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
          colors={['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.7)']}
        >
          <HeaderSafeArea>
            <HeaderBackButton onPress={() => navigation.goBack()}>
              <HeaderBackButtonIcon name="arrow-left" size={24} />
            </HeaderBackButton>
            <Text>{business.name}</Text>
            <Text>{business.location}</Text>
          </HeaderSafeArea>
        </HeaderGradient>
      </Header>
      <ScrollContainer />
    </Container>
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
};

export default BusinessDetails;
