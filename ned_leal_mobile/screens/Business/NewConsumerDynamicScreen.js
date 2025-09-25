import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles } from '../../constants/Styles';

const NewConsumerDynamicScreen = ({ navigation }) => {
  return (
    <ScrollView style={GlobalStyles.container}>
      <View style={GlobalStyles.innerContainer}>
        <Text style={GlobalStyles.title}>Dinámica Nuevo Consumidor</Text>

        <CustomTextInput
          placeholder="Nombre de la Dinámica"
        />
        <CustomTextInput
          placeholder="Descripción"
          multiline={true}
          numberOfLines={5}
          style={styles.descriptionInput}
        />

        <CustomButton
          title="Crear Dinámica"
          onPress={() => alert('Dinámica Creada')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  descriptionInput: {
    height: 120,
    textAlignVertical: 'top',
  },
});

export default NewConsumerDynamicScreen;