import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ConsumerAboutNedScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Image
          source={require('../../assets/icon.png')} // Replace with your actual logo path
          style={styles.logo}
        />
        <Text style={styles.title}>Acerca de NED</Text>
        <Text style={styles.paragraph}>
          Bienvenido a NED, tu plataforma integral para conectar negocios locales con consumidores.
          Nuestra misión es fomentar el comercio justo, apoyar a las pequeñas y medianas empresas,
          y ofrecer a los usuarios experiencias de compra únicas y personalizadas.
        </Text>
        <Text style={styles.paragraph}>
          En NED, creemos en el poder de la comunidad. Por eso, hemos diseñado una aplicación
          intuitiva que te permite descubrir tus negocios preferidos, acceder a ofertas exclusivas,
          acumular premios y mantenerte al tanto de las últimas novedades de tus tiendas favoritas.
        </Text>
        <Text style={styles.subtitle}>Nuestra Visión</Text>
        <Text style={styles.paragraph}>
          Ser la plataforma líder en la promoción del comercio local, creando un ecosistema
          donde los negocios prosperen y los consumidores encuentren valor y conveniencia.
        </Text>
        <Text style={styles.subtitle}>Nuestros Valores</Text>
        <Text style={styles.listItem}>• Apoyo al comercio local</Text>
        <Text style={styles.listItem}>• Innovación y tecnología</Text>
        <Text style={styles.listItem}>• Transparencia y confianza</Text>
        <Text style={styles.listItem}>• Experiencia de usuario excepcional</Text>
        <Text style={styles.listItem}>• Sostenibilidad y responsabilidad social</Text>
        <Text style={styles.paragraph}>
          ¡Gracias por ser parte de la comunidad NED!
        </Text>
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#555',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 10,
    textAlign: 'center',
  },
  listItem: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'left',
    width: '100%',
    paddingLeft: 20,
  },
});

export default ConsumerAboutNedScreen;