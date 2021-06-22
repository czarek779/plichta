import React , {useState, useEffect, useMemo}from "react";
// import { Button, Text, View } from "react-native";
import shallow from "zustand/shallow";
import 'react-native-gesture-handler';
import {View, Text, Button, ActivityIndicator} from 'react-native';

import {AuthContext} from './context/AuthContext';


import {RootStackScreen} from './navigation/RootStackNav';
import { NavigationContainer } from '@react-navigation/native';
import {DrawerNav} from './navigation/DrawerNav';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeScreen} from './screens/HomeScreen';
import {DevicesScreen} from './screens/DevicesScreen';
import {OrdersScreen} from './screens/OrdersScreen';
import {CustomersScreen} from './screens/CustomersScreen';
import {AddDeviceScreen} from './screens/AddDeviceScreen';

const Drawer = createDrawerNavigator();

export default function App () {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = useMemo(
    () => ({
      signIn: () => {
        setUserToken('fgkj');
        setIsLoading(false);
        
      },
      signOut: () => {
        setUserToken(null);
        setIsLoading(false);
        
      },
      signUp: () => {
        setUserToken('fgkj');
        setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken !== null ? (
          <Drawer.Navigator
          drawerContent={props => <DrawerNav {...props} />}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="CustomersScreen" component={CustomersScreen} />
            <Drawer.Screen name="DevicesScreen" component={DevicesScreen} />
            <Drawer.Screen name="OrdersScreen" component={OrdersScreen} />
            <Drawer.Screen name="AddDeviceScreen" component={AddDeviceScreen} />
            </Drawer.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

