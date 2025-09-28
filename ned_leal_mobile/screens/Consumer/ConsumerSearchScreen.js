import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ConsumerSearchScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate search results
    const dummyResults = [
      { id: '1', name: 'Café Latte', description: 'Delicioso café con leche', type: 'product' },
      { id: '2', name: 'Corte de Pelo', description: 'Servicio de peluquería', type: 'service' },
      { id: '3', name: 'Pastel de Chocolate', description: 'Postre casero', type: 'product' },
      { id: '4', name: 'Masaje Relajante', description: 'Sesión de masaje', type: 'service' },
    ];
    setSearchResults(dummyResults.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Buscar Productos o Servicios</Text>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
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
              <Text style={styles.resultName}>{item.name}</Text>
              <Text style={styles.resultDescription}>{item.description}</Text>
              <Text style={styles.resultType}>{item.type === 'product' ? 'Producto' : 'Servicio'}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noResultsText}>No hay resultados para mostrar.</Text>
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
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.20)',
  },
  resultName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  resultDescription: {
    fontSize: 14,
    color: '#555',
  },
  resultType: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  noResultsText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});

export default ConsumerSearchScreen;