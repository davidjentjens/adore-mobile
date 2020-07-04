import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 47px;
  background: #a58328;
  border-radius: 12px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Bold';
  color: #ffffff;
  font-size: 18px;
`;

export const IconContainer = styled.View`
  background-color: #ffc46b;
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
