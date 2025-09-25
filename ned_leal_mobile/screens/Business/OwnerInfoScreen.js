import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing } from '../../constants/Styles';

const OwnerInfoScreen = ({ navigation }) => {
  const [ownerName, setOwnerName] = useState('Tienda don Fidel');
  const [ownerEmail, setOwnerEmail] = useState('fidel@example.com');
  const [ownerPhone, setOwnerPhone] = useState('+1234567890');
  const [ownerAddress, setOwnerAddress] = useState('Calle Falsa 123');

  const handleSave = () => {
    console.log('Owner Name:', ownerName);
    console.log('Owner Email:', ownerEmail);
    console.log('Owner Phone:', ownerPhone);
    console.log('Owner Address:', ownerAddress);
    alert('Información del propietario guardada!');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={GlobalStyles.h1}>Información del Propietario</Text>
        <Image
          source={require('../../assets/icon.png')} // Replace with actual owner photo
          style={styles.ownerPhoto}
        />
        <CustomTextInput
          label="Nombre del Propietario"
          value={ownerName}
          onChangeText={setOwnerName}
        />
        <CustomTextInput
          label="Correo Electrónico"
          value={ownerEmail}
          onChangeText={setOwnerEmail}
          keyboardType="email-address"
        />
        <CustomTextInput
          label="Número de Teléfono"
          value={ownerPhone}
          onChangeText={setOwnerPhone}
          keyboardType="phone-pad"
        />
        <CustomTextInput
          label="Dirección"
          value={ownerAddress}
          onChangeText={setOwnerAddress}
        />
        <CustomButton
          title="Guardar Cambios"
          onPress={handleSave}
          style={styles.button}
        />
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
  ownerPhoto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: Spacing.large,
  },
  button: {
    marginTop: Spacing.large,
  },
});

export default OwnerInfoScreen;