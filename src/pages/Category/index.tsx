import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Image, View, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, DarkTheme } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';

import {
  Container,
  Header,
  HeaderTitle,
  HeaderBackButton,
  HeaderSafeArea,
  HeaderBackButtonIcon,
  BusinessContainer,
  BusinessList,
  Business,
  BusinessImageContainer,
  BusinessCardBackgroundImage,
  BusinessContent,
  BusinessTitle,
  BusinessDescription,
  BusinessPricing,
  BusinessPriceContainer,
  BusinessPriceView,
  styles,
} from './styles';

interface Business {
  id: number;
  name: string;
  description: string;
  location: string;
  price: number;
  image_url: string;
  formattedPrice: string;
}

interface Params {
  id: number;
  name: string;
}

const Category: React.FC = () => {
  const [businesses, setBusiness] = useState<Business[]>([]);

  const { navigate, goBack } = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadBusiness(): Promise<void> {
      const { data } = await api.post('business/type', {
        category_id: routeParams.id,
      });
      setBusiness(data);
    }

    loadBusiness();
  }, [routeParams.name]);

  return businesses ? (
    <Container>
      <Header>
        <HeaderBackButton onPress={() => goBack()}>
          <HeaderBackButtonIcon name="chevron-left" size={30} />
        </HeaderBackButton>
        <HeaderTitle>{routeParams.name}</HeaderTitle>
      </Header>

      <BusinessContainer>
        <BusinessList
          data={businesses}
          keyExtractor={business => String(business.id)}
          renderItem={({ item: business }) => (
            <Business
              onPress={() => navigate('BusinessDetails', { id: business.id })}
              activeOpacity={0.6}
            >
              <BusinessContent>
                <BusinessCardBackgroundImage
                  source={{ uri: business.image_url }}
                >
                  <View style={styles.opacityView}>
                    <View style={{margin: 20}}>
                    <BusinessTitle>{business.name}</BusinessTitle>
                    <View style={styles.headerInfoView}>
                      <View style={styles.headerSubCount}>
                        <Text style={styles.headerInfoText}>Torne-se membro</Text>
                      </View>
                      <View style={styles.headerSpecialty}>
                        <Text style={styles.headerInfoText}>
                          A partir de 10,90
                        </Text>
                      </View>
                      </View>
                    </View>
                    <BusinessDescription>
                      {business.formattedPrice}
                    </BusinessDescription>
                    <BusinessPricing>{business.formattedPrice}</BusinessPricing>
                  </View>
                </BusinessCardBackgroundImage>
              </BusinessContent>
            </Business>
          )}
        />
      </BusinessContainer>
    </Container>
  ) : (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#666" />
    </View>
  );
};

export default Category;
