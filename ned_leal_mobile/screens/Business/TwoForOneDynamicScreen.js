import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const TwoForOneDynamicScreen = ({ navigation }) => {
  const activeDynamics = [
    { id: '1', title: 'Oferta de Verano', description: '2x1 en todos los helados', expiry: '2024-08-31' },
    { id: '2', title: 'Promoción de Apertura', description: '2x1 en cafés seleccionados', expiry: '2024-07-15' },
  ];

  const expiredDynamics = [
    { id: '3', title: 'Oferta de Invierno', description: '2x1 en chocolates calientes', expiry: '2024-02-28' },
  ];

  const renderDynamicCard = (dynamic, isActive) => (
    <View key={dynamic.id} style={styles.card}>
      <Text style={styles.cardTitle}>{dynamic.title}</Text>
      <Text style={styles.cardDescription}>{dynamic.description}</Text>
      <Text style={styles.cardExpiry}>Vence: {dynamic.expiry}</Text>
      <View style={styles.cardButtons}>
        <TouchableOpacity style={styles.reportButton} onPress={() => console.log('Ver informe', dynamic.id)}>
          <Text style={styles.reportButtonText}>Ver informe</Text>
        </TouchableOpacity>
        {isActive && (
          <TouchableOpacity style={styles.editButton} onPress={() => console.log('Editar', dynamic.id)}>
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      <Text style={styles.title}>Dinámica Dos x Uno</Text>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Dinámicas Vigentes</Text>
        {activeDynamics.length > 0 ? (
          activeDynamics.map(dynamic => renderDynamicCard(dynamic, true))
        ) : (
          <Text style={styles.noDynamicsText}>No hay dinámicas vigentes.</Text>
        )}

        <Text style={styles.sectionTitle}>Dinámicas Vencidas</Text>
        {expiredDynamics.length > 0 ? (
          expiredDynamics.map(dynamic => renderDynamicCard(dynamic, false))
        ) : (
          <Text style={styles.noDynamicsText}>No hay dinámicas vencidas.</Text>
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.newDynamicButton}
        onPress={() => navigation.navigate('CreateTwoForOneDynamic')}
      >
        <Text style={styles.newDynamicButtonText}>Nuevo</Text>
      </TouchableOpacity>
    </View>
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
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
    color: '#333',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardExpiry: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  reportButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  reportButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  editButton: {
    backgroundColor: '#ffc107',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  editButtonText: {
    color: '#333',
    fontSize: 14,
  },
  noDynamicsText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 10,
    marginBottom: 20,
  },
  newDynamicButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  newDynamicButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default TwoForOneDynamicScreen;