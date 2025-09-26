import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { GlobalStyles, Colors, FontSizes, Fonts } from '../../constants/Styles';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

const BusinessInfoScreen = ({ navigation }) => {
  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Información del Negocio</Text>
      </View>

      <View style={styles.formContainer}>
        <CustomTextInput
          placeholder="Nombre del Negocio"
          value="Mi Negocio"
          onChangeText={() => {}}
          style={styles.input}
        />
        <CustomTextInput
          placeholder="Dirección"
          value="Calle Falsa 123"
          onChangeText={() => {}}
          style={styles.input}
        />
        <CustomTextInput
          placeholder="Teléfono"
          value="123-456-7890"
          onChangeText={() => {}}
          style={styles.input}
        />
        <CustomTextInput
          placeholder="Correo Electrónico"
          value="minegocio@example.com"
          onChangeText={() => {}}
          style={styles.input}
        />
        <CustomTextInput
          placeholder="Descripción"
          value="Este es un negocio increíble."
          onChangeText={() => {}}
          multiline
          numberOfLines={4}
          style={[styles.input, styles.textArea]}
        />

        <CustomButton
          title="Guardar Cambios"
          onPress={() => {}}
          style={styles.saveButton}
          textStyle={styles.saveButtonText}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: FontSizes.large,
    fontFamily: Fonts.bold,
    color: Colors.primary,
  },
  formContainer: {
    paddingHorizontal: 20,
  },
  input: {
    marginBottom: 15,
    borderColor: Colors.lightGray,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.regular,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    backgroundColor: Colors.accent,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: Colors.white,
    fontSize: FontSizes.medium,
    fontFamily: Fonts.bold,
  },
});

export default BusinessInfoScreen;