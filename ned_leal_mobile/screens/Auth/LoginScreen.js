import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing, Fonts } from '../../constants/Styles';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Implement login logic here
    navigation.navigate('BusinessHome'); // Corregido: ahora navega a BusinessHome
  };

  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.h1}>Iniciar Sesión</Text>
      <CustomTextInput
        placeholder="Tu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        label="Tu email"
      />
      <CustomTextInput
        placeholder="Tu contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        label="Tu contraseña"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
      <CustomButton
        title="Iniciar Sesión"
        onPress={handleLogin}
        style={styles.button}
      />
      <View style={styles.registerContainer}>
        <Text style={GlobalStyles.bodyText}>¿No tienes cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register1')}>
          <Text style={styles.registerText}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: Spacing.large,
    backgroundColor: Colors.white,
  },
  forgotPasswordText: {
    color: Colors.magenta,
    textAlign: 'right',
    marginTop: Spacing.small,
    marginBottom: Spacing.medium,
    fontFamily: Fonts.nunito,
    fontSize: FontSizes.small,
  },
  button: {
    marginTop: Spacing.large,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.large,
  },
  registerText: {
    color: Colors.magenta,
    fontFamily: Fonts.nunito,
    fontSize: FontSizes.body,
    fontWeight: 'bold',
  },
});

export default LoginScreen;