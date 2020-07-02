import React, {
  useEffect,
  useState,
  useCallback,
  useMemo,
  useLayoutEffect,
} from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute, DarkTheme } from '@react-navigation/native';
import formatValue from '../../utils/formatValue';

import api from '../../services/api';

import {
  Container,
  Header,
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
}

const BusinessDetails: React.FC = () => {
  const [business, setBusiness] = useState({} as Business);
  const [isFavorite, setIsFavorite] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadBusiness(): Promise<void> {
      const { data } = await api.get(`foods/${routeParams.id}`);
    }

    loadBusiness();
  }, [routeParams.id]);

  const toggleFavorite = useCallback(async () => {
    await api.post(`favorites`, business);

    setIsFavorite(!isFavorite);
  }, [isFavorite, business]);

  // Calculate the correct icon name
  const favoriteIconName = useMemo(
    () => (isFavorite ? 'favorite' : 'favorite-border'),
    [isFavorite],
  );

  useLayoutEffect(() => {
    // Add the favorite icon on the right of the header bar
    navigation.setOptions({
      headerRight: () => (
        <MaterialIcon
          name={favoriteIconName}
          size={24}
          color="#FFB84D"
          onPress={() => toggleFavorite()}
        />
      ),
    });
  }, [navigation, favoriteIconName, toggleFavorite]);

  return (
    <Container>
      <Header />

      <ScrollContainer />
    </Container>
  );
};

export default BusinessDetails;
