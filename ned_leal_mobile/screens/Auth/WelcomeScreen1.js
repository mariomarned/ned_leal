import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles, Colors, FontSizes, Spacing, Fonts } from '../../constants/Styles';
import CustomButton from '../../components/CustomButton';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

const WelcomeScreen1 = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Gana con cada dinámica y sin complique!</Text>
        <Text style={styles.subtitle}>Nunca fue tan fácil ganar recompensas de los negocios, no mas formularios y procesos complicados.</Text>
        <View style={styles.imageContainer}>
          {/* Placeholder for image */}
          <Svg width="300" height="300" viewBox="0 0 300 300">
            <Rect width="300" height="300" fill="#E0E0E0"/>
            <SvgText x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontSize="24" fill="#333333">Welcome 1 Placeholder</SvgText>
          </Svg>
        </View>
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
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
  },
  title: {
    fontSize: FontSizes.xxl,
    fontFamily: Fonts.nunitoBold,
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSizes.md,
    fontFamily: Fonts.nunito,
    color: Colors.text,
    textAlign: 'center',
    marginBottom: Spacing.lg,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    width: '80%',
  },
});

export default WelcomeScreen1;