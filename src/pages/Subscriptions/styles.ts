import styled from 'styled-components/native';
import { FlatList, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

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

// #region Header

export const Header = styled.View`
  padding: 70px 20px 10px 20px;
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

export const ProfileIcon = styled(Icon)`
  background-color: #2f2f2f;
  opacity: 0.8;
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;
`;

// #endregion

export const styles = StyleSheet.create({
  headerSubCount: {
    margin: 0,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    backgroundColor: '#a58328',
  },
  headerInfoText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
  },
  headerOptionsView: {
    marginTop: 20,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    margin: 0,
    padding: 0,
  },
});

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

export const AllDetailsContainer = styled.View`
  margin: 20px;
  padding-bottom: 30px;
  flex-direction: column;
`;

export const MemberContainer = styled.TouchableOpacity`
  padding-top: 5px;
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
  flex-direction: row;
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
  padding-top: 0px;
  margin-left: 13px;
  font-family: Roboto-Regular;
  font-size: 20px;
  color: white;
`;

export const TierSubscribedContainer = styled.View`
  margin: 20px;
  width: 90%;
  flex-direction: column;
  align-items: center;
  background-color: #2f2f2f;
  border-radius: 10px;
`;

export const TierSubscribedText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 25px;
  text-align: center;
  margin-top: 20px
  width: 80%;
  color: #fff;
`;
