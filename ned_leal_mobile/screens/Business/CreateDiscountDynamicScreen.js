import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Switch, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const CreateDiscountDynamicScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [validityDate, setValidityDate] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
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

  const handleSubmit = () => {
    // Handle submission logic here
    console.log({
      title,
      detail,
      validityDate,
      termsAccepted,
      selectedReferences,
      whileSuppliesLast,
      image,
    });
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Crear Dinámica de Descuento</Text>
      </View>

      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imagePickerText}>Subir Imagen</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Detalle"
        value={detail}
        onChangeText={setDetail}
        multiline
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha de Vigencia (DD/MM/AAAA)"
        value={validityDate}
        onChangeText={setValidityDate}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Aplican términos y condiciones</Text>
        <Switch
          onValueChange={setTermsAccepted}
          value={termsAccepted}
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
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 30,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagePicker: {
    backgroundColor: '#e0e0e0',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  imagePickerText: {
    color: '#888',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  switchLabel: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateDiscountDynamicScreen;