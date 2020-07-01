import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text } from 'react-native';

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
} from './styles';

export interface Business {
  id: string;
  name: string;
  local: string;
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
      <TopCardContainer>
        <TopCardList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={businesses}
          keyExtractor={business => business.id}
          renderItem={({ item: business }) => <TopCard />}
        />
      </TopCardContainer>
      <FeedContainer>
        <BusinessList
          alwaysBounceVertical
          showsVerticalScrollIndicator={false}
          data={businesses}
          keyExtractor={business => business.id}
          renderItem={({ item: business }) => (
            <BusinessCard>
              <Text>{business.name}</Text>
              <Button>Fazer Inscrição</Button>
            </BusinessCard>
          )}
        />
      </FeedContainer>
    </Container>
  );
};

export default Dashboard;
