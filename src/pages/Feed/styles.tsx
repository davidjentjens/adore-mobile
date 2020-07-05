import styled from 'styled-components/native';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

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
    overflow: "hidden",
  },
});

// #region Header

export const Header = styled.View`
  padding: 20px 20px 0px 20px;
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
  padding: 0px 0px 0px 20px;
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
  padding: 100px 0px 50px 0px;
  margin-top: 15px;
`;

export const PostContainer = styled.View`
  padding: 10px 0px 0px 0px;
`;

export const PostCardBackgroundImage = styled(ImageBackground)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const PostCardGradient = styled(LinearGradient)`
  width: 100%;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PostCard = styled(RectButton)`
  margin: 0px 20px 20px 20px;
  height: ${Math.round(Dimensions.get('window').width * 0.75)}px;
  color: #fff;
  border-radius: 10px;
`;

export const PostDataContainer = styled.View`
  width: 100%;
  margin: 0;
  padding: 0px 20px 20px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LikeIcon = styled(Icon)`
  color: #fff;
  margin: 0;
  padding: 0;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostTextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
`;


export const PostTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 25px;
  color: #fff;
  padding-bottom: 5px;
`;

export const PostDescription = styled.Text`
  font-family: Roboto-Medium;
  font-size: 15px;
  width: 60%;
  color: white;
`;

export const PostAuthor = styled(LinearGradient)`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0 0 10px;
`;

export const AuthorAvatar = styled(Image)`
  border-radius: 18px;
  height: 35px;
  width: 35px;
`;

export const AuthorName = styled.Text`
  color: #fff;
  font-family: Roboto-Regular;
  font-size: 16px;
  margin-left: 10px;
`;

export const BusinessSubtitleText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  color: #a58328;
  margin: 0px 10px 20px 20px;
`;

// #endregion
