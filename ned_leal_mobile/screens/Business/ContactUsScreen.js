import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles } from '../../constants/Styles';

const ContactUsScreen = ({ navigation }) => {
  return (
    <ScrollView style={GlobalStyles.container}>
      <View style={GlobalStyles.innerContainer}>
        <Text style={GlobalStyles.title}>Contáctenos</Text>

        <CustomTextInput
          placeholder="Asunto"
        />
        <CustomTextInput
          placeholder="Mensaje"
          multiline={true}
          numberOfLines={5}
          style={styles.messageInput}
        />

        <CustomButton
          title="Enviar Mensaje"
          onPress={() => alert('Mensaje Enviado')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
});

export default ContactUsScreen;