import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo-header.png';

import api from '../../services/api';

import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderText,
  TopCardContainer,
  TopCardList,
  TopCard,
  TopCardText,
  FeedContainer,
  BusinessList,
  BusinessCard,
  BusinessDataContainer,
  BusinessText,
  BusinessSubtitleText,
  BusinessCardBackgroundImage,
  BusinessCardGradient,
  TopCardGradient,
} from './styles';

export interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
}

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();

  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    api.get('restaurants').then(response => {
      setBusinesses(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText>Descobrir</HeaderText>
        <Icon
          name="log-out"
          size={24}
          color="#FFB84D"
          onPress={() => navigate('Home')}
        />
      </Header>
      <TopCardContainer colors={['rgba(28, 28, 28, 1)', 'rgba(28, 28, 28, 0)']}>
        <TopCardList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={businesses}
          keyExtractor={business => business.id}
          renderItem={({ item: business }) => <TopCard />}
        />
      </TopCardContainer>
      <BusinessList
        alwaysBounceVertical
        showsVerticalScrollIndicator={false}
        data={businesses}
        keyExtractor={business => business.id}
        renderItem={({ item: business }) => (
          <BusinessCard
            onPress={() => navigate('BusinessDetails', { id: business.id })}
          >
            <BusinessCardBackgroundImage source={{ uri: business.image_url }}>
              <BusinessCardGradient
                colors={['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.7)']}
              >
                <BusinessDataContainer>
                  <BusinessText>{business.name}</BusinessText>
                  <BusinessSubtitleText>
                    {business.location}
                  </BusinessSubtitleText>
                </BusinessDataContainer>
              </BusinessCardGradient>
            </BusinessCardBackgroundImage>
          </BusinessCard>
        )}
      />
    </Container>
  );
};

export default Dashboard;
