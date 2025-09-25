import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlobalStyles } from '../../constants/Styles';
import { Colors } from '../../constants/Colors';
import { FontSizes } from '../../constants/FontSizes';
import { Fonts } from '../../constants/Fonts';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const BusinessInfoScreen = ({ navigation }) => {
  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      <View style={GlobalStyles.headerContainer}>
        <Text style={GlobalStyles.screenTitle}>Información de tu Negocio</Text>
      </View>

      <View style={styles.contentContainer}>
        <CustomTextInput
          label="Nombre del Negocio"
          placeholder="Mi Negocio S.A.S."
          value="Mi Negocio S.A.S."
          onChangeText={() => {}}
        />
        <CustomTextInput
          label="Tipo de Negocio"
          placeholder="Restaurante, Tienda de Ropa, etc."
          value="Restaurante"
          onChangeText={() => {}}
        />
        <CustomTextInput
          label="Dirección"
          placeholder="Calle 123 #45-67"
          value="Calle 123 #45-67"
          onChangeText={() => {}}
        />
        <CustomTextInput
          label="Teléfono"
          placeholder="+57 300 123 4567"
          value="+57 300 123 4567"
          onChangeText={() => {}}
          keyboardType="phone-pad"
        />
        <CustomTextInput
          label="Correo Electrónico"
          placeholder="negocio@ejemplo.com"
          value="negocio@ejemplo.com"
          onChangeText={() => {}}
          keyboardType="email-address"
        />
        <CustomTextInput
          label="Descripción del Negocio"
          placeholder="Breve descripción de tu negocio"
          value="Ofrecemos la mejor comida italiana de la ciudad."
          onChangeText={() => {}}
          multiline
          numberOfLines={4}
        />

        <CustomButton
          title="Guardar Cambios"
          onPress={() => console.log('Guardar Cambios')}
          style={styles.saveButton}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  saveButton: {
    marginTop: 20,
  },
});

export default BusinessInfoScreen;