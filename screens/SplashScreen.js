import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';




export const SplashScreen = ({navigation}) => {


  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={'white'}
        barStyle="light-content"
      />
      <View style={styles.header}>
        {/* <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={}
          style={styles.logo}
          resizeMode="contain"
        /> */}
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: 'blue',
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: 'white',
            },
          ]}>
          Serwis komputerowy
        </Text>
        <Text style={styles.text}>Zaloguj się</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <LinearGradient
              colors={[
                'black',
                'azure',
              ]}
              style={styles.signIn}>
              <Text style={styles.textSign}>Zacznij</Text>
              {/* <MaterialIcons name="navigate-next" color="#fff" size={20} /> */}
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text: {
    color: 'grey',
    marginTop: 50,
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    marginTop: 25,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
