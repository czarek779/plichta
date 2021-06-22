import React from 'react';
// import {Text, View} from 'react-native';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Font } from 'expo';
import {MainAppbar} from './Appbar';
import {StyleSheet} from 'react-native';


export const HomeScreen = ({navigation}) => {
  return (
    <Container>
        <MainAppbar />
        <Header />
        <Content style={styles.Content}>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/komputer.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                onPress={() => navigation.navigate('DevicesScreen')}
                >
                  <Text>Urządzenia</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/zlecenia.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                onPress={() => navigation.navigate('OrdersScreen')}>
                  <Text>Zlecenia naprawy</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/klienci.jpg')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Body>
                <Button
                onPress={() => navigation.navigate('CustomersScreen')}
                >
                  <Text>Klienci</Text>
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
};

const styles = StyleSheet.create({
  Content: {
    marginBottom: 60,
  }
})