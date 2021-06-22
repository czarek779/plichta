import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {SplashScreen} from '../screens/SplashScreen';
import {LoginScreen} from '../screens/LoginScreen';
import {CustomersScreen} from '../screens/CustomersScreen';
import {OrdersScreen} from '../screens/OrdersScreen';

const RootStack = createStackNavigator();

export const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="LoginScreen" component={LoginScreen} />
    <RootStack.Screen name="OrdersScreen" component={OrdersScreen} />
  </RootStack.Navigator>
);