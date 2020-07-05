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
    backgroundColor: '#a58328',
  },
  headerSpecialty: {
    margin: 0,
    marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#2f2f2f',
  },
  headerInfoText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  opacityView: {
    backgroundColor: '#000',
    opacity: 0.8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
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
  height: 210px;
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
  font-size: 28px;
  line-height: 30px;
  color: #a58238;
`;
export const BusinessDescription = styled.Text`
  font-family: 'Roboto-Medium';
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  padding: 0px 20px 0px 20px;

  color: #fff;
`;

export const BusinessPriceContainer = styled.View`
  margin: 20px;
`;

export const BusinessPriceView = styled.View`
  background-color: #a58328;
  width: 100%;
  border-radius: 8px;
`;

export const BusinessPricing = styled.Text`
  font-family: 'Roboto-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  margin-top: 8px;

  font-weight: 600;

  color: #39b100;
`;
