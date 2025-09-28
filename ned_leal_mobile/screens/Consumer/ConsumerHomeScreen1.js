import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConsumerHomeScreen1 = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      {/* Tus Negocios Preferidos Module */}
      <View style={styles.moduleContainer}>
        <Text style={styles.moduleTitle}>Tus Negocios Preferidos</Text>
        <View style={styles.cardContainer}>
          {/* Example Business Card */}
          <View style={styles.businessCard}>
            <Text style={styles.businessName}>Negocio A</Text>
            <Text style={styles.businessDescription}>Descripción corta del negocio A</Text>
          </View>
          <View style={styles.businessCard}>
            <Text style={styles.businessName}>Negocio B</Text>
            <Text style={styles.businessDescription}>Descripción corta del negocio B</Text>
          </View>
        </View>
      </View>

      {/* Recomendaciones Module */}
      <View style={styles.moduleContainer}>
        <Text style={styles.moduleTitle}>Recomendaciones</Text>
        <View style={styles.cardContainer}>
          {/* Example Recommendation Card */}
          <View style={styles.recommendationCard}>
            <Text style={styles.recommendationTitle}>Oferta Especial</Text>
            <Text style={styles.recommendationDescription}>2x1 en cafés este fin de semana</Text>
          </View>
          <View style={styles.recommendationCard}>
            <Text style={styles.recommendationTitle}>Nuevo Producto</Text>
            <Text style={styles.recommendationDescription}>Prueba nuestra nueva hamburguesa</Text>
          </View>
        </View>
      </View>

      {/* Ir a Tus Premios Button */}
      <TouchableOpacity style={styles.rewardsButton} onPress={() => console.log('Ir a Tus Premios')}>
        <Ionicons name="trophy-outline" size={24} color="white" />
        <Text style={styles.rewardsButtonText}>Ir a Tus Premios</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 15,
  },
  moduleContainer: {
    marginBottom: 20,
  },
  moduleTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  businessCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%', // Adjust as needed for spacing
    marginBottom: 10,
    boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.20)',
  },
  businessName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  businessDescription: {
    fontSize: 14,
    color: '#555',
  },
  recommendationCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    width: '48%', // Adjust as needed for spacing
    marginBottom: 10,
    boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.20)',
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#555',
  },
  rewardsButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  rewardsButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default ConsumerHomeScreen1;