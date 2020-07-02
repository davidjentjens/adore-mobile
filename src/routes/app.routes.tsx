import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';
import TabRoutes from './tab.routes';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import BusinessDetails from '../pages/BusinessDetails';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator initialRouteName="MainBottom">
    {/* <App.Screen
      options={{
        cardStyle: { backgroundColor: '#C72828' },
        headerShown: false,
      }}
      name="Home"
      component={Home}
    /> */}
    <App.Screen
      name="MainBottom"
      component={TabRoutes}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <App.Screen
      name="BusinessDetails"
      component={BusinessDetails}
      options={({ navigation }) => ({
        headerLeft: () => (
          <Icon
            name="arrow-left"
            size={24}
            color="#FFB84D"
            onPress={() => navigation.goBack()}
          />
        ),
        headerShown: false,
        headerLeftContainerStyle: {
          marginLeft: 24,
        },
        // headerRight: () => <Icon name="heart" size={24} color="#FFB84D" />,
        // headerRightContainerStyle: {
        //   marginRight: 24,
        // },
        headerTitle: '',
        // headerTitleStyle: {
        //   color: '#fff',
        //   fontFamily: 'Poppins-Regular',
        //   fontSize: 16,
        // },
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderWidth: 0,
          shadowColor: 'transparent',
        },
      })}
    />
  </App.Navigator>
);

export default AppRoutes;
