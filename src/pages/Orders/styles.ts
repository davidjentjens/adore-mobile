import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  formattedValue: number;
  thumbnail_url: string;
}

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

export const Header = styled.View`
  padding: 70px 20px 24px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderTitle = styled.Text`
  color: #a58328;
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-size: 32px;
`;

export const SubscriptionDataContainer = styled.View`
  background: #a58238;

  margin: 10px 20px 0px 20px;
  padding-bottom: 20px;
  border-radius: 10px;
`;

export const SubscriptionText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 28px;
  color: #fff;
  margin: 20px 40px 0px 20px;
`;

export const SubscriptionSubtitleText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 19px;
  color: #fff;
  margin: 10px 0px 0px 20px;
`;

export const SectionText = styled.Text`
  color: #fff;
  font-size: 25px;
  font-family: Roboto-Bold;
  margin-left: 20px;
  margin-top: 40px;
`;

export const SectionSubtitleText = styled.Text`
  color: #fff;
  font-size: 17px;
  font-family: Roboto-Regular;
  margin-left: 20px;
  margin-top: 5px;
`;

export const AllDetailsContainer = styled.View`
  margin: 20px;
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


export const FoodsContainer = styled.View`
  flex: 1;
  margin-top: -60px;
`;

export const FoodList = styled(FlatList as new () => FlatList<Product>)`
  flex: 1;
  padding: 0 20px;

  margin-top: 16px;
`;

export const Food = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;

  background: #f0f0f5;
  border-radius: 8px;

  margin-bottom: 16px;
`;

export const FoodImageContainer = styled.View`
  background: #ffb84d;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;

  height: 100%;
`;

export const FoodContent = styled.View`
  flex: 1;

  padding: 16px;
`;
export const FoodTitle = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;

  color: #3d3d4d;
`;
export const FoodDescription = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 16px;

  margin-top: 6px;

  color: #3d3d4d;
`;

export const FoodPricing = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  margin-top: 8px;

  font-weight: 600;

  color: #39b100;
`;
