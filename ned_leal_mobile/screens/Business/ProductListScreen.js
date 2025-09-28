import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image } from 'react-native';
import { GlobalStyles, Colors, FontSizes, Fonts } from '../../constants/Styles'; // Corregido
import CustomButton from '../../components/CustomButton';

const products = [
  {
    id: '1',
    name: 'Pizza Margarita',
    description: 'Clásica pizza con tomate, mozzarella y albahaca.',
    price: '15.000',
    image: 'https://via.placeholder.com/100', // Placeholder image
  },
  {
    id: '2',
    name: 'Hamburguesa Clásica',
    description: 'Carne de res, lechuga, tomate, cebolla y queso.',
    price: '18.000',
    image: 'https://via.placeholder.com/100', // Placeholder image
  },
  {
    id: '3',
    name: 'Ensalada César',
    description: 'Lechuga romana, crutones, queso parmesano y aderezo César.',
    price: '12.000',
    image: 'https://via.placeholder.com/100', // Placeholder image
  },
];

const ProductListScreen = ({ navigation }) => {
  const renderProductItem = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <View style={styles.cardActions}>
          <CustomButton
            title="Editar"
            onPress={() => console.log('Editar Producto', item.id)}
            style={styles.cardButton}
          />
          <CustomButton
            title="Eliminar"
            onPress={() => console.log('Eliminar Producto', item.id)}
            style={styles.cardButton}
          />
        </View>
      </View>
    </View>
  );

  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={GlobalStyles.headerContainer}>
        <Text style={GlobalStyles.screenTitle}>Listado de Productos</Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />

      <CustomButton
        title="Agregar Nuevo Producto"
        onPress={() => console.log('Agregar Nuevo Producto')}
        style={styles.addButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productList: {
    padding: 20,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
    color: Colors.primary,
    marginBottom: 5,
  },
  productDescription: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.small,
    color: Colors.textGray,
    marginBottom: 5,
  },
  productPrice: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
    color: Colors.secondary,
    marginBottom: 10,
  },
  cardActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  cardButton: {
    flex: 1,
    marginHorizontal: 5,
  },
  addButton: {
    margin: 20,
  },
});

export default ProductListScreen;