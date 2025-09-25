import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../constants/Styles';

const CustomButton = ({ title, onPress, style, textStyle, ...props }) => {
  return (
    <TouchableOpacity style={[GlobalStyles.button, style]} onPress={onPress} {...props}>
      <Text style={[GlobalStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Any additional styles specific to this button component can be added here
});

export default CustomButton;