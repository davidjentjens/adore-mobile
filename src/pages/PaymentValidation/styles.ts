import styled, { css } from 'styled-components/native';
import { FlatList, ImageBackground, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import { Category, Business } from './index';

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

export const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderColor: 'transparent',
    padding: 0,
    marginLeft: 20,
    marginRight: 20,
  },
  carouselContainer: {},
  headerIcon: {
    color: '#a58238',
    marginRight: 0,
  },
});

// #region Header

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

// #endregion

export const AllDetailsContainer = styled.View`
  margin: 20px;
  padding-top: 10px;
  padding-bottom: 30px;
  flex-direction: column;
`;

export const MemberContainer = styled.View`
  padding-top: 10px;
  padding-bottom: 30px;
  flex-direction: row;
`;

export const MemberInfoView = styled.View`
  background-color: #2f2f2f;
  width: 70%;
  height: 90px;
  border-radius: 9px;
`;

export const MemberStatusView = styled.View`
  background-color: #a58238;
  width: 30%;
  height: 90px;
  border-radius: 9px;
  flex: 1;
  margin-left: 10px;
  flex-direction: column;
  align-items: center;
`;

export const MemberInfoText = styled.Text`
  margin-left: 20px;
  margin-top: 17px;
  margin-right: 10px;
  font-family: Roboto-Bold;
  font-size: 22px;
  color: white;
`;

export const MemberInfoSubtitleText = styled.Text`
  margin-left: 20px;
  margin-top: 5px;
  margin-right: 10px;
  font-family: Roboto-Regular;
  font-size: 20px;
  color: #a58238;
`;

export const MemberText = styled.Text`
  padding-top: 17px;
  font-family: Roboto-Regular;
  font-size: 20px;
  color: white;
`;

export const MemberStatusText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 30px;
  color: white;
`;


export const DescriptionInfoView = styled.View`
  background-color: #2f2f2f;
  width: 100%;
  border-radius: 12px;
`;

export const DescriptionText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  margin: 15px 20px 30px 20px;
  color: white;
`;

// #region TopCards

// #endregion
