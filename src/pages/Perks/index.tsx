import React, { useEffect, useState } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import api from '../../services/api';

import {
  Container,
  Header,
  HeaderGradient,
  SectionTitle,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
  PerksContainer,
  TierCard,
  TierStatusText,
  PerkTitleText,
  PerkDescText,
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
  business: Business;
}

interface Post {
  id: string;
  title: string;
  short_desc: string;
  desc: string;
  image_url: string;
}

const Perks: React.FC = () => {
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
  }, []);

  return (
    <Container>
      <ScrollView>
        <Header>
          <HeaderSafeArea>
            <HeaderBackButton onPress={() => goBack()}>
              <HeaderBackButtonIcon name="chevron-left" size={30} />
            </HeaderBackButton>
            <Text style={styles.headerTitle}>Vantagens</Text>
            <View style={styles.headerInfoView}>
              <Text style={styles.headerSubTitle}>{}</Text>
            </View>
          </HeaderSafeArea>
        </Header>
        <TierCard>
          <ImageBackground
            style={{
              width: '100%',
              height: 180,
              borderRadius: 10,
            }}
            source={{
              uri: 'https://images.unsplash.com/photo-1449049607083-e29383d58423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI2MDAzfQ&auto=format&fit=crop&w=500&q=80',
            }}
          />
        </TierCard>
        <SectionTitle>Conteúdo</SectionTitle>
        <View>
          <PerksContainer>
            <PerkTitleText>Pack de Cervejas</PerkTitleText>
            <PerkDescText>
              As melhores cervejas distribuídas entre seis sabores
            </PerkDescText>
          </PerksContainer>
        </View>
      </ScrollView>
    </Container>

    // : (
    //   <View
    //     style={{
    //       flex: 1,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       backgroundColor: '#1c1c1c',
    //     }}
    //   >
    //     <ActivityIndicator size="large" color="#a58238" />
    //   </View>
  );
};

export default Perks;
