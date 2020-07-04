import React, { useEffect, useState, useCallback } from 'react';
import { Image, ScrollView, Dimensions } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import formatValue from '../../utils/formatValue';
import { Category } from '../Dashboard';

import {
  Container,
  Header,
  HeaderText,
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
  styles,
} from './styles';

interface Business {
  id: string;
  name: string;
  location: string;
  description: string;
  image_url: string;
}

const PaymentValidation: React.FC = () => {
  const { navigate, goBack } = useNavigation();

  const [business, setBusinesses] = useState<Business[]>([]);

  useEffect(() => {
    const loadBusinesses = async (): Promise<void> => {
      api.get('business/featured').then(response => {
        setBusinesses(response.data);
      });
    };

    loadBusinesses();
  }, []);

  return business ? (
    <Container>
      <Header>
        <Icon
          name="chevron-left"
          size={30}
          color="#fff"
          onPress={() => goBack()}
          style={{ marginBottom: 10 }}
        />
        <HeaderText>Sua assinatura</HeaderText>
      </Header>
      <ScrollView>
        <AllDetailsContainer>
          <MemberContainer>
            <MemberInfoView>
              <MemberInfoText>Cafeteria Tranjan</MemberInfoText>
              <MemberInfoSubtitleText>Botafogo</MemberInfoSubtitleText>
            </MemberInfoView>
            <MemberStatusView>
              <MemberText>Membro</MemberText>
              <MemberStatusText>Ouro</MemberStatusText>
            </MemberStatusView>
          </MemberContainer>
          <DescriptionInfoView>
            <MemberInfoText>Descrição</MemberInfoText>
            <DescriptionText>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed
            </DescriptionText>
          </DescriptionInfoView>
        </AllDetailsContainer>
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

export default PaymentValidation;
