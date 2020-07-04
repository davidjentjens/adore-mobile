import React, { useEffect, useState } from 'react';
import { SearchBar, Text } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../../assets/logo-header.png';

import api from '../../services/api';

import Button from '../../components/Button';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';

import {
  Container,
  Header,
  HeaderText,
  SectionText,
  TopCardContainer,
  TopCardList,
  TopCard,
  TopCardText,
  FeatureCard,
  FeatureText,
  FeatureDataContainer,
  FeatureCardBackgroundImage,
  BusinessList,
  BusinessCard,
  BusinessDataContainer,
  BusinessText,
  BusinessSubtitleText,
  BusinessCardBackgroundImage,
  BusinessCardGradient,
  styles,
} from './styles';
// import { styles } from '../BusinessDetails/styles';

export interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
}

export interface Category {
  id: string;
  name: string;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();

  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [categories, setCategory] = useState<Category[]>([]);

  useEffect(() => {
    const loadBusinesses = async (): Promise<void> => {
      api.get('business').then(response => {
        setBusinesses(response.data);
        // console.log(response.data);
      });
    };

    const loadCategories = async (): Promise<void> => {
      api.get('categories').then(response => {
        setCategory(response.data);
      });
    };

    loadCategories();
    loadBusinesses();
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText>Descobrir</HeaderText>
      </Header>
      <ScrollView>
        {/** *******DESTAQUES******** */}
        <Carousel
          // ref={c => {
          //   this._carousel = c;
          // }}
          slideInterpolatedStyle={animatedStyles}
          inactiveSlideScale={1}
          inactiveSlideOpacity={0.7}
          layout="default"
          data={businesses}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 50}
          renderItem={({ item: business }) => (
            <FeatureCard
              onPress={() => navigate('BusinessDetails', { id: business.id })}
            >
              <FeatureCardBackgroundImage source={{ uri: business.image_url }}>
                <BusinessCardGradient
                  colors={['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.7)']}
                >
                  <FeatureDataContainer>
                    <FeatureText>{business.name}</FeatureText>
                    <BusinessSubtitleText>
                      {business.location}
                    </BusinessSubtitleText>
                  </FeatureDataContainer>
                </BusinessCardGradient>
              </FeatureCardBackgroundImage>
            </FeatureCard>
          )}
        />
        {/** *******CATEGORIAS******** */}
        <SectionText>Categorias</SectionText>
        <BusinessList
          alwaysBounceVertical
          scrollEnabled
          style={{ height: '100%' }}
          showsVerticalScrollIndicator={false}
          data={categories}
          keyExtractor={category => category.id}
          renderItem={({ item: category }) => (
            <BusinessCard
              onPress={() =>
                navigate('Favorites', { id: category.id, name: category.name })
              }
            >
              <BusinessCardBackgroundImage source={{ uri: category.image_url }}>
                <BusinessCardGradient
                  colors={['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.7)']}
                >
                  <BusinessDataContainer>
                    <BusinessText>{category.name}</BusinessText>
                  </BusinessDataContainer>
                </BusinessCardGradient>
              </BusinessCardBackgroundImage>
            </BusinessCard>
          )}
        />
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
