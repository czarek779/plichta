import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import {StyleSheet} from 'react-native';


export const CustomersScreen = ({navigation}) => {
    return (
      <Container>
        <Header />
        <Button 
        style={styles.Button} 
        bordered
        onPress={() => navigation.navigate('AddDeviceScreen')}
        >
            <Text>Dodaj nowego klienta</Text>
          </Button>
        <Content>
          <List>
            
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/faceman.jpg')} />
              </Left>
              <Body> 
                <Text>Mirek Kowalski</Text>
                <Text note>Krakow 2500</Text>
              </Body>
              <Right>
                <Text note>12:45 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/face.jpg')} />
              </Left>
              <Body>
                <Text>Monika Kowalska</Text>
                <Text note>Warszawa 125</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/faceman.jpg')} />
              </Left>
              <Body> 
                <Text>Andrzej Nowak</Text>
                <Text note>Nowy Sacz 20</Text>
              </Body>
              <Right>
                <Text note>10:45 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/faceman.jpg')} />
              </Left>
              <Body> 
                <Text>Tomasz Frankowski</Text>
                <Text note>Gdansk 45</Text>
              </Body>
              <Right>
                <Text note>17:05 pm</Text>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }

  const styles = StyleSheet.create({
    Button: {
      alignSelf: 'center',
      margin: 10,
    }
  })