import styled from 'styled-components/native';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Button from '../../components/Button';

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

// #region Header

export const Header = styled(ImageBackground)`
  padding: 0;
  margin: 0;
  flex: 1;
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
  color: #fff;
`;

export const styles = StyleSheet.create({
  headerTitle: {
    color: '#a58328',
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    marginLeft: 20,
    marginRight: 40,
  },
  headerSubTitle: {
    color: '#fff',
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
  headerSubCount: {
    margin: 0,
    marginRight: 10,
    marginLeft: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#a58328',
  },
  headerSpecialty: {
    margin: 0,
    marginRight: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#2f2f2f',
  },
  headerInfoText: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
  longDescTextContainer: {
    margin: 20,
    paddingTop: 10,
  },
  longDescText: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    lineHeight: 20,
    fontSize: 14,
  },
  contentSafeArea: {
    flex: 1,
  },
  sectionTitle: {
    fontFamily: 'Roboto-Bold',
    fontSize: 25,
    color: '#fff',
    marginLeft: 20,
  },

  perksContainer: {
    backgroundColor: '#2f2f2f',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    height: 55,
    borderRadius: 12,
  },
  perkText: {
    marginTop: 17,
    marginLeft: 20,
    color: '#fff',
    alignContent: 'center',
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },

  buttonSub: {
    color: '#a58328',
    marginLeft: 20,
    marginRight: 20,
    height: 56,
    borderRadius: 12,
  },
});

// #endregion

export const NavigationButton = styled.TouchableOpacity`
  background: #a58328;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 18px;
  padding: 7px 7px 7px;
  line-height: 22px;
  color: #fff;
  flex: 1;
  text-align: center;
  font-family: Roboto-Regular;
`;

export const ButtonPrice = styled.Text`
  background-color: #947523;
  font-family: Roboto-Bold;
  font-size: 18px;
  color: #fff;
  padding: 16px 30px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const SectionContainer = styled.View`
  padding: 0;
  margin: 0;
`;

export const SectionTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 25px;
  color: white;
  margin-left: 20px;
  margin-bottom: 10px;
  margin-top: 10px;
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
  margin-top: 15px;
  min-height: 180px;
  margin: 20px;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
  background: #2f2f2f;
`;

export const TierText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-top: 7px;
  font-family: Roboto-Medium;
`;

export const TierTextBackground = styled.View`
  background: #a58238;
  width: 100%;
  height: 40px;
  align-items: center;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;

export const PerksContainer = styled.View`
  margin: 20px;
  margin-top: 10px;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  background-color: #2f2f2f;
  border-radius: 10px;
`;

export const PerkTitleText = styled.Text`
  font-family: Roboto-Bold;
  padding: 20px 20px 0px 20px;
  font-size: 20px;
  color: #fff;
`;

export const PerkDescText = styled.Text`
  font-family: Roboto-Regular;
  padding: 5px 20px 20px 20px;
  font-size: 15px;
  width: 80%;
  color: #fff;
`;

export const TierStatusText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 30px;
  width: 80%;
  margin: 10px 20px 0px 20px;
  color: #a58238;
`;
