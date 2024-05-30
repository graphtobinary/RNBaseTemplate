import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationInterface} from '../types';
// Screens Imports
import BottomTabs from './BootomTabs';
import Profile from '../screens/profile';

const Drawer = createDrawerNavigator<NavigationInterface>();

function SideDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Demo" component={BottomTabs} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default SideDrawer;
