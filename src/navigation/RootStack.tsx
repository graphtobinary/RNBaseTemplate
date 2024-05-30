import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ROUTES} from './routes';
import {NavigationInterface} from '../types';
// Screens Imports
import Details from '../screens/details';
import SideDrawer from './Drawer';

const Stack = createNativeStackNavigator<NavigationInterface>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.ROOT}
        component={SideDrawer}
        options={{headerShown: false}}
      />
      <Stack.Screen name={ROUTES.DETAILS} component={Details} />
    </Stack.Navigator>
  );
}

export default RootStack;
