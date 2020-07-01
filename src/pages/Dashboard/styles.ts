import styled, { css } from 'styled-components/native';
import { FlatList } from 'react-native';

import { Business } from './index';

export const Container = styled.View`
  flex: 1;
  background: #1c1c1c;
`;

// #region Header

export const Header = styled.View`
  padding: 40px 24px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled.Text`
  color: white;
  font-size: 32px;
  font-family: Roboto-Bold;
`;

// #endregion

// #region TopCards

export const TopCardContainer = styled.View`
  margin: 0;
  padding: 0px;
  flex-direction: row;
  align-items: center;
`;

export const TopCardList = styled(FlatList as new () => FlatList<Business>)`
  padding: 0px 0px 0px 10px;
`;

export const TopCardText = styled.Text`
  color: #fff;
`;

export const TopCard = styled.View`
  width: 68px;
  height: 68px;
  margin: 10px 15px 10px 0px;
  background: #2f2f2f;
  border-radius: 13px;
  padding: 10px;
`;

// #endregion

// #region Business Feed

export const FeedContainer = styled.View`
  margin: 0;
  padding: 0;
  flex-direction: column;
`;

export const BusinessList = styled(FlatList as new () => FlatList<Business>)`
  padding: 10px 0px 0px 10px;
`;

export const BusinessCard = styled.View`
  margin: 0px 10px 10px 0px;
  height: 200px;
  color: #fff;
  background: #2f2f2f;
  border-radius: 13px;
`;

// #endregion
