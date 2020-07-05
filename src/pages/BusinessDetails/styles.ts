import styled from 'styled-components/native';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Icon from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';

import { Category, Business } from './index';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

// #region Header

export const Header = styled(ImageBackground)`
  padding: 0;
  height: 230px;
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
  color: #fff;
`;

export const styles = StyleSheet.create({
  headerTitle: {
    color: '#a58328',
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
    marginLeft: 20,
  },
  headerSubTitle: {
    color: '#fff',
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
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
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
  background: #2f2f2f;
  border-radius: 10px;
  padding: 0px;
  align-items: center;
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

export const PriceText = styled.Text`
  color: #fff;
  font-size: 25px;
  margin-top: 20px;
  font-family: Roboto-Bold;
`;

export const PostListContainer = styled.View`
  padding: 0;
  margin: 20px 40px 20px 20px;
  width: 100%;
  flex-direction: row;
  align-items: flex-start;
  border-radius: 5px;
`;

export const ImagePost = styled(ImageBackground)`
  width: 120px;
  height: 120px;
  border-radius: 5px;
  overflow: hidden;
  background-color: red;
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
  font-size: 22px;
  color: #a58238;
  margin: 0px 15px 0px 15px;
`;

export const DescPost = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #fff;
  margin: 5px 50px 0px 15px;
`;

export const ButtonPost = styled(TouchableOpacity)`
  background-color: #a58238;
  padding: 8px;
  width: 100%;
  border-radius: 5px;
  margin: 12px 20px 0px 15px;
`;

export const Food = styled.View`
  display: flex;
  flex-direction: column;
  background: #f0f0f5;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const FoodImageContainer = styled.View`
  background: #ffb84d;
  overflow: hidden;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`;

export const FoodContent = styled.View`
  padding: 24px;
`;

export const FoodTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  color: #3d3d4d;
`;

export const FoodDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 25px;
  margin-top: 8px;
  color: #3d3d4d;
`;

export const FoodPricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #6c6c80;
  margin-top: 8px;
  font-weight: 600;
`;

export const Title = styled.Text`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #3d3d4d;
`;

export const AdditionalsContainer = styled.View`
  padding: 0 24px;
  margin-top: 16px;
`;

export const AdittionalItem = styled.View`
  background: #f0f0f5;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
  margin-top: 8px;
`;

export const AdittionalItemText = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: #6c6c80;
`;

export const AdittionalQuantity = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 105px;
`;

export const TotalContainer = styled.View`
  padding: 0 24px;
  margin-top: 20px;
`;

export const PriceButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled.Text`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #39b100;
  margin-top: 16px;
`;

export const QuantityContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 105px;
  background: #f0f0f5;
  border-radius: 8px;
  padding: 10px 15px;
  margin-top: 25px;
`;

export const FinishOrderButton = styled.TouchableOpacity`
  background: #39b100;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 26px;
`;

export const subscribersButton = styled.View`
  width: 100px;
  height: 30px;
`;

export const subscribersText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
  flex: 1;
  text-align: center;
`;
