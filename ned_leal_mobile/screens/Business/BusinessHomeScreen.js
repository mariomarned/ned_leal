import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { GlobalStyles, Colors, FontSizes, Spacing } from '../../constants/Styles';

const BusinessHomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/icon.png')} // Replace with actual business logo
          style={styles.profileImage}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.businessName}>Tienda don Fidel</Text>
          <TouchableOpacity onPress={() => navigation.navigate('BusinessInfo')}>
            <Text style={styles.businessInfoLink}>Ir a info de tu negocio</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={GlobalStyles.h2}># de clientes que te siguen</Text>
        <View style={styles.metricsContainer}>
          <View style={styles.metricItem}>
            <Image
              source={require('../../assets/icon.png')} // Replace with actual icon
              style={styles.metricIcon}
            />
            <Text style={styles.metricNumber}>333</Text>
          </View>
          <View style={styles.metricItem}>
            <Text style={styles.metricLabel}>NPS</Text>
            <Text style={styles.metricNumber}>90</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={GlobalStyles.h2}>Aliados comerciales</Text>
        <View style={styles.alliesContainer}>
          <View style={styles.allyItem}>
            <Image
              source={require('../../assets/icon.png')} // Replace with actual ally logo
              style={styles.allyImage}
            />
            <Text style={styles.allyName}>Tienda don Fidel</Text>
          </View>
          <View style={styles.allyItem}>
            <Image
              source={require('../../assets/icon.png')} // Replace with actual ally logo
              style={styles.allyImage}
            />
            <Text style={styles.allyName}>EDS Florida</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={GlobalStyles.h2}>Entrega recompensas</Text>
        <TouchableOpacity style={styles.rewardButton} onPress={() => console.log('Buscar por id o nombre')}>
          <Text style={styles.rewardButtonText}>Buscar por id o nombre</Text>
          <Image
            source={require('../../assets/icon.png')} // Replace with actual search icon
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: Spacing.medium,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.large,
    backgroundColor: Colors.magenta,
    padding: Spacing.medium,
    borderRadius: Spacing.small,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: Spacing.medium,
  },
  headerTextContainer: {
    flex: 1,
  },
  businessName: {
    ...GlobalStyles.h2,
    color: Colors.white,
  },
  businessInfoLink: {
    ...GlobalStyles.bodyText,
    color: Colors.white,
    textDecorationLine: 'underline',
  },
  section: {
    marginBottom: Spacing.large,
  },
  metricsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Spacing.medium,
  },
  metricItem: {
    alignItems: 'center',
  },
  metricIcon: {
    width: 50,
    height: 50,
    marginBottom: Spacing.small,
  },
  metricNumber: {
    ...GlobalStyles.h1,
    color: Colors.magenta,
  },
  metricLabel: {
    ...GlobalStyles.bodyText,
    color: Colors.darkGray,
  },
  alliesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Spacing.medium,
  },
  allyItem: {
    alignItems: 'center',
  },
  allyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: Spacing.small,
  },
  allyName: {
    ...GlobalStyles.bodyText,
    color: Colors.darkGray,
  },
  rewardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.yellow,
    padding: Spacing.medium,
    borderRadius: Spacing.small,
    marginTop: Spacing.medium,
  },
  rewardButtonText: {
    ...GlobalStyles.bodyText,
    fontWeight: 'bold',
    color: Colors.darkGray,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
});

export default BusinessHomeScreen;