import 'react-native-gesture-handler';
import React from 'react';
import { View, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import AppProvider from './hooks/index';
import Routes from './routes';

const App: React.FC = () => (
  <View style={{ flex: 1 }}>
    <StatusBar
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
    />
    <AppProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AppProvider>
  </View>
);

export default App;
