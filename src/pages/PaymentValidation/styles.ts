import styled from 'styled-components/native';

import theme from '../../config/theme';

export const Container = styled.View`
  flex: 1;
  background: ${theme.darkGrayColor};
`;

// #region Header

export const Header = styled.View`
  padding: 70px 20px 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: ${theme.goldColor};
  font-size: 32px;
  font-family: Roboto-Bold;
  width: 100%;
`;

export const HeaderSubText = styled.Text`
  color: ${theme.goldColor};
  font-size: 25px;
  font-family: Roboto-Regular;
  width: 100%;
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
  padding-bottom: 20px;
  flex-direction: row;
`;

export const MemberInfoView = styled.View`
  background-color: ${theme.grayColor};
  width: 70%;
  height: 90px;
  border-radius: 9px;
`;

export const MemberStatusView = styled.View`
  background-color: ${theme.goldColor};
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
  color: ${theme.whiteColor};
`;

export const MemberInfoSubtitleText = styled.Text`
  margin-left: 20px;
  margin-top: 5px;
  margin-right: 10px;
  font-family: Roboto-Regular;
  font-size: 20px;
  color: ${theme.goldColor};
`;

export const MemberText = styled.Text`
  padding-top: 17px;
  font-family: Roboto-Regular;
  font-size: 20px;
  color: ${theme.whiteColor};
`;

export const MemberStatusText = styled.Text`
  font-family: Roboto-Bold;
  font-size: 20px;
  color: ${theme.whiteColor};
  width: 100%;
  text-align: center;
`;

export const DescriptionInfoView = styled.View`
  background-color: ${theme.grayColor};
  width: 100%;
  border-radius: 12px;
`;

export const DescriptionText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 18px;
  margin: 20px 20px 20px 20px;
  color: ${theme.whiteColor};
`;
