import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CustomButton = ({title, buttonColor, titleColor, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: buttonColor}]}
      onPress={onPress}>
      <Text style={[styles.title, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    borderRadius: 10,
    width: '31%',
    flex: '1',
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
});

export default CustomButton;
