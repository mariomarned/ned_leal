import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConsumerBusinessSearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate search results
    const dummyResults = [
      { id: '1', name: 'Cafetería El Grano', description: 'Café de especialidad y postres', image: 'https://via.placeholder.com/150' },
      { id: '2', name: 'Peluquería Estilo Urbano', description: 'Cortes modernos para hombres y mujeres', image: 'https://via.placeholder.com/150' },
      { id: '3', name: 'Restaurante La Casona', description: 'Comida tradicional mexicana', image: 'https://via.placeholder.com/150' },
      { id: '4', name: 'Librería El Lector', description: 'Amplia selección de libros y revistas', image: 'https://via.placeholder.com/150' },
    ];
    setSearchResults(dummyResults.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Buscar Negocios</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar negocios..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Ionicons name="search-outline" size={24} color="white" />
          <Text style={styles.searchButtonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultsContainer}>
        {searchResults.length > 0 ? (
          searchResults.map(item => (
            <View key={item.id} style={styles.resultCard}>
              <Image source={{ uri: item.image }} style={styles.businessImage} />
              <View style={styles.businessInfo}>
                <Text style={styles.businessName}>{item.name}</Text>
                <Text style={styles.businessDescription}>{item.description}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No hay negocios para mostrar.</Text>
        )}
      </View>
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
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#007bff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  searchButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  resultsContainer: {
    marginTop: 10,
  },
  resultCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.20)',
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
  businessDescription: {
    fontSize: 14,
    color: '#555',
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});

export default ConsumerBusinessSearchScreen;