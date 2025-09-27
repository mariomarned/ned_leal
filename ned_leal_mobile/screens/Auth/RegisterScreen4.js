import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing, Fonts } from '../../constants/Styles';

const RegisterScreen4 = ({ navigation }) => {
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessPhone, setBusinessPhone] = useState('');

  const handleRegister = () => {
    console.log('Business Name:', businessName);
    console.log('Business Type:', businessType);
    console.log('Business Address:', businessAddress);
    console.log('Business Phone:', businessPhone);
    alert('Registro completado!');
    // Implement final registration logic here
    // For now, navigate to Login screen
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={GlobalStyles.h1}>Registro (4/4)</Text>
        <CustomTextInput
          placeholder="Nombre del Negocio"
          value={businessName}
          onChangeText={setBusinessName}
          label="Nombre del Negocio"
        />
        <CustomTextInput
          placeholder="Tipo de Negocio"
          value={businessType}
          onChangeText={setBusinessType}
          label="Tipo de Negocio"
        />
        <CustomTextInput
          placeholder="Dirección del Negocio"
          value={businessAddress}
          onChangeText={setBusinessAddress}
          label="Dirección del Negocio"
        />
        <CustomTextInput
          placeholder="Teléfono del Negocio"
          value={businessPhone}
          onChangeText={setBusinessPhone}
          keyboardType="phone-pad"
          label="Teléfono del Negocio"
        />
        <CustomButton
          title="Registrar"
          onPress={handleRegister}
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

export default RegisterScreen4;