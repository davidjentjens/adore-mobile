import React from 'react';
import { ScrollView } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import Button from '../../components/Button';

import getRankColor from '../../utils/getRankColor';

import {
  Container,
  Header,
  HeaderText,
  HeaderSubText,
  AllDetailsContainer,
  MemberContainer,
  MemberInfoView,
  MemberInfoText,
  MemberInfoSubtitleText,
  MemberStatusView,
  MemberText,
  MemberStatusText,
  DescriptionInfoView,
  DescriptionText,
} from './styles';

interface Business {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
  zone: string;
}

interface Tier {
  id: string;
  name: string;
  image_url: string;
  rank: number;
  value: number;
  desc: string;
}

interface Params {
  tier: Tier;
  business: Business;
}

const PaymentValidation: React.FC = () => {
  const { navigate } = useNavigation();

  const route = useRoute();
  const routeParams = route.params as Params;

  return (
    <Container>
      <Header>
        <HeaderText>Parabéns!</HeaderText>
        <HeaderSubText>Assinatura feita com sucesso!</HeaderSubText>
      </Header>
      <ScrollView>
        <AllDetailsContainer>
          <MemberContainer>
            <MemberInfoView>
              <MemberInfoText>{routeParams.business.name}</MemberInfoText>
              <MemberInfoSubtitleText>
                {routeParams.business.zone}
              </MemberInfoSubtitleText>
            </MemberInfoView>
            <MemberStatusView
              style={{ backgroundColor: getRankColor(routeParams.tier.rank) }}
            >
              <MemberText />
              <MemberStatusText>{routeParams.tier.name}</MemberStatusText>
            </MemberStatusView>
          </MemberContainer>
          <DescriptionInfoView>
            <DescriptionText>{routeParams.tier.desc}</DescriptionText>
          </DescriptionInfoView>
          <Button
            onPress={() => {
              navigate('Orders');
            }}
          >
            Gerenciar suas assinaturas
          </Button>
        </AllDetailsContainer>
      </ScrollView>
    </Container>
  );
};

export default PaymentValidation;
