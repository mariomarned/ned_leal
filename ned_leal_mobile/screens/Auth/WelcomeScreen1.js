import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles, Colors, FontSizes, Spacing, Fonts } from '../../constants/Styles';
import CustomButton from '../../components/CustomButton';
// import Svg, { Rect, Text as SvgText } from 'react-native-svg'; // Eliminar esta línea si ya no se usa Svg

const WelcomeScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <Image
        source={require('../../assets/images/Auth/Ellipse_2.png')}
        style={styles.topBackgroundImage}
      />
      <Image
        source={require('../../assets/images/Auth/logo_pacman_ NED.png')}
        style={styles.bottomLeftBackgroundImage}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Gana con cada dinámica y sin complique!</Text>
        <Text style={styles.subtitle}>Nunca fue tan fácil ganar recompensas de los negocios, no mas formularios y procesos complicados.</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Auth/welcome1_image.png')} // Ruta de la nueva imagen
            style={styles.image}
          />
        </View>
        <Text style={[GlobalStyles.bodyText, styles.rightAlignedText]}>Y serán mas...</Text> {/* Nuevo texto con estilo bodyText y alineado a la derecha */}
        <CustomButton
          title="SIGUIENTE"
          onPress={() => navigation.navigate('Welcome2')}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomLeftBackgroundImage: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 150,
    height: 150,
    resizeMode: 'contain',
    zIndex: -1,
  },
  topBackgroundImage: {
    position: 'absolute',
    top: 0, // Vuelve a ubicar la imagen en la parte superior
    // left: 0, // Elimina la propiedad left
    width: '160%', // Estira la imagen un 40% horizontalmente
    height: 200, // Altura de la imagen de fondo superior
    resizeMode: 'cover',
    zIndex: -1, // Asegura que esté en el fondo
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.medium,
    // paddingTop: 200, // Ajusta el padding superior para que el contenido no se superponga con la imagen de fondo
  },
  title: {
    ...GlobalStyles.h1, // Aplica los estilos de H1
    textAlign: 'center', // Mantiene la alineación central
    marginBottom: Spacing.sm, // Mantiene el margen inferior
  },
  subtitle: {
    ...GlobalStyles.body, // Aplica los estilos de H2
    textAlign: 'center', // Mantiene la alineación central
    marginBottom: Spacing.lg, // Mantiene el margen inferior
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
    height: 350, // Aumenta la altura del contenedor
  },
  image: {
    width: 350, // Aumenta el ancho de la imagen
    height: 350, // Aumenta la altura de la imagen
    resizeMode: 'contain',
  },
  button: {
    width: '20%',
    alignSelf: 'flex-end',
  },
  rightAlignedText: {
    textAlign: 'right',
    width: '80%', // Asegura que el texto ocupe el mismo ancho que el botón para que la alineación sea efectiva
    marginBottom: Spacing.sm, // Añade un margen inferior para separarlo del botón
  },
});

export default WelcomeScreen1;