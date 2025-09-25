import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles } from '../../constants/Styles';

const FollowerInfoScreen = ({ navigation }) => {
  return (
    <ScrollView style={GlobalStyles.container}>
      <View style={GlobalStyles.innerContainer}>
        <Text style={GlobalStyles.title}>Información del Seguidor</Text>

        <CustomTextInput
          placeholder="Nombre del Seguidor"
          value="Juan Pérez"
          editable={false}
        />
        <CustomTextInput
          placeholder="Correo Electrónico"
          value="juan.perez@example.com"
          editable={false}
        />
        <CustomTextInput
          placeholder="Teléfono"
          value="+57 300 123 4567"
          editable={false}
        />
        <CustomTextInput
          placeholder="Puntos Acumulados"
          value="1500"
          editable={false}
        />

        <CustomButton
          title="Volver a Seguidores"
          onPress={() => navigation.goBack()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  // Puedes añadir estilos específicos si es necesario
});

export default FollowerInfoScreen;