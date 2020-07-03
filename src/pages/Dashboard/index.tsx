import React, { useEffect, useState } from 'react';
import { SearchBar } from 'react-native-elements';

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

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();

  const [businesses, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    api.get('restaurants').then(response => {
      setBusinesses(response.data);
      // console.log(response.data);
    });
  }, []);

  return (
    <Container>
      <Header>
        <HeaderText>Descobrir</HeaderText>
        <Icon
          name="search"
          size={24}
          color="#a58328"
          // onPress={() => navigate('Home')}
        />
      </Header>
      <SearchBar
        containerStyle={styles.searchBar}
        // onChangeText={someMethod}
        // onClearText={someMethod}
        placeholder="Type Here..."
      />
      {/* <TopCardContainer colors={['rgba(28, 28, 28, 1)', 'rgba(28, 28, 28, 0)']}>
        <TopCardList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={businesses}
          keyExtractor={business => business.id}
          renderItem={({ item: business }) => <TopCard />}
        />
      </TopCardContainer> */}
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
