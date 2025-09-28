import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { GlobalStyles, Colors, FontSizes, Fonts } from '../../constants/Styles'; // Corregido
import CustomButton from '../../components/CustomButton';

const followersData = [
  { id: '1', name: 'Juan Pérez', points: 150, lastReward: 'Café Gratis' },
  { id: '2', name: 'María García', points: 230, lastReward: 'Descuento 10%' },
  { id: '3', name: 'Carlos López', points: 80, lastReward: 'Ninguna' },
  { id: '4', name: 'Ana Martínez', points: 300, lastReward: 'Producto Gratis' },
];

const FollowersAndRewardsScreen = ({ navigation }) => {
  const renderFollowerItem = ({ item }) => (
    <View style={styles.followerCard}>
      <View style={styles.followerInfo}>
        <Text style={styles.followerName}>{item.name}</Text>
        <Text style={styles.followerPoints}>Puntos: {item.points}</Text>
        <Text style={styles.followerReward}>Última Recompensa: {item.lastReward}</Text>
      </View>
      <CustomButton
        title="Entregar Recompensa"
        onPress={() => console.log('Entregar Recompensa a', item.name)}
        style={styles.rewardButton}
      />
    </View>
  );

  return (
    <View style={GlobalStyles.screenContainer}>
      <View style={GlobalStyles.headerContainer}>
        <Text style={GlobalStyles.screenTitle}>Seguidores y Recompensas</Text>
      </View>

      <FlatList
        data={followersData}
        renderItem={renderFollowerItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.followersList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  followersList: {
    padding: 20,
  },
  followerCard: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
  },
  followerInfo: {
    flex: 1,
    marginRight: 10,
  },
  followerName: {
    fontFamily: Fonts.bold,
    fontSize: FontSizes.medium,
    color: Colors.primary,
    marginBottom: 5,
  },
  followerPoints: {
    fontFamily: Fonts.regular,
    fontSize: FontSizes.small,
    color: Colors.textGray,
    marginBottom: 5,
  },
  followerReward: {
    fontFamily: Fonts.light,
    fontSize: FontSizes.small,
    color: Colors.textGray,
  },
  rewardButton: {
    width: 120,
    height: 40,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
});

export default FollowersAndRewardsScreen;