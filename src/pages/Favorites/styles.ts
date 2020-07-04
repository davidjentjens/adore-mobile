import styled from 'styled-components/native';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

interface Business {
  id: number;
  name: string;
  description: string;
  price: number;
  thumbnail_url: string;
  formattedPrice: string;
}

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

export const Header = styled.View`
  padding: 60px 24px 24px 24px;
  display: flex;
  align-items: flex-start;
`;

export const HeaderTitle = styled.Text`
  color: #a58328;
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 32px;
`;

export const HeaderSafeArea = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

export const HeaderBackButton = styled(Button)`
  background: transparent;
  padding: 0;
  margin: 0 0 0 0px;
`;

export const HeaderBackButtonIcon = styled(Icon)`
  color: #fff;
`;

export const styles = StyleSheet.create({
  opacityView: {
    backgroundColor: '#000',
    opacity: 0.8,
    flex: 1,
  },
});

export const BusinessContainer = styled.View`
  flex: 1;
`;

export const BusinessList = styled(FlatList as new () => FlatList<Business>)`
  flex: 1;
  padding: 20px 20px 0px 20px;
`;

export const Business = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #000;
  border-radius: 8px;
  height: 90px;
  overflow: hidden;
  margin-bottom: 25px;
`;

export const BusinessCardBackgroundImage = styled(ImageBackground)`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const BusinessImageContainer = styled.View`
  background: #2f2f2f;
  padding: 16px;

  height: 100%;
`;

export const BusinessContent = styled.View`
  flex: 1;
`;
export const BusinessTitle = styled.Text`
  font-family: 'Roboto-Bold';
  font-size: 25px;
  line-height: 30px;
  padding: 10px 0px 5px 20px;

  color: #fff;
`;
export const BusinessDescription = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  padding: 0px 20px 0px 20px;

  color: #fff;
`;

export const BusinessPricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  margin-top: 8px;

  font-weight: 600;

  color: #39b100;
`;
