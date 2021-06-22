import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button } from 'native-base';
import {StyleSheet} from 'react-native';


export const DevicesScreen = ({navigation}) => {
    return (
      <Container>
        <Header />
        <Button 
        style={styles.Button} 
        bordered
        onPress={() => navigation.navigate('AddDeviceScreen')}
        >
            <Text>Dodaj urządzenie</Text>
          </Button>
        <Content>
          <List>
            
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/computer.jpg')} />
              </Left>
              <Body> 
                <Text>Mirek Kowalski</Text>
                <Text note>Laptop HP p650, I7-9320 3.2Ghz, - uszkodzony procesor.</Text>
              </Body>
              <Right>
                <Text note>~2000zł / 14dni</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/printer.jpg')} />
              </Left>
              <Body>
                <Text>Andrzej Nowak</Text>
                <Text note>Xerox xc670 - uszkodzony wałek podający papier.</Text>
              </Body>
              <Right>
                <Text note>750zł / 10dni</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/computer.jpg')} />
              </Left>
              <Body> 
                <Text>Monika Kowalska</Text>
                <Text note>Dell WYSE - Uszkodzenie grafiki</Text>
              </Body>
              <Right>
                <Text note>~1000zł / 4dni</Text>
              </Right>
            </ListItem>
            <ListItem avatar></ListItem>
            
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