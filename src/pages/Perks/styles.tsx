import styled from 'styled-components/native';
import { SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

import theme from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.darkGrayColor};
`;

// #region Header

export const Header = styled.View`
  padding: 0;
  margin: 0;
`;

export const HeaderGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const HeaderSafeArea = styled(SafeAreaView)`
  width: 100%;
  align-items: flex-start;
`;

export const HeaderBackButton = styled(Button)`
  background: transparent;
  padding: 0;
  margin: 20px 0 0 15px;
`;

export const HeaderBackButtonIcon = styled(Icon)`
  color: ${theme.whiteColor};
`;

export const styles = StyleSheet.create({
  headerTitle: {
    color: theme.goldColor,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    marginLeft: 20,
    marginRight: 40,
  },
  headerSubTitle: {
    color: theme.whiteColor,
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    margin: 0,
    marginLeft: 20,
    marginRight: 40,
  },
  headerInfoView: {
    marginTop: 5,
    flexDirection: 'column',
    width: '100%',
    margin: 0,
    paddingBottom: 0,
  },
});

// #endregion

export const TierCard = styled.View`
  margin-top: 15px;
  min-height: 180px;
  margin: 20px;
  color: ${theme.whiteColor};
  border-radius: 10px;
  overflow: hidden;
  background: ${theme.grayColor};
`;

export const PerksContainer = styled.View`
  margin: 20px;
  margin-top: 0px;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${theme.grayColor};
  border-radius: 10px;
`;

export const PerkTitleText = styled.Text`
  font-family: Roboto-Bold;
  padding: 20px 20px 0px 20px;
  font-size: 20px;
  color: ${theme.whiteColor};
`;

export const PerkDescText = styled.Text`
  font-family: Roboto-Regular;
  padding: 20px 20px 0px 20px;
  font-size: 15px;
  width: 100%;
  color: ${theme.whiteColor};
`;

export const PerkDateText = styled.Text`
  font-family: Roboto-Bold;
  padding: 20px 0px 0px 20px;
  font-size: 20px;
  color: ${theme.whiteColor};
`;

export const PerkDateNumberText = styled.Text`
  font-family: Roboto-Medium;
  padding: 10px 0px 20px 20px;
  font-size: 24px;
  color: ${theme.goldColor};
`;
