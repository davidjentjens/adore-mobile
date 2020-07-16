import React, { useEffect, useState, useCallback } from 'react';
import { Image } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import logoImg from '../../assets/logo-feed-header.png';

import {
  LikeIcon,
  PostAuthor,
  AuthorAvatar,
  AuthorName,
  AuthorInfo,
  Container,
  Header,
  PostContainer,
  PostCard,
  PostDataContainer,
  PostTextContainer,
  LikedIcon,
  PostTitle,
  PostDescription,
  PostCardBackgroundImage,
  PostCardGradient,
  ProfileIcon,
  HeaderLogo,
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
  const { signOut } = useAuth();

  const { navigate } = useNavigation();

  const [posts, setPosts] = useState<Post[]>([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    const loadPosts = async (): Promise<void> => {
      try {
        const { data: postData } = await api.get<Post[]>('posts');
        setPosts(postData);
      } catch (err) {
        signOut();
      }
    };

    loadPosts();
  }, [isFocused, navigate, signOut]);

  return (
    <Container>
      <Header>
        <HeaderLogo source={logoImg} />
        <ProfileIcon
          name="user"
          size={30}
          color="#fff"
          onPress={() => navigate('Profile')}
        />
      </Header>
      {/* * * FEED * * */}
      <ScrollView>
        {posts.map(post => (
          <PostContainer key={post.id}>
            <PostCard
              onPress={() =>
                navigate('Posts', {
                  id: post.id,
                })
              }
            >
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
                      <LikedIcon name="favorite" style={{}} size={35} />
                    </>
                  ) : (
                    <LikeIcon name="heart" size={35} />
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
