import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles, Colors, FontSizes, Spacing, Fonts } from '../../constants/Styles';
import CustomButton from '../../components/CustomButton';
import Svg, { Rect, Text as SvgText } from 'react-native-svg';

const WelcomeScreen5 = () => {
  const navigation = useNavigation();

  return (
    <View style={GlobalStyles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Únete a la comunidad NED</Text>
        <Text style={styles.subtitle}>Empieza a disfrutar de todos los beneficios que tenemos para ti.</Text>
        <View style={styles.imageContainer}>
          {/* Placeholder for image */}
          <Svg width="300" height="300" viewBox="0 0 300 300">
            <Rect width="300" height="300" fill="#E0E0E0"/>
            <SvgText x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial" fontSize="24" fill="#333333">Welcome 5 Placeholder</SvgText>
          </Svg>
        </View>
        <CustomButton
          title="NEGOCIO"
          onPress={() => navigation.navigate('Login', { userType: 'business' })}
          style={styles.button}
        />
        <CustomButton
          title="CONSUMIDOR"
          onPress={() => navigation.navigate('Login', { userType: 'consumer' })}
          style={[styles.button, styles.consumerButton]}
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: '45%',
  },
});

export default WelcomeScreen5;