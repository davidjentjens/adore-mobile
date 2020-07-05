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

interface Params {
  id: number;
}

interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
  perks: [string];
}

interface Tier {
  id: number;
  name: string;
  desc: string;
  rank: number;
  value: number;
}

interface Post {
  id: string;
  title: string;
  short_desc: string;
  desc: string;
  image_url: string;
}

const BusinessDetails: React.FC = () => {
  const [business, setBusiness] = useState<Business>();
  const [tiers, setTiers] = useState<Tier[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);

  const { navigate, goBack } = useNavigation();
  const route = useRoute();

  const routeParams = route.params as Params;

  useEffect(() => {
    async function loadBusiness(): Promise<void> {
      const { data: businessData } = await api.get(
        `business/${routeParams.id}`,
      );

      const { data: tiersData } = await api.get(
        `tiers/business/${businessData.id}`,
      );

      const { data: postsData } = await api.get(`/posts/${businessData.id}`);

      setBusiness(businessData);
      setTiers(tiersData);
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
            <Text style={styles.headerTitle}>{business.name}</Text>
            {/* <Text style={styles.headerSubTitle}>{business.location}</Text> */}
            <View style={styles.headerInfoView}>
              <TouchableOpacity style={styles.headerSubCount}>
                <Text style={styles.headerInfoText}>30 membros</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.headerSpecialty}>
                <Text style={styles.headerInfoText}>
                  Especialista em Cervejas
                </Text>
              </TouchableOpacity>
            </View>
          </HeaderSafeArea>
        </HeaderGradient>
      </Header>
      <ScrollView horizontal={false}>
        <SafeAreaView style={styles.contentSafeArea}>
          <SectionContainer>
            <TierContainer>
              <SectionTitle>Planos</SectionTitle>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TierList style={{ width: Dimensions.get('window').width }}>
                  {tiers.map(tier => (
                    <TierCard
                      key={tier.id}
                      onPress={() =>
                        navigate('Tier', {
                          id: tier.id,
                          business,
                        })
                      }
                    >
                      <TierTextBackground
                        style={{ backgroundColor: getRankColor(tier.rank) }}
                      >
                        <TierText>{tier.name}</TierText>
                      </TierTextBackground>
                      <PriceText>{formatValue(tier.value)}</PriceText>
                    </TierCard>
                  ))}
                </TierList>
              </ScrollView>
            </TierContainer>
            <SectionTitle>Feed</SectionTitle>
            <PostListContainer>
              <ImagePost source={{ uri: business.image_url }} />
              <TextPostContainer>
                <TitlePost>{business.name}</TitlePost>
                <DescPost>Confira nossa nova cerveja doce</DescPost>
                <ButtonPost>
                  <Text style={{ color: 'white', fontFamily: 'Roboto-Medium' }}>
                    Ver post completo
                  </Text>
                </ButtonPost>
              </TextPostContainer>
            </PostListContainer>
          </SectionContainer>
          {/* <Button style={styles.buttonSub}>Tornar-se membro</Button> */}
        </SafeAreaView>
        {/* <NavigationButton>
          <ButtonText onPress={() => navigation.navigate('Tier')}>
            Tornar-se membro
          </ButtonText>
          <ButtonPrice>R$ 32,90</ButtonPrice>
        </NavigationButton> */}
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

export default BusinessDetails;
