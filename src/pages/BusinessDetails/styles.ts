import styled from 'styled-components/native';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';

import theme from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.darkGrayColor};
`;

// #region Header

export const Header = styled(ImageBackground)`
  padding: 0;
  height: 250px;
`;

export const HeaderGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const HeaderSafeArea = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
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

// #endregion

export const styles = StyleSheet.create({
  headerTitle: {
    color: theme.goldColor,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    marginLeft: 20,
  },
  headerSubTitle: {
    color: theme.whiteColor,
    fontSize: 25,
    fontFamily: 'Roboto-Regular',
    margin: 0,
    marginLeft: 20,
  },
  headerInfoView: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    margin: 0,
    padding: 0,
    justifyContent: 'space-between',
  },
  headerSubCount: {
    margin: 0,
    marginRight: 10,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: theme.goldColor,
  },
  headerSpecialty: {
    margin: 0,
    marginRight: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: theme.grayColor,
  },
  headerInfoText: {
    color: theme.whiteColor,
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  headerOptionsView: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'row',
    width: '100%',
    margin: 0,
    padding: 0,
  },
  headerCancel: {
    margin: 0,
    marginRight: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: theme.grayColor,
  },
  contentSafeArea: {
    flex: 1,
  },
});

export const SectionContainer = styled.View`
  padding: 0;
  margin: 0;
`;

export const SectionTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 25px;
  color: white;
  margin-left: 20px;
`;

export const TierContainer = styled.View`
  margin: 0;
  padding: 0;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
`;

export const TierList = styled.View`
  padding: 15px 0px 30px 0px;
  flex-direction: row;
`;

export const TierCard = styled.TouchableOpacity`
  width: 120px;
  height: 110px;
  margin: 10px 0px 0px 20px;
  background: ${theme.grayColor};
  border-radius: 10px;
  padding: 0px;
  align-items: center;
`;

export const TierText = styled.Text`
  color: ${theme.whiteColor};
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
  color: ${theme.whiteColor};
  font-size: 25px;
  margin-top: 20px;
  font-family: Roboto-Bold;
`;

export const TierSubscribedContainer = styled.View`
  margin: 20px;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${theme.grayColor};
  border-radius: 10px;
  align-items: flex-start;
`;

export const TierSubscribedText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 25px;
  width: 80%;
  margin: 20px 20px 0px 20px;
  color: #fff;
`;

export const TierStatusText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 30px;
  width: 80%;
  margin: 10px 20px 0px 20px;
  color: ${theme.goldColor};
`;

export const PostListContainer = styled.View`
  padding: 0;
  margin: 20px 40px 20px 20px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
`;

export const ImagePost = styled(ImageBackground)`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${theme.darkGrayColor};
`;

export const TextPostContainer = styled.View`
  margin: 0px 0px 0px 0px;
  padding 0;
  align-items: flex-start;
  flex-direction: column;
  width: 70%;
`;

export const TitlePost = styled.Text`
  font-family: Roboto-Medium;
  font-size: 20px;
  color: ${theme.goldColor};
  margin: 0px 30px 0px 15px;
`;

export const DescPost = styled.Text`
  font-family: Roboto-Regular;
  font-size: 14px;
  color: ${theme.whiteColor};
  margin: 5px 50px 0px 15px;
`;

export const ButtonPost = styled(TouchableOpacity)`
  background-color: ${theme.goldColor};
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  margin: 12px 20px 0px 15px;
`;
