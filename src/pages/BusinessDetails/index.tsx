import React, { useEffect, useState, useCallback } from 'react';
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
  TierSubscribedContainer,
  TierSubscribedText,
  TierStatusText,
  PostListContainer,
  ImagePost,
  TextPostContainer,
  TitlePost,
  DescPost,
  ButtonPost,
  styles,
} from './styles';

interface Params {
  id: string;
}

interface Business {
  id: string;
  name: string;
  location: string;
  image_url: string;
  perks: [string];
  tier: Tier;
  zone: string;
  members: number;
  subtitle: string;
}

interface Subscriptions {
  id: string;
  business: Business;
  tier: Tier;
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
  const [subscriptions, setSubs] = useState<Subscriptions>();
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

      const { data: postsData } = await api.get(
        `/posts/business/${businessData.id}`,
      );
      setBusiness(businessData);
      setTiers(tiersData);
      setPosts(postsData);
    }

    const loadSubs = async (): Promise<void> => {
      api.get(`subscriptions`).then(response => {
        const responseAsSubscription = response.data as Subscriptions[];
        const filteredResponse = responseAsSubscription.find(item => {
          return item.business.id === routeParams.id;
        });
        setSubs(filteredResponse);
      });
    };

    loadBusiness();
    loadSubs();
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
            <Text style={styles.headerSubTitle}>{business.zone}</Text>
            <View style={styles.headerInfoView}>
              <View style={styles.headerSubCount}>
                <Text style={styles.headerInfoText}>
                  {business.members} membros
                </Text>
              </View>
              {business.subtitle ? (
                <View style={styles.headerSpecialty}>
                  <Text style={styles.headerInfoText}>{business.subtitle}</Text>
                </View>
              ) : (
                <></>
              )}
            </View>
          </HeaderSafeArea>
        </HeaderGradient>
      </Header>
      <ScrollView horizontal={false}>
        <SafeAreaView style={styles.contentSafeArea}>
          <SectionContainer>
            <TierContainer>
              <SectionTitle>Planos</SectionTitle>
              {subscriptions ? (
                <TierSubscribedContainer>
                  <TierSubscribedText>
                    Seu status de assinante
                  </TierSubscribedText>
                  <TierStatusText>{subscriptions.tier.name}</TierStatusText>
                  <View style={styles.headerOptionsView}>
                    <TouchableOpacity
                      style={styles.headerSubCount}
                      onPress={() =>
                        navigate('Perks', {
                          tier: subscriptions.tier,
                          subscription_id: subscriptions.id,
                        })}
                    >
                      <Text style={styles.headerInfoText}>Vantagens</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.headerCancel}
                      onPress={() =>
                        navigate('Profile', {
                          id: business.id,
                          business,
                        })}
                    >
                      <Text style={styles.headerInfoText}>Alterar Dados</Text>
                    </TouchableOpacity>
                  </View>
                </TierSubscribedContainer>
              ) : (
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  <TierList style={{ width: Dimensions.get('window').width }}>
                    {tiers.map(tier => (
                      <TierCard
                        key={tier.id}
                        onPress={() =>
                          navigate('Tier', {
                            id: tier.id,
                            business,
                          })}
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
              )}
            </TierContainer>
            <SectionTitle>Novidades</SectionTitle>
            {posts.map(post => (
              <PostListContainer key={post.id}>
                <ImagePost source={{ uri: post.image_url }} />
                <TextPostContainer>
                  <TitlePost>{post.title}</TitlePost>
                  <DescPost>{post.short_desc}</DescPost>
                  <ButtonPost
                    onPress={() =>
                      navigate('Posts', {
                        id: post.id,
                      })
                    }
                  >
                    <Text
                      style={{ color: 'white', fontFamily: 'Roboto-Medium' }}
                    >
                      Ver post completo
                    </Text>
                  </ButtonPost>
                </TextPostContainer>
              </PostListContainer>
            ))}
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
