import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Switch, Image, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import * as ImagePicker from 'expo-image-picker';

const CreateTwoForOneDynamicScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [validityDate, setValidityDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [tempDate, setTempDate] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);
  const [selectedReferences, setSelectedReferences] = useState(false);
  const [whileSuppliesLast, setWhileSuppliesLast] = useState(false);
  const [image, setImage] = useState(null);

  const pickImage = () => {
    alert('Funcionalidad de selección de imagen temporalmente deshabilitada.');
  };

  const onChangeDate = (selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setValidityDate(selectedDate);
    }
  };

  const handleSubmit = () => {
    // Lógica para enviar la nueva dinámica de 2x1
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
      <Text style={styles.title}>Crear Dinámica 2x1</Text>

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
      <TouchableOpacity onPress={() => {
        setTempDate(validityDate.toLocaleDateString('es-ES'));
        setShowDatePicker(true);
      }} style={styles.datePickerButton}>
        <Text>{validityDate.toLocaleDateString('es-ES')}</Text>
        <Ionicons name="calendar-outline" size={20} color="#666" />
      </TouchableOpacity>
      
      <Modal
        visible={showDatePicker}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seleccionar Fecha</Text>
            <Text style={styles.modalSubtitle}>Formato: DD/MM/YYYY</Text>
            <TextInput
              style={styles.dateInput}
              placeholder="DD/MM/YYYY"
              value={tempDate}
              onChangeText={setTempDate}
              keyboardType="numeric"
              maxLength={10}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]} 
                onPress={() => {
                  setShowDatePicker(false);
                  setTempDate('');
                }}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalButton, styles.confirmButton]} 
                onPress={onChangeDate}
              >
                <Text style={styles.confirmButtonText}>Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Aplican términos y condiciones</Text>
        <Switch
          onValueChange={setTermsAndConditions}
          value={termsAndConditions}
        />
      </View>

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Referencias seleccionadas</Text>
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
        <Text style={styles.submitButtonText}>Crear 2x1</Text>
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
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  dateInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  confirmButton: {
    backgroundColor: '#4CAF50',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: '500',
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: '500',
  },
});

export default CreateTwoForOneDynamicScreen;