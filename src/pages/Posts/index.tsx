import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import formatValue from '../../utils/formatValue';
import getRankColor from '../../utils/getRankColor';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderGradient,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
  SectionContainer,
  SectionTitle,
  TierContainer,
  TierList,
  TierCard,
  PriceText,
  TierTextBackground,
  TierText,
  PostListContainer,
  ImagePost,
  TextPostContainer,
  TitlePost,
  DescPost,
  ButtonPost,
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
  const [business, setBusiness] = useState<Business>();
  const [posts, setPosts] = useState<Post[]>([]);

  const { navigate, goBack } = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadBusiness(): Promise<void> {
      const { data: businessData } = await api.get(
        `business/${routeParams.id}`,
      );

      const { data: postsData } = await api.get(`/posts/${businessData.id}`);

      setBusiness(businessData);
      setPosts(postsData);
    }

    loadBusiness();
  }, [routeParams.id]);

  return business ? (
    <Container>
      <Header source={{ uri: business.image_url }}>
        <HeaderGradient
          colors={['rgba(10, 10, 10, 0.4)', 'rgba(10, 10, 10, 0.9)']}
        >
          <HeaderSafeArea>
            <HeaderBackButton onPress={() => goBack()}>
              <HeaderBackButtonIcon name="chevron-left" size={30} />
            </HeaderBackButton>
            <Text style={styles.headerTitle}>Nova cerveja gelada</Text>
            {/* <Text style={styles.headerSubTitle}>{business.location}</Text> */}
            <View style={styles.headerInfoView}>
              <Text style={styles.headerSubTitle}>
                Descubra as novas cervejas disponíveis agora em nosso site
              </Text>
            </View>
          </HeaderSafeArea>
        </HeaderGradient>
      </Header>
      <ScrollView>
        <View style={styles.longDescTextContainer}>
          <Text style={styles.longDescText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            eleifend libero et dolor aliquam aliquam. Duis volutpat magna quis
            nunc ultricies tincidunt. Aenean consequat, elit vel vestibulum
            feugiat, leo ex porta arcu, vel dignissim arcu ligula rhoncus urna.
            Praesent varius auctor felis id blandit. Nullam interdum, ipsum non
            hendrerit elementum, orci dui viverra orci, ac pulvinar neque sem
            maximus lacus. Ut nec massa eget purus posuere ornare quis sed odio.
            Phasellus consequat fringilla nibh eu faucibus. Phasellus aliquam
            dolor vel magna porttitor ultricies. In semper tortor nec lectus
            fringilla semper. Praesent ac velit turpis. Vestibulum fermentum
            quis risus id ornare. Vestibulum finibus tincidunt tempor. Mauris
            nec risus fermentum, viverra augue non, finibus felis. In cursus
            ipsum et est maximus, quis aliquet nisi accumsan. Donec commodo
            magna nec ornare elementum. Vivamus maximus libero ac enim egestas
            rutrum. Phasellus et sapien non nisi luctus tempor nec a libero.
            Quisque convallis nulla sit amet leo sollicitudin tempor.
            Suspendisse ultricies at nisi ac tempor. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Fusce euismod, dui id lobortis pharetra, est sem lacinia
            nisi, ac egestas sapien dui ut lectus. Donec mollis, augue quis
            pretium sollicitudin, leo erat elementum lacus, nec aliquam leo
            lectus a odio.
          </Text>
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
