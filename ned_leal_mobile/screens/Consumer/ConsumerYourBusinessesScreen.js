import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConsumerYourBusinessesScreen = ({ navigation }) => {
  const favoriteBusinesses = [
    { id: '1', name: 'Cafetería El Grano', category: 'Cafetería', image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Peluquería Estilo Urbano', category: 'Peluquería', image: 'https://via.placeholder.com/150' },
    { id: '3', name: 'Restaurante La Casona', category: 'Restaurante', image: 'https://via.placeholder.com/150' },
  ];

  const renderBusinessCard = (business) => (
    <TouchableOpacity key={business.id} style={styles.businessCard} onPress={() => navigation.navigate('ConsumerBusinessDetail', { businessId: business.id })}>
      <Image source={{ uri: business.image }} style={styles.businessImage} />
      <View style={styles.businessInfo}>
        <Text style={styles.businessName}>{business.name}</Text>
        <Text style={styles.businessCategory}>{business.category}</Text>
      </View>
      <Ionicons name="chevron-forward" size={24} color="#ccc" />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Tus Negocios</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Negocios Favoritos</Text>
        {favoriteBusinesses.length > 0 ? (
          favoriteBusinesses.map(renderBusinessCard)
        ) : (
          <Text style={styles.noBusinessesText}>Aún no tienes negocios favoritos.</Text>
        )}
      </View>

      {/* Add more sections for recently visited, etc. */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  businessCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  businessImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  businessInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  businessName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  businessCategory: {
    fontSize: 14,
    color: '#555',
  },
  noBusinessesText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 16,
    color: '#777',
  },
});

export default ConsumerYourBusinessesScreen;