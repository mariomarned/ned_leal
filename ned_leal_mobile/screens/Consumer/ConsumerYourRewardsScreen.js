import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ConsumerYourRewardsScreen = () => {
  const rewards = [
    {
      id: '1',
      name: 'Descuento del 20%',
      description: 'Válido en tu próxima compra en la tienda X',
      image: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Reward1',
      expires: '31/12/2023',
    },
    {
      id: '2',
      name: 'Café Gratis',
      description: 'Canjeable en cualquier sucursal de la cafetería Y',
      image: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Reward2',
      expires: '15/01/2024',
    },
    {
      id: '3',
      name: 'Puntos Dobles',
      description: 'En todas tus compras durante el mes de Enero',
      image: 'https://via.placeholder.com/150/008000/FFFFFF?text=Reward3',
      expires: '31/01/2024',
    },
  ];

  const renderRewardCard = (reward) => (
    <TouchableOpacity key={reward.id} style={styles.rewardCard}>
      <Image source={{ uri: reward.image }} style={styles.rewardImage} />
      <View style={styles.rewardDetails}>
        <Text style={styles.rewardName}>{reward.name}</Text>
        <Text style={styles.rewardDescription}>{reward.description}</Text>
        <Text style={styles.rewardExpires}>Expira: {reward.expires}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Tus Premios</Text>
        {rewards.length > 0 ? (
          rewards.map(renderRewardCard)
        ) : (
          <Text style={styles.noRewardsText}>Aún no tienes premios. ¡Sigue comprando para ganar!</Text>
        )}
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  rewardCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.1)',
  },
  rewardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 15,
  },
  rewardDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  rewardName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  rewardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  rewardExpires: {
    fontSize: 12,
    color: '#999',
  },
  noRewardsText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 50,
  },
});

export default ConsumerYourRewardsScreen;