import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';

import theme from '../../config/theme';

export const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 70,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  headerText: {
    color: theme.goldColor,
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
  },
  inputBackground: {
    backgroundColor: theme.grayColor,
  },
  sideBySideInputsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftInputs: {
    flex: 1,
    marginRight: 4,
  },
  rightInputs: {
    flex: 1,
    marginLeft: 4,
  },
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px 20px ${Platform.OS === 'android' ? 60 : 40}px;
  margin: 0;
  background: ${theme.darkGrayColor};
`;

export const Title = styled.Text`
  font-size: 20px;
  color: ${theme.whiteColor};
  font-family: 'Roboto-Medium';
  margin: 24px 0 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
  background-color: ${theme.grayColor};
`;
