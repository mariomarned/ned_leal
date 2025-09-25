import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { GlobalStyles } from '../../constants/Styles';

const AboutNEDScreen = ({ navigation }) => {
  return (
    <ScrollView style={GlobalStyles.container}>
      <View style={GlobalStyles.innerContainer}>
        <Text style={GlobalStyles.title}>Acerca de NED</Text>

        <Text style={styles.paragraph}>
          NED es una plataforma innovadora diseñada para conectar negocios locales con sus clientes a través de dinámicas interactivas y recompensas.
        </Text>
        <Text style={styles.paragraph}>
          Nuestra misión es fortalecer la economía local, fomentar la lealtad del cliente y proporcionar a los negocios herramientas poderosas para crecer y prosperar.
        </Text>
        <Text style={styles.paragraph}>
          Con NED, los clientes pueden descubrir nuevas ofertas, participar en emocionantes dinámicas y ganar recompensas exclusivas, mientras que los negocios pueden aumentar su visibilidad, atraer nuevos clientes y fidelizar a los existentes.
        </Text>

        <CustomButton
          title="Volver al Inicio"
          onPress={() => navigation.navigate('BusinessHome')}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    ...GlobalStyles.bodyText,
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default AboutNEDScreen;