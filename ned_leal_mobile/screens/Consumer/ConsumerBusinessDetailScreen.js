import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ConsumerBusinessDetailScreen = ({ navigation, route }) => {
  const { businessId } = route.params; // Assuming businessId is passed via navigation params

  // Dummy data for a business. In a real app, you would fetch this from an API.
  const business = {
    id: businessId,
    name: 'Cafetería El Grano',
    category: 'Cafeterías',
    description: 'Un lugar acogedor para disfrutar del mejor café y repostería casera.',
    address: 'Calle Falsa 123, Ciudad',
    phone: '+123 456 7890',
    email: 'info@elgrano.com',
    image: 'https://via.placeholder.com/300/FF5733/FFFFFF?text=BusinessImage',
    products: [
      { id: 'p1', name: 'Café Americano', price: '2.50', image: 'https://via.placeholder.com/80/FF5733/FFFFFF?text=Coffee' },
      { id: 'p2', name: 'Tarta de Manzana', price: '3.00', image: 'https://via.placeholder.com/80/33FF57/FFFFFF?text=Cake' },
      { id: 'p3', name: 'Sandwich de Pollo', price: '5.00', image: 'https://via.placeholder.com/80/3357FF/FFFFFF?text=Sandwich' },
    ],
  };

  const handleChatWithBusiness = () => {
    navigation.navigate('ConsumerChat', { businessId: business.id, businessName: business.name });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: business.image }} style={styles.businessImage} />
        <Text style={styles.businessName}>{business.name}</Text>
        <Text style={styles.businessCategory}>{business.category}</Text>
        <Text style={styles.businessDescription}>{business.description}</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Información de Contacto</Text>
          <Text style={styles.infoText}>Dirección: {business.address}</Text>
          <Text style={styles.infoText}>Teléfono: {business.phone}</Text>
          <Text style={styles.infoText}>Email: {business.email}</Text>
        </View>

        <TouchableOpacity style={styles.chatButton} onPress={handleChatWithBusiness}>
          <Text style={styles.chatButtonText}>Chatear con {business.name}</Text>
        </TouchableOpacity>

        <View style={styles.productsContainer}>
          <Text style={styles.productsTitle}>Productos/Servicios</Text>
          {business.products.map((product) => (
            <View key={product.id} style={styles.productCard}>
              <Image source={{ uri: product.image }} style={styles.productImage} />
              <View style={styles.productDetails}>
                <Text style={styles.productName}>{product.name}</Text>
                <Text style={styles.productPrice}>${product.price}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  businessImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  businessName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  businessCategory: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
    textAlign: 'center',
  },
  businessDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  chatButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 20,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productsContainer: {
    width: '100%',
  },
  productsTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2.22,
    elevation: 3,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
  },
});

export default ConsumerBusinessDetailScreen;