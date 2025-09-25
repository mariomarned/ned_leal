import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DiscountScreen = ({ navigation }) => {
  const activeDynamics = [
    { id: '1', title: 'Descuento de Verano', detail: '2x1 en bebidas seleccionadas.', date: 'Válido hasta: 31/08/2024' },
    { id: '2', title: 'Descuento de Invierno', detail: '50% de descuento en postres.', date: 'Válido hasta: 28/02/2025' },
  ];

  const expiredDynamics = [
    { id: '3', title: 'Descuento de Primavera', detail: '30% en ensaladas.', date: 'Válido hasta: 31/05/2024' },
  ];

  const DynamicCard = ({ dynamic, isActive }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{dynamic.title}</Text>
      <Text style={styles.cardDetail}>{dynamic.detail}</Text>
      <Text style={styles.cardDate}>{dynamic.date}</Text>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.reportButton}>
          <Text style={styles.reportButtonText}>Ver Informe</Text>
        </TouchableOpacity>
        {isActive && (
          <TouchableOpacity style={styles.editButton}>
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
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Descuentos</Text>
        <TouchableOpacity style={styles.newButton} onPress={() => navigation.navigate('CreateDiscountDynamic')}>
          <Text style={styles.newButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Dinámicas Vigentes</Text>
        {activeDynamics.map(dynamic => (
          <DynamicCard key={dynamic.id} dynamic={dynamic} isActive={true} />
        ))}

        <Text style={styles.sectionTitle}>Dinámicas Vencidas</Text>
        {expiredDynamics.map(dynamic => (
          <DynamicCard key={dynamic.id} dynamic={dynamic} isActive={false} />
        ))}
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
  cardDetail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  cardDate: {
    fontSize: 12,
    color: '#888',
    marginBottom: 10,
  },
  cardActions: {
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
});

export default DiscountScreen;