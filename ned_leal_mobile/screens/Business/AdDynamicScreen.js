import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AdDynamicScreen = ({ navigation }) => {
  const activeDynamics = [
    { id: '1', title: 'Anuncio de Temporada', description: 'Nuevos productos disponibles', expiry: '2024-09-30' },
    { id: '2', title: 'Gran Inauguración', description: 'Descuentos especiales por apertura', expiry: '2024-07-20' },
  ];

  const expiredDynamics = [
    { id: '3', title: 'Liquidación de Invierno', description: 'Hasta 50% de descuento', expiry: '2024-03-15' },
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
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Dinámica Anuncio</Text>
        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigation.navigate('CreateAdDynamic')}
        >
          <Text style={styles.newButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>

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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  newButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  newButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 16,
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
  },
  reportButton: {
    backgroundColor: '#28a745',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  reportButtonText: {
    color: '#fff',
    fontSize: 12,
  },
  editButton: {
    backgroundColor: '#ffc107',
    paddingVertical: 7,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginLeft: 10,
  },
  editButtonText: {
    color: '#333',
    fontSize: 12,
  },
  noDynamicsText: {
    textAlign: 'center',
    color: '#888',
    marginTop: 10,
    marginBottom: 20,
  },
});

export default AdDynamicScreen;