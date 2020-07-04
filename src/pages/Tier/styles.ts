import styled from 'styled-components/native';
import { View } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

export const Header = styled.View`
  padding: 70px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: #a58328;
  font-size: 32px;
  font-family: Roboto-Bold;
`;

export const SectionText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: Roboto-Bold;
  margin-top: 20px;
`;

export const TierCard = styled(View)`
  margin-top: 15px;
  min-height: 180px;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  background: #2f2f2f;
`;
