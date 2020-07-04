import styled from 'styled-components/native';
import { Platform, StyleSheet } from 'react-native';

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
    color: '#a58328',
    fontSize: 32,
    fontFamily: 'Roboto-Bold',
  },
  inputBackground: {
    backgroundColor: '#2f2f2f',
  },
  sideBySideInputs: {
    flexDirection: 'row',
  },
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding: 20px 20px ${Platform.OS === 'android' ? 60 : 40}px;
  margin: 0;
  background: #1c1c1c;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #f4ede8;
  font-family: 'Roboto-Medium';
  margin: 24px 0 24px;
`;

export const UserAvatarButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
  align-self: center;
  background-color: #2f2f2f;
`;
