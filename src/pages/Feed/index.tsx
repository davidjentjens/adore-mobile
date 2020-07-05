import React, { useEffect, useState } from 'react';
import { SearchBar, Text, Divider } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, TouchableOpacity, Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../../assets/logo-header.png';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

import Button from '../../components/Button';
import { scrollInterpolator, animatedStyles } from '../../utils/animations';

import logoImg from '../../assets/logo-feed-header.png';

import {
  LikeIcon,
  PostAuthor,
  AuthorAvatar,
  AuthorName,
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
  PostContainer,
  PostCard,
  PostDataContainer,
  PostDescription,
  BusinessSubtitleText,
  PostCardBackgroundImage,
  PostCardGradient,
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

const Feed: React.FC = () => {
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
        {/* <HeaderText>Feed</HeaderText> */}
        <Image
          source={logoImg}
          style={{
            width: '35%',
            resizeMode: 'contain',
            padding: 0,
            marginBottom: 0,
          }}
        />
        <Icon
          name="user"
          size={30}
          color="#fff"
          onPress={() => navigate('Profile')}
          style={styles.opacityView}
        />
      </Header>
      {/* * * FEED * * */}
      <ScrollView>
        {categories.map(category => (
          <PostContainer key={category.id}>
            <PostCard
              onPress={() =>
                navigate('Category', { id: category.id, name: category.name })}
            >
              <PostCardBackgroundImage source={{ uri: category.image_url }}>
                {/* * * Autor * * */}
                <PostAuthor
                  colors={['rgba(10, 10, 10, 0.8)', 'rgba(10, 10, 10, 0)']}
                >
                  <AuthorAvatar
                    source={{
                      uri:
                        'https://avatars0.githubusercontent.com/u/1776118?s=400&u=6adcf808eca5fa3e5f864c90c4555f86d9a552a8&v=4',
                    }}
                  />
                  <AuthorName>Mr. Jentjens</AuthorName>
                </PostAuthor>
                {/* * * Descricao * * */}
                <PostCardGradient
                  colors={['rgba(10, 10, 10, 0)', 'rgba(10, 10, 10, 1)']}
                >
                  <PostDataContainer>
                    <PostDescription>
                      Descricao da foto. Lorem ipsum dolor ipsum blablabla
                      lelele lilili lololo lululu.
                    </PostDescription>
                    <LikeIcon name="heart" size={35} />
                  </PostDataContainer>
                </PostCardGradient>
              </PostCardBackgroundImage>
            </PostCard>
          </PostContainer>
        ))}
      </ScrollView>
    </Container>
  );
};

export default Feed;
