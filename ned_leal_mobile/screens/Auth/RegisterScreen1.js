import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing } from '../../constants/Styles'; // Corregido: se añadió Spacing

const RegisterScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={GlobalStyles.h1}>Registro</Text>
      <Text style={GlobalStyles.bodyText}>¡Bienvenido! Comencemos tu registro.</Text>
      {/* Placeholder for future content */}
      <CustomButton
        title="Continuar"
        onPress={() => navigation.navigate('Register3')} // Corregido: ahora navega a Register3
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.medium, // Corregido
  },
  button: {
    marginTop: Spacing.large, // Corregido
    width: '80%',
  },
});

export default RegisterScreen1;