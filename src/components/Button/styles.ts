import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 47px;
  background: #ff9000;
  border-radius: 12px;
  margin-left: 30px;
  margin-right: 30px;

  justify-content: center;
  align-items: center;

  color: #a58328;
`;

export const ButtonText = styled.Text`
  font-family: 'RobotoSlab-Bold';
  color: #ffffff;
  font-size: 18px;
`;

export const IconContainer = styled.View`
  background-color: #ffc46b;
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
