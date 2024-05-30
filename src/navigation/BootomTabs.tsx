import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ROUTES} from './routes';
import {NavigationInterface} from '../types';
// Screens Imports
import Home from '../screens/home';
import Feed from '../screens/feed';

const Tab = createBottomTabNavigator<NavigationInterface>();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={ROUTES.FEED}
        component={Feed}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;
