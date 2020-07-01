import React, { useEffect, useState } from 'react';
import { Image, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/logo-header.png';

import Button from '../../components/Button';

import { Container, Header, IconContainer } from './styles';

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <Container>
      <Header>
        <Image source={Logo} />
        <Icon
          name="log-out"
          size={24}
          color="#FFB84D"
          onPress={() => navigate('Home')}
        />
      </Header>
      <Button>Button</Button>
    </Container>
  );
};

export default Dashboard;
