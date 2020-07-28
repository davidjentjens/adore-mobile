import styled from 'styled-components/native';
import { ImageBackground, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import theme from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.darkGrayColor};
`;

export const styles = StyleSheet.create({
  headerInfoView: {
    marginTop: 10,
    flexDirection: 'row',
    width: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'space-between',
  },
  headerSubCount: {
    margin: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: theme.goldColor,
  },
  headerInfoText: {
    color: theme.whiteColor,
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
});

// #region Header

export const Header = styled.View`
  padding: 70px 20px 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: ${theme.goldColor};
  font-size: 32px;
  font-family: Roboto-Bold;
`;

export const ProfileIcon = styled(Icon)`
  background-color: ${theme.grayColor};
  opacity: 0.8;
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
`;

// #endregion

// #region Feature
export const FeatureCard = styled(TouchableOpacity)`
  height: 100%;
  color: #fff;
  border-radius: 10px;
  margin: 0px 8px;
  overflow: hidden;
`;

export const FeatureCardBackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 200px;
`;

export const FeatureDataContainer = styled.View`
  margin: 0;
  padding: 0;
`;

export const FeatureText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 29px;
  color: ${theme.whiteColor};
  margin: 10px 0px 0px 20px;
`;

// #endregion

// #region Business Feed

export const SectionText = styled.Text`
  color: ${theme.goldColor};
  font-size: 25px;
  font-family: Roboto-Bold;
  margin-left: 20px;
  margin-top: 20px;
`;

export const SectionSubtitleText = styled.Text`
  color: ${theme.whiteColor};
  font-size: 17px;
  font-family: Roboto-Regular;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const BusinessContainer = styled.View`
  padding: 10px 0px 0px 0px;
`;

export const BusinessCardBackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100px;
`;

export const BusinessCard = styled(TouchableOpacity)`
  margin: 0px 20px 20px 20px;
  height: 80px;
  color: ${theme.whiteColor};
  border-radius: 10px;
  overflow: hidden;
`;

export const BusinessDataContainer = styled.View`
  margin: 0;
  padding: 0;
`;

export const BusinessText = styled.Text`
  font-family: Roboto-Medium;
  font-size: 29px;
  color: ${theme.whiteColor};
  margin: 10px 10px 20px 20px;
`;

export const BusinessCardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

// #endregion
