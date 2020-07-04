import React, { useRef, useCallback, useEffect, useState } from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';
import ImagePicker from 'react-native-image-picker';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderGradient,
  HeaderSafeArea,
  HeaderBackButton,
  HeaderBackButtonIcon,
  ScrollContainer,
  subscribersButton,
  subscribersText,
  NavigationButton,
  ButtonPrice,
  ButtonText,
  styles,
} from './styles';

const Tier: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <Container>
      <Header source={{ uri: '' }}>
        <HeaderGradient
          colors={['rgba(10, 10, 10, 0.4)', 'rgba(10, 10, 10, 0.9)']}
        >
          <HeaderSafeArea>
            <HeaderBackButton onPress={() => navigation.goBack()}>
              <HeaderBackButtonIcon name="chevron-left" size={30} />
            </HeaderBackButton>
            <Text style={styles.headerTitle}>TITLE</Text>
            <Text style={styles.headerSubTitle}>SUBTITLE</Text>
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
    </Container>
  );
};

export default Tier;
