import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing } from '../../constants/Styles'; // Corregido: se añadió Spacing

const RegisterScreen1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image
        source={require('../../assets/images/Auth/Logo_NED.png')}
        style={styles.logo}
    />
      <Text style={GlobalStyles.title}>DISFRUTA EL PODER DE LEALTAD</Text>
      <CustomButton
        title="INICIAR SESIÓN"
        onPress={() => navigation.navigate('Register3')} // Corregido: ahora navega a Register3
        style={styles.button}
        textStyle={styles.buttonText}
      />
      <CustomButton
        title="REGISTRARME"
        onPress={() => navigation.navigate('Register2')}
        style={[styles.button, { marginTop: Spacing.medium }]} // Añadir un margen superior para separarlo
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: Spacing.medium, // Corregido
    paddingTop: Spacing.large * 2,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  button: {
    marginTop: Spacing.large * 4.5,
    backgroundColor: '#C4227D', // Pink color
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
export default RegisterScreen1;