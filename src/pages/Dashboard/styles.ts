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
  opacityView: {
    backgroundColor: '#2f2f2f',
    opacity: 0.8,
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden',
  },
});


// #region Header

export const Header = styled.View`
  padding: 70px 20px 0px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: #a58328;
  font-size: 32px;
  font-family: Roboto-Bold;
`;

// #endregion

// #region TopCards

export const TopCardContainer = styled(LinearGradient)`
  margin: 0;
  padding: 10px 0px 0px 20px;
  flex-direction: row;
  align-items: center;
`;

export const TopCardList = styled(FlatList as new () => FlatList<Category>)`
  padding: 0px 0px 0px 10px;
`;

export const TopCardText = styled.Text`
  color: #fff;
`;

export const TopCard = styled.View`
  width: 68px;
  height: 68px;
  margin: 10px 15px 20px 0px;
  background: #2f2f2f;
  border-radius: 13px;
  padding: 10px;
`;

// #endregion

export const FeatureCard = styled(RectButton)`
  height: 100%;
  color: #fff;
  border-radius: 10px;
  margin: 0px 8px;
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
  color: white;
  margin: 10px 0px 0px 20px;
`;

// #region Business Feed

export const SectionText = styled.Text`
  color: #a58328;
  font-size: 25px;
  font-family: Roboto-Bold;
  margin-left: 20px;
  margin-top: 20px;
`;

export const SectionSubtitleText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-family: Roboto-Regular;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const BusinessList = styled(FlatList as new () => FlatList<Business>)`
  padding: 10px 0px 50px 0px;
  margin-top: 15px;
`;

export const BusinessContainer = styled.View`
  padding: 10px 0px 0px 0px;
`;

export const BusinessCardBackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100px;
`;

export const BusinessCard = styled(RectButton)`
  margin: 0px 20px 20px 20px;
  height: 80px;
  color: #fff;
  border-radius: 10px;
`;

export const BusinessDataContainer = styled.View`
  margin: 0;
  padding: 0;
`;

export const BusinessText = styled.Text`
  font-family: Roboto-Medium;
  font-size: 29px;
  color: white;
  margin: 10px 10px 20px 20px;
`;

export const BusinessSubtitleText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  color: #a58328;
  margin: 0px 10px 20px 20px;
`;

export const BusinessCardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: flex-end;
`;

// #endregion
