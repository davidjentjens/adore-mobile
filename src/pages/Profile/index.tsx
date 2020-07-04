import React, { useRef, useCallback } from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TextInput,
  Alert,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
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
  Title,
  BackButton,
  UserAvatarButton,
  UserAvatar,
  SignOutButton,
  styles,
} from './styles';

interface ProfileFormData {
  name: string;
  email: string;
  old_password: string;
  password: string;
  password_confirmation: string;
}

const Profile: React.FC = () => {
  const { user, updateUser, signOut } = useAuth();

  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const emailInputRef = useRef<TextInput>(null);
  const oldPasswordInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const confirmPasswordInputRef = useRef<TextInput>(null);

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          email: Yup.string()
            .email('Digite um email válido')
            .required('E-mail obrigatório'),
          old_password: Yup.string(),
          password: Yup.string().when('old_password', {
            is: val => !!val.length,
            then: Yup.string().required('Campo obrigatório'),
            otherwise: Yup.string(),
          }),
          password_confirmation: Yup.string()
            .when('old_password', {
              is: val => !!val.length,
              then: Yup.string().required('Campo obrigatório'),
              otherwise: Yup.string(),
            })
            .oneOf([Yup.ref('password'), null], 'Confirmação incorreta'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const {
          name,
          email,
          old_password,
          password,
          password_confirmation,
        } = data;

        const formData = {
          name,
          email,
          ...(old_password
            ? {
                old_password,
                password,
                password_confirmation,
              }
            : {}),
        };

        const response = await api.put('/profile', formData);

        updateUser(response.data);

        Alert.alert('Perfil atualizado com sucesso!');

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na atualização do perfil',
          'Ocorreu um erro ao atualizar seu perfil, tente novamente.',
        );
      }
    },
    [navigation, updateUser],
  );

  const handleUpdateAvatar = useCallback(() => {
    ImagePicker.showImagePicker(
      {
        title: 'Selecione um avatar',
        cancelButtonTitle: 'Cancelar',
        takePhotoButtonTitle: 'Usar camera',
        chooseFromLibraryButtonTitle: 'Escolher da galeria',
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.error) {
          Alert.alert('Erro ao atualizar seu avatar.');
          return;
        }

        const data = new FormData();

        data.append('avatar', {
          type: 'image/jpeg',
          name: `${user.id}.jpeg`,
          uri: response.uri,
        });

        try {
          api.patch('users/avatar', data).then(apiResponse => {
            updateUser(apiResponse.data);
          });
        } catch (err) {
          Alert.alert('err');
        }
      },
    );
  }, [updateUser, user.id]);

  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#1c1c1c' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.headerContainer}>
        <Icon
          name="chevron-left"
          size={30}
          color="#fff"
          onPress={handleGoBack}
          style={{ marginBottom: 10 }}
        />
        <Text style={styles.headerText}>Perfil</Text>
        {/* <Icon name="log-out" size={30} color="#cc3535" onPress={signOut} /> */}
      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <Container>
          <UserAvatarButton onPress={handleUpdateAvatar}>
            <UserAvatar source={{ uri: user.avatar_url }} />
          </UserAvatarButton>

          <View>
            <Title>Meu perfil</Title>
          </View>

          <Form initialData={user} ref={formRef} onSubmit={handleSubmit}>
            <Input
              autoCapitalize="words"
              name="name"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
              containerStyle={styles.inputBackground}
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />

            <Input
              ref={emailInputRef}
              keyboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              name="email"
              icon="mail"
              placeholder="E-mail"
              returnKeyType="next"
              containerStyle={styles.inputBackground}
              onSubmitEditing={() => oldPasswordInputRef.current?.focus()}
            />

            <Button
              onPress={signOut}
              style={{ backgroundColor: '#742635', marginTop: 10 }}
            >
              Finalizar Sessão
            </Button>

            <View>
              <Title>Endereço de entrega</Title>
            </View>

            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              icon="map"
              placeholder="Logradouro (Rua, Avenida, etc)"
              textContentType="newPassword"
              returnKeyType="next"
              containerStyle={styles.inputBackground}
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            />
            <View style={styles.sideBySideInputsContainer}>
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="map"
                placeholder="Complemento"
                textContentType="newPassword"
                returnKeyType="next"
                containerStyle={[styles.inputBackground, styles.leftInputs]}
                onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
              />
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="map"
                placeholder="Número"
                textContentType="newPassword"
                returnKeyType="next"
                containerStyle={[styles.inputBackground, styles.rightInputs]}
                onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
              />
            </View>
            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              icon="map"
              placeholder="CEP"
              textContentType="newPassword"
              returnKeyType="next"
              containerStyle={styles.inputBackground}
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            />
            <View style={styles.sideBySideInputsContainer}>
              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="map"
                placeholder="País"
                textContentType="newPassword"
                returnKeyType="next"
                containerStyle={[styles.inputBackground, styles.leftInputs]}
                onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
              />

              <Input
                ref={passwordInputRef}
                secureTextEntry
                name="password"
                icon="map"
                placeholder="Estado"
                textContentType="newPassword"
                returnKeyType="next"
                containerStyle={[styles.inputBackground, styles.rightInputs]}
                onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
              />
            </View>

            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              icon="map"
              placeholder="Cidade"
              textContentType="newPassword"
              returnKeyType="next"
              containerStyle={styles.inputBackground}
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            />
            <View>
              <Title>Alterar senha</Title>
            </View>

            <Input
              ref={oldPasswordInputRef}
              secureTextEntry
              name="old_password"
              icon="lock"
              placeholder="Senha Atual"
              textContentType="newPassword"
              returnKeyType="next"
              containerStyle={[{ marginTop: 16 }, styles.inputBackground]}
              onSubmitEditing={() => passwordInputRef.current?.focus()}
            />

            <Input
              ref={passwordInputRef}
              secureTextEntry
              name="password"
              icon="lock"
              placeholder="Nova Senha"
              textContentType="newPassword"
              returnKeyType="next"
              containerStyle={styles.inputBackground}
              onSubmitEditing={() => confirmPasswordInputRef.current?.focus()}
            />

            <Input
              ref={confirmPasswordInputRef}
              secureTextEntry
              name="password_confirmation"
              icon="lock"
              placeholder="Confirmar Senha"
              textContentType="newPassword"
              returnKeyType="send"
              containerStyle={styles.inputBackground}
              onSubmitEditing={() => formRef.current?.submitForm()}
            />

            <Button onPress={() => formRef.current?.submitForm()}>
              Confirmar mudanças
            </Button>
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Profile;
