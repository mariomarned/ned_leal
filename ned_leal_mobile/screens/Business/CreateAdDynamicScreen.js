import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as ImagePicker from 'expo-image-picker';

const CreateAdDynamicScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [validityDate, setValidityDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [selectedReferences, setSelectedReferences] = useState(false);
  const [whileSuppliesLast, setWhileSuppliesLast] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || validityDate;
    setShowDatePicker(false);
    setValidityDate(currentDate);
  };

  const handleSubmit = () => {
    // Lógica para enviar la nueva dinámica de anuncio
    console.log({
      title,
      detail,
      validityDate,
      termsAndConditions,
      selectedReferences,
      whileSuppliesLast,
      image,
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Crear Dinámica Anuncio</Text>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Ionicons name="camera" size={50} color="#ccc" />
        )}
        <Text style={styles.imagePickerText}>Subir Imagen</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Detalle"
        value={detail}
        onChangeText={setDetail}
        multiline
      />

      <Text style={styles.label}>Fecha de Vigencia:</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePickerButton}>
        <Text>{validityDate.toLocaleDateString()}</Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={validityDate}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Aplican términos y condiciones</Text>
        <Switch
          onValueChange={setTermsAndConditions}
          value={termsAndConditions}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Válido para referencias seleccionadas</Text>
        <Switch
          onValueChange={setSelectedReferences}
          value={selectedReferences}
        />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Hasta agotar existencias</Text>
        <Switch
          onValueChange={setWhileSuppliesLast}
          value={whileSuppliesLast}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imagePicker: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  imagePickerText: {
    marginTop: 10,
    color: '#555',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    justifyContent: 'center',
    height: 45,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 5,
  },
  switchLabel: {
    fontSize: 16,
    color: '#333',
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateAdDynamicScreen;