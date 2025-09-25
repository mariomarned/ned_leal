import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing } from '../../constants/Styles';

const ForgotPasswordScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    console.log('Reset password for:', email);
    // Implement password reset logic here
    alert('Se ha enviado un enlace de restablecimiento de contraseña a tu correo electrónico.');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.h1}>Recuperar Contraseña</Text>
      <Text style={styles.instructionText}>
        Ingresa tu correo electrónico para recibir un enlace de restablecimiento de contraseña.
      </Text>
      <CustomTextInput
        placeholder="Tu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        label="Tu email"
      />
      <CustomButton
        title="Restablecer Contraseña"
        onPress={handleResetPassword}
        style={styles.button}
      />
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
  instructionText: {
    ...GlobalStyles.bodyText,
    textAlign: 'center',
    marginBottom: Spacing.large,
    color: Colors.darkGray,
  },
  button: {
    marginTop: Spacing.large,
  },
});

export default ForgotPasswordScreen;