import React, { useEffect, useState } from 'react';
import { SearchBar, Text, Divider } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../../assets/logo-header.png';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';

import {
  Container,
  Header,
  HeaderText,
  SectionText,
  SectionSubtitleText,
  TopCardContainer,
  TopCardList,
  TopCard,
  TopCardText,
  FeatureCard,
  FeatureText,
  FeatureDataContainer,
  FeatureCardBackgroundImage,
  BusinessList,
  BusinessContainer,
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
  description: string;
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

  const { signOut } = useAuth();

  useEffect(() => {
    const loadBusinesses = async (): Promise<void> => {
      api.get('business/featured').then(response => {
        setBusinesses(response.data);
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
        <HeaderText>Destaques</HeaderText>
        <Icon
          name="user"
          size={30}
          color="#fff"
          onPress={() => navigate('Profile')}
          style={styles.opacityView}
        />
      </Header>
      <SectionSubtitleText>
        As melhores marcas da sua região
      </SectionSubtitleText>
      <ScrollView>
        {/** *******DESTAQUES******** */}
        <Carousel
          enableMomentum
          firstItem={1}
          initialNumToRender={3}
          slideInterpolatedStyle={animatedStyles}
          inactiveSlideScale={1}
          inactiveSlideOpacity={0.7}
          layout="default"
          data={businesses}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width - 30}
          renderItem={({ item: business }) => (
            <FeatureCard
              key={business.id}
              onPress={() => navigate('BusinessDetails', { id: business.id })}
            >
              <FeatureCardBackgroundImage source={{ uri: business.image_url }}>
                <BusinessCardGradient
                  colors={['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 0.7)']}
                >
                  <FeatureDataContainer>
                    <FeatureText>{business.name}</FeatureText>
                    <View
                      style={{
                        marginRight: 10,
                        marginLeft: 20,
                        marginBottom: 20,
                      }}
                    >
                      <View style={styles.headerInfoView}>
                        <View style={styles.headerSubCount}>
                          <Text style={styles.headerInfoText}>
                            Torne-se membro
                          </Text>
                        </View>
                        <View style={styles.headerSpecialty}>
                          <Text style={styles.headerInfoText}>
                            A partir de 10,90
                          </Text>
                        </View>
                      </View>
                    </View>
                  </FeatureDataContainer>
                </BusinessCardGradient>
              </FeatureCardBackgroundImage>
            </FeatureCard>
          )}
        />
        <Divider style={{ backgroundColor: '#2f2f2f', marginTop: 25 }} />
        {/** *******CATEGORIAS******** */}
        <SectionText>Categorias</SectionText>
        <SectionSubtitleText>
          Encontre seu próximo restaurante favorito
        </SectionSubtitleText>
        {categories.map(category => (
          <BusinessContainer key={category.id}>
            <BusinessCard
              onPress={() =>
                navigate('Category', { id: category.id, name: category.name })
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
          </BusinessContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Dashboard;
