import styled from 'styled-components/native';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather';
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
    marginTop: 20,
  },
  headerSubTitle: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Roboto-Regular',
    margin: 0,
    marginLeft: 20,
    marginRight: 40,
    marginBottom: 30,
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
});

// #endregion

export const ButtonLikePost = styled.TouchableOpacity`
  background-color: #a58238;
  margin: 20px;
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  align-items: center;
`;
