import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import { GlobalStyles, Colors, FontSizes, Fonts } from '../constants/Styles';

const CustomTextInput = ({ placeholder, value, onChangeText, isMultiline = false, label, ...props }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={[GlobalStyles.textInput, isMultiline && styles.multilineInput]}
        placeholder={placeholder}
        placeholderTextColor={Colors.black}
        value={value}
        onChangeText={onChangeText}
        multiline={isMultiline}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: FontSizes.body,
    fontFamily: Fonts.nunito,
    color: Colors.black,
    marginBottom: 5,
  },
  multilineInput: {
    height: 100, // Adjust as needed for multiline input
    textAlignVertical: 'top',
  },
});

export default CustomTextInput;