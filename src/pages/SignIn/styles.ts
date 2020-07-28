import styled from 'styled-components/native';
import { Platform } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import theme from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${theme.darkGrayColor};
  justify-content: center;
  padding: 0px 30px ${Platform.OS === 'android' ? 100 : 40}px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${theme.whiteColor};
  font-family: 'Roboto-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: ${theme.whiteColor};
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${theme.grayColor};
  border-top-width: 1px;
  border-color: ${theme.darkGrayColor};
  padding: 16px 0 ${16 + getBottomSpace()}px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: ${theme.goldColor};
  font-size: 18px;
  font-family: 'Roboto-Regular';
  margin-left: 16px;
`;
