import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';

import{TextInput} from 'react-native-paper';

export const AddDeviceScreen = ({props, navigation}) => (
    <Formik initialValues={{Nazwisko: '', Imię: '', Urzadzenie: '', Opis: ''}} onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <View>
          <TextInput
            onChangeText={handleChange('Nazwisko')}
            onBlur={handleBlur('Nazwisko')}
            value={values.Nazwisko}
            label={'Nazwisko'}
            mode={'outlined'}
            style={styles.MainInput}
            selectionColor={'azure'}
            theme={{ colors: { primary: 'blue' , underlineColor: 'transparent', placeholder: 'black'}}}
          />
          <TextInput
            onChangeText={handleChange('Imię')}
            onBlur={handleBlur('Imię')}
            value={values.Imię}
            label={'Imię'}
            mode={'outlined'}
            style={styles.MainInput}
            selectionColor={'azure'}
            theme={{ colors: { primary: 'blue' , underlineColor: 'transparent', placeholder: 'black'}}}
          />
          <TextInput
            onChangeText={handleChange('Adres')}
            onBlur={handleBlur('Adres')}
            value={values.urzadzenie}
            label={'Adres'}
            mode={'outlined'}
            style={styles.MainInput}
            selectionColor={'azure'}
            theme={{ colors: { primary: 'blue' , underlineColor: 'transparent', placeholder: 'black'}}}
          />
         
          <Button style={styles.SubmitButton} onPress={() => navigation.navigate('DevicesScreen')} title="dodaj klienta" />
        </View>
      )}
    </Formik>
  );
  
  const styles = StyleSheet.create({
      MainInput: {
      color: 'blue',
      width: 300,
      height: 40,
      padding: 5,
      alignSelf: 'center',
      },
      SubmitButton: {
        marginTop: 500,
        width: 200,
      }
    });