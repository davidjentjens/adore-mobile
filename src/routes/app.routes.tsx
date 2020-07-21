import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';
import TabRoutes from './tab.routes';

import BusinessDetails from '../pages/BusinessDetails';
import Category from '../pages/Category';
import Profile from '../pages/Profile';
import Tier from '../pages/Tier';
import PaymentValidation from '../pages/PaymentValidation';
import Post from '../pages/Post';
import Perks from '../pages/Perks';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator initialRouteName="MainBottom">
    <App.Screen
      name="MainBottom"
      component={TabRoutes}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <App.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
        gestureEnabled: false,
      }}
    />
    <App.Screen
      name="Tier"
      component={Tier}
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
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderWidth: 0,
          shadowColor: 'transparent',
        },
      })}
    />
    <App.Screen
      name="PaymentValidation"
      component={PaymentValidation}
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
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderWidth: 0,
          shadowColor: 'transparent',
        },
      })}
    />

    <App.Screen
      name="Perks"
      component={Perks}
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
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderWidth: 0,
          shadowColor: 'transparent',
        },
      })}
    />

    <App.Screen
      name="Post"
      component={Post}
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
        headerTitle: '',
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          borderWidth: 0,
          shadowColor: 'transparent',
        },
      })}
    />

    <App.Screen
      name="Category"
      component={Category}
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
        headerTitle: '',
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
