import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { GlobalStyles, Colors, FontSizes, Fonts } from '../../constants/Styles'; // Corregido
import CustomButton from '../../components/CustomButton';

const YourDynamicsScreen = ({ navigation }) => {
  return (
    <ScrollView style={GlobalStyles.screenContainer}>
      <View style={GlobalStyles.headerContainer}>
        <Text style={GlobalStyles.screenTitle}>Tus Dinámicas</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.infoText}>Aquí puedes ver y gestionar todas tus dinámicas activas e históricas.</Text>
        
        {/* Example Dynamic Card */}
        <View style={styles.dynamicCard}>
          <Text style={styles.dynamicTitle}>Dinámica de Verano</Text>
          <Text style={styles.dynamicDescription}>Descuentos especiales en productos seleccionados durante el verano.</Text>
          <Text style={styles.dynamicDates}>Inicio: 01/06/2024 - Fin: 31/08/2024</Text>
          <View style={styles.cardActions}>
            <CustomButton
              title="Ver Detalles"
              onPress={() => console.log('Ver Detalles')}
              style={styles.cardButton}
            />
            <CustomButton
              title="Editar"
              onPress={() => console.log('Editar Dinámica')}
              style={styles.cardButton}
            />
          </View>
        </View>

        <View style={styles.dynamicCard}>
          <Text style={styles.dynamicTitle}>Promoción de Lanzamiento</Text>
          <Text style={styles.dynamicDescription}>2x1 en todos los productos nuevos por tiempo limitado.</Text>
          <Text style={styles.dynamicDates}>Inicio: 15/05/2024 - Fin: 15/06/2024</Text>
          <View style={styles.cardActions}>
            <CustomButton
              title="Ver Detalles"
              onPress={() => console.log('Ver Detalles')}
              style={styles.cardButton}
            />
            <CustomButton
              title="Editar"
              onPress={() => console.log('Editar Dinámica')}
              style={styles.cardButton}
            />
          </View>
        </View>

        <CustomButton
          title="Crear Nueva Dinámica"
          onPress={() => navigation.navigate('CreateDynamic')}
          style={styles.createButton}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 20,
  },
  infoText: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.small,
    color: Colors.textGray,
    marginBottom: 20,
    textAlign: 'center',
  },
  dynamicCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  dynamicTitle: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
    color: Colors.primary,
    marginBottom: 5,
  },
  dynamicDescription: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.small,
    color: Colors.textGray,
    marginBottom: 10,
  },
  dynamicDates: {
    fontFamily: Fonts.light,
    fontSize: FontSizes.small,
    color: Colors.textGray,
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
  createButton: {
    marginTop: 20,
  },
});

export default YourDynamicsScreen;