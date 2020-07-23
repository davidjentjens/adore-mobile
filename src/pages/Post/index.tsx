import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { View, ActivityIndicator, Text, ScrollView } from 'react-native';
import PushNotification from 'react-native-push-notification';

import {
  useNavigation,
  useRoute,
  useIsFocused,
} from '@react-navigation/native';
import 'react-native-gesture-handler';
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

const Post: React.FC = () => {
  // API
  const [post, setPost] = useState<Post>();
  const [isLiked, setIsLiked] = useState<boolean>();

  // Navigation
  const { goBack } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;
  const isFocused = useIsFocused();

  useEffect(() => {
    async function loadPost(): Promise<void> {
      const { data: postData } = await api.get(`/posts/${routeParams.id}`);

      setIsLiked(postData.liked);
      setPost(postData);
    }
    loadPost();
  }, [routeParams.id, isFocused]);

  const toggleLike = useCallback(async () => {
    await api.post(`likes`, { business_post_id: routeParams.id });
    setIsLiked(!isLiked);

    PushNotification.localNotification({
      /* iOS only properties */
      alertAction: 'view', // (optional) default: view
      category: !isLiked ? 'like' : 'unlike', // (optional) default: empty string
      userInfo: {}, // (optional) default: {} (using null throws a JSON value '<null>' error)

      /* iOS and Android properties */
      title: !isLiked ? 'YOU LIKED A GOOD POST' : 'YOU UNLIKED A BAD POST', // (optional)
      message: !isLiked ? 'you liked a post' : 'you unliked a post', // (required)
      playSound: true, // (optional) default: true
      soundName: 'default', // (optional) Sound to play when the notification is shown. Value of 'default' plays the default sound. It can be set to a custom sound such as 'android.resource://com.xyz/raw/my_sound'. It will look for the 'my_sound' audio file in 'res/raw' directory and play it. default: 'default' (default sound is played)
    });
  }, [routeParams.id, isLiked]);

  const likedButtonText = useMemo(
    () => (isLiked ? 'Descurtir Publicação' : 'Curtir Publicação'),
    [isLiked],
  );

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

export default Post;
