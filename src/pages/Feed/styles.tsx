import styled from 'styled-components/native';
import { ImageBackground, Dimensions, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import theme from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.darkGrayColor};
`;

// #region Header

export const Header = styled.View`
  padding: 70px 20px 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileIcon = styled(Icon)`
  background-color: ${theme.grayColor};
  opacity: 0.8;
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
`;

export const HeaderLogo = styled.Image`
  width: 35%;
  height: 100%;
  resize-mode: contain;
  padding: 0;
  margin-bottom: 0;
`;

// #endregion

// #region Feed

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

  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PostCard = styled.TouchableOpacity`
  margin: 0px 20px 20px 20px;
  height: ${Math.round(Dimensions.get('window').width * 0.75)}px;
  color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const PostDataContainer = styled.TouchableOpacity`
  width: 100%;
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LikedIcon = styled(MaterialIcon)`
  color: ${theme.whiteColor};
  margin: 0;
  padding: 0;
  width: 35px;
  height: 35px;
`;

export const LikeIcon = styled(Icon)`
  color: ${theme.whiteColor};
  margin: 0;
  padding: 0;
  width: 35px;
  height: 35px;
`;

export const PostTextContainer = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 5px;
  width: 100%;
`;

export const PostTitle = styled.Text`
  font-family: Roboto-Bold;
  font-size: 25px;
  color: ${theme.whiteColor};
  padding-bottom: 5px;
`;

export const PostDescription = styled.Text`
  font-family: Roboto-Medium;
  font-size: 15px;
  width: 80%;
  color: ${theme.whiteColor};
`;

export const PostAuthor = styled(LinearGradient)`
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 0 10px;
`;

export const AuthorInfo = styled.TouchableOpacity`
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AuthorAvatar = styled(Image)`
  border-radius: 18px;
  height: 35px;
  width: 35px;
`;

export const AuthorName = styled.Text`
  color: ${theme.whiteColor};
  font-family: Roboto-Regular;
  font-size: 16px;
  margin-left: 10px;
`;

// #endregion
