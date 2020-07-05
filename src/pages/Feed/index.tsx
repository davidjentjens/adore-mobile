import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { SearchBar, Text, Divider } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import {
  Dimensions,
  TouchableOpacity,
  Image,
  ViewPagerAndroidComponent,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { ConfigAPI } from '@babel/core';
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
  AuthorInfo,
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
  PostTextContainer,
  LikedIcon,
  PostTitle,
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
  logo_url: string;
}

export interface Category {
  id: string;
  name: string;
  image_url: string;
}

interface Post {
  id: string;
  title: string;
  short_desc: string;
  desc: string;
  image_url: string;
  business: Business;
  liked: boolean;
}

const Feed: React.FC = () => {
  const { navigate } = useNavigation();

  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const loadPosts = async (): Promise<void> => {
      const { data: postData } = await api.get<Post[]>('posts');
      // const { data: likeListData } = await api.get();

      setPosts(postData);
      console.log('getPosts');
    };
    loadPosts();
  }, []);

  const toggleLike = useCallback(async (post: Post) => {
    await api.post(`likes`, { business_post_id: post.id });
    // posts.push(post);
    // setPosts(posts);
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
        {posts.map(post => (
          <PostContainer key={post.id}>
            <PostCard>
              <PostCardBackgroundImage source={{ uri: post.image_url }}>
                {/* * * Autor * * */}
                <PostAuthor
                  colors={['rgba(10, 10, 10, 0.8)', 'rgba(10, 10, 10, 0)']}
                >
                  <AuthorInfo
                    onPress={() =>
                      navigate('BusinessDetails', { id: post.business.id })
                    }
                  >
                    <AuthorAvatar
                      source={{
                        uri: post.business.logo_url
                          ? post.business.logo_url
                          : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
                      }}
                    />
                    <AuthorName>{post.business.name}</AuthorName>
                  </AuthorInfo>
                  {post.liked ? (
                    <>
                      <LikedIcon
                        name="favorite"
                        style={{}}
                        size={35}
                        onPress={() => toggleLike(post)}
                      />
                    </>
                  ) : (
                    <LikeIcon
                      name="heart"
                      size={35}
                      onPress={() => toggleLike(post)}
                    />
                  )}
                </PostAuthor>
                {/* * * Descricao * * */}
                <PostCardGradient
                  colors={['rgba(10, 10, 10, 0)', 'rgba(5, 5, 5, 1)']}
                >
                  <PostDataContainer
                    onPress={() =>
                      navigate('Posts', {
                        id: post.id,
                      })
                    }
                  >
                    <PostTextContainer>
                      <PostTitle>{post.title}</PostTitle>
                      <PostDescription>{post.short_desc}</PostDescription>
                    </PostTextContainer>
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
