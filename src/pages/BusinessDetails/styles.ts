import styled from 'styled-components/native';
import { ImageBackground, SafeAreaView } from 'react-native';
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
  height: 200px;
`;

export const HeaderGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
`;

export const HeaderSafeArea = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  align-items: flex-start;
`;

export const HeaderBackButton = styled(Button)`
  background: transparent;
  padding: 0;
  margin: 0 0 0 15px;
`;

export const HeaderBackButtonIcon = styled(Icon)`
  color: #fff;
`;

// #endregion

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 40,
  },
})`
  margin-top: -40px;
`;

export const FoodsContainer = styled.View`
  padding: 0 24px;
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
  font-family: 'Poppins';
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

export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: #fff;
  flex: 1;
  text-align: center;
`;

export const IconContainer = styled.View`
  background-color: #41c900;
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
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
