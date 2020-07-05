import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, ActivityIndicator, Text, ScrollView } from 'react-native';

import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
import { State } from 'react-native-gesture-handler';
import api from '../../services/api';

import {
  Container,
  Header,
  HeaderGradient,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
  ButtonLikePost,
  styles,
} from './styles';

interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
  perks: [string];
}

interface Params {
  id: string;
}

interface Post {
  id: string;
  title: string;
  short_desc: string;
  desc: string;
  image_url: string;
  liked: boolean;
}

const Posts: React.FC = () => {
  // API
  const [post, setPost] = useState<Post>();
  const [isLiked, setIsLiked] = useState<boolean>();

  // Navigation
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPost(): Promise<void> {
      const { data: postData } = await api.get(`/posts/${routeParams.id}`);

      // setIsLiked(postData.liked);
      // console.log('gotIsLiked', postData.liked);
      setPost(postData);
    }
    loadPost();
  }, [routeParams.id, isFocused]);

  const toggleLike = useCallback(async () => {
    await api.post(`likes`, { business_post_id: routeParams.id });
    setIsLiked(!isLiked);
  }, [routeParams.id, isLiked]);

  const likedButtonText = useMemo(
    () => (isLiked ? 'Descurtir Publicação' : 'Curtir Publicação'),
    [isLiked],
  );

  // useLayoutEffect(() => {}, [likedButtonText, toggleLike]);

  return post ? (
    <Container>
      <ScrollView>
        <Header source={{ uri: post.image_url }}>
          <HeaderGradient
            colors={['rgba(10, 10, 10, 0.4)', 'rgba(10, 10, 10, 0.9)']}
          >
            <HeaderSafeArea>
              <HeaderBackButton onPress={() => goBack()}>
                <HeaderBackButtonIcon name="chevron-left" size={30} />
              </HeaderBackButton>
              <Text style={styles.headerTitle}>{post.title}</Text>
              <View style={styles.headerInfoView}>
                <Text style={styles.headerSubTitle}>{post.short_desc}</Text>
              </View>
            </HeaderSafeArea>
          </HeaderGradient>
        </Header>

        <View style={styles.longDescTextContainer}>
          <Text style={styles.longDescText}>{post.desc}</Text>
        </View>
        <ButtonLikePost
          onPress={() => {
            toggleLike();
          }}
        >
          <Text style={styles.headerInfoText}>{likedButtonText}</Text>
        </ButtonLikePost>
      </ScrollView>
    </Container>
  ) : (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
      }}
    >
      <ActivityIndicator size="large" color="#a58238" />
    </View>
  );
};

export default Posts;
