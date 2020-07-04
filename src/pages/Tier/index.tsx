import React, { useRef, useCallback, useEffect, useState } from 'react';
import { View, ScrollView, Text, ImageBackground } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';

import { Container, Header, HeaderText, SectionText, TierCard } from './styles';

const Tier: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <Header>
        <Icon
          name="chevron-left"
          size={30}
          color="#fff"
          onPress={() => navigation.goBack()}
          style={{ marginBottom: 10 }}
        />
        <HeaderText>Cervejaria do X</HeaderText>
      </Header>
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>
        <SectionText>Ouro</SectionText>
        <TierCard>
          <View
            style={{
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <ImageBackground
              style={{ width: '100%', height: 180, borderRadius: 10 }}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1449049607083-e29383d58423?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI2MDAzfQ&auto=format&fit=crop&w=500&q=80',
              }}
            />
          </View>
          <View style={{ padding: 20 }}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'Roboto-Regular',
                fontSize: 15,
                textAlign: 'justify',
                lineHeight: 20,
              }}
            >
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam.
            </Text>
          </View>
        </TierCard>
        <Button onPress={() => navigation.navigate('PaymentValidation')}>
          R$ 50,90/mês
        </Button>
        <SectionText>Outros Planos</SectionText>
      </ScrollView>
    </Container>
  );
};

export default Tier;
