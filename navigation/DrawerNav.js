import React, {useContext} from 'react';
import {View, Text} from 'react-native';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

import { createDrawerNavigator } from '@react-navigation/drawer';



// export const DrawerNav = props => {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <DrawerContentScrollView {...props}>
//           <DrawerItem
//            onPress={() => {
//                 props.navigation.navigate('HomeScreen');
//               }}
//            label="Home">
//           </DrawerItem>
//           <DrawerItem
//            onPress={() => {
//                 props.navigation.navigate('DevicesScreen');
//               }}
//            label="Urządzenia">
//           </DrawerItem>
//           <DrawerItem
//            onPress={() => {
//                 props.navigation.navigate('CustomersScreen');
//               }}
//            label="Klienci">
//           </DrawerItem>
//           <DrawerItem
//            onPress={() => {
//                 props.navigation.navigate('OrdersScreen');
//               }}
//            label="Klienci">
//           </DrawerItem>
//         </DrawerContentScrollView>
//       </View>
//     );
//   };
import { Drawer } from 'react-native-paper';

import {AuthContext} from '../context/AuthContext';

export const DrawerNav = (props) => {
  const [active, setActive] = React.useState('');
  const {signOut} = useContext(AuthContext);


  return (
    <Drawer.Section title="Computer service">
      <Drawer.Item
        label="Home"
        active={active === 'first'}
                   onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}
      />
      <Drawer.Item
        label="Zlecenia"
                onPress={() => {
                props.navigation.navigate('OrdersScreen');
              }}
      />
      <Drawer.Item
        label="Urządzenia"
                onPress={() => {
                props.navigation.navigate('DevicesScreen');
              }}
      />
      <Drawer.Item
        label="Klienci"
                onPress={() => {
                props.navigation.navigate('CustomersScreen');
              }}
      />
      <Drawer.Item
        label="Wyloguj Mirek Kowalski"
        onPress={() => {
          signOut();
        }}
      />
    </Drawer.Section>
  );
};