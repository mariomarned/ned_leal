import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing, Fonts } from '../../constants/Styles';

const RegisterScreen3 = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleNext = () => {
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('City:', city);
    console.log('Country:', country);
    navigation.navigate('Register4');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={GlobalStyles.h1}>Registro (3/4)</Text>
        <CustomTextInput
          placeholder="Nombres"
          value={firstName}
          onChangeText={setFirstName}
          label="Nombres"
        />
        <CustomTextInput
          placeholder="Apellidos"
          value={lastName}
          onChangeText={setLastName}
          label="Apellidos"
        />
        <CustomTextInput
          placeholder="Número de celular"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          label="Número de celular"
        />
        <CustomTextInput
          placeholder="Dirección"
          value={address}
          onChangeText={setAddress}
          label="Dirección"
        />
        <CustomTextInput
          placeholder="Ciudad"
          value={city}
          onChangeText={setCity}
          label="Ciudad"
        />
        <CustomTextInput
          placeholder="País"
          value={country}
          onChangeText={setCountry}
          label="País"
        />
        <CustomButton
          title="Siguiente"
          onPress={handleNext}
          style={styles.button}
        />
        <View style={styles.loginContainer}>
          <Text style={GlobalStyles.bodyText}>¿Ya tienes cuenta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText}>Inicia Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.large,
    backgroundColor: Colors.white,
  },
  button: {
    marginTop: Spacing.large,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.large,
  },
  loginText: {
    color: Colors.magenta,
    fontFamily: Fonts.nunito,
    fontSize: FontSizes.body,
    fontWeight: 'bold',
  },
});

export default RegisterScreen3;