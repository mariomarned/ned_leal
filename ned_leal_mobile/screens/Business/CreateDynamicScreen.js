import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles, Colors, FontSizes, Spacing } from '../../constants/Styles';

const CreateDynamicScreen = ({ navigation }) => {
  const [dynamicName, setDynamicName] = useState('');
  const [dynamicDescription, setDynamicDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleCreateDynamic = () => {
    console.log('Dynamic Name:', dynamicName);
    console.log('Dynamic Description:', dynamicDescription);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);
    alert('Dinámica creada exitosamente!');
    // Implement dynamic creation logic here
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={GlobalStyles.h1}>Crear Dinámica</Text>
        <CustomTextInput
          placeholder="Nombre de la Dinámica"
          value={dynamicName}
          onChangeText={setDynamicName}
          label="Nombre de la Dinámica"
        />
        <CustomTextInput
          placeholder="Descripción de la Dinámica"
          value={dynamicDescription}
          onChangeText={setDynamicDescription}
          multiline
          numberOfLines={4}
          label="Descripción de la Dinámica"
        />
        <CustomTextInput
          placeholder="Fecha de Inicio (DD/MM/AAAA)"
          value={startDate}
          onChangeText={setStartDate}
          label="Fecha de Inicio"
        />
        <CustomTextInput
          placeholder="Fecha de Fin (DD/MM/AAAA)"
          value={endDate}
          onChangeText={setEndDate}
          label="Fecha de Fin"
        />
        <CustomButton
          title="Crear Dinámica"
          onPress={handleCreateDynamic}
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
  button: {
    marginTop: Spacing.large,
  },
});

export default CreateDynamicScreen;