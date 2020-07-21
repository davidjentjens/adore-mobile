import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';
import Discover from '../pages/Discover';
import Subscriptions from '../pages/Subscriptions';
import Feed from '../pages/Feed';

const Tab = createBottomTabNavigator();

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'below-icon',
      activeTintColor: '#a58328',
      labelStyle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        fontWeight: '600',
      },
      inactiveTintColor: '#B7B7CC',

      style: {
        backgroundColor: '#2f2f2f',
        borderTopColor: 'transparent',
      },
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Icon size={22} name="home" color={color} />,
        title: 'Feed',
      }}
      name="Feed"
      component={Feed}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={22} name="compass" color={color} />
        ),
        title: 'Descobrir',
      }}
      name="DashboardStack"
      component={Discover}
    />
    <Tab.Screen
      name="Subscriptions"
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={22} name="credit-card" color={color} />
        ),
        title: 'Assinaturas',
      }}
      component={Subscriptions}
    />
  </Tab.Navigator>
);

export default TabRoutes;
