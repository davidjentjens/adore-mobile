import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, ScrollView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderGradient,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
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
}

const Posts: React.FC = () => {
  // API
  const [post, setPost] = useState<Post>();

  // Navigation
  const { navigate, goBack } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadBusiness(): Promise<void> {
      const { data: postData } = await api.get(`/posts/${routeParams.id}`);

      setPost(postData);
    }

    loadBusiness();
  }, [routeParams.id]);

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
