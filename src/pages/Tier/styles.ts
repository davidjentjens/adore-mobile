import styled from 'styled-components/native';
import { View } from 'react-native';
import theme from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.darkGrayColor};
`;

export const Header = styled.View`
  padding: 70px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: ${theme.goldColor};
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
  background: ${theme.grayColor};
`;

export const TierList = styled.View`
  padding: 15px 0px 30px 0px;
  flex-direction: row;
`;

export const OtherTiersCard = styled.TouchableOpacity`
  width: 120px;
  height: 110px;
  margin: 10px 0px 0px 20px;
  background: ${theme.grayColor};
  border-radius: 10px;
  padding: 0px;
  align-items: center;
`;

export const TierText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 7px;
  font-family: Roboto-Medium;
`;

export const TierTextBackground = styled.View`
  background: ${theme.goldColor};
  width: 100%;
  height: 40px;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const PriceText = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-top: 20px;
  font-family: Roboto-Bold;
`;
