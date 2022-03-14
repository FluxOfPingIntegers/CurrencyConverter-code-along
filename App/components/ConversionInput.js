import React from 'react';
import { TouchableOpacity, TextInput, View, StyleSheet, Text } from "react-native"

import colors from '../constants/colors';

export const ConversionInput = ({ 
  text,  
  onButtonPress,
  ...props
}) => {
  const containerStyles = [styles.container];  
  if (props.editable === false) {
    containerStyles.push(styles.containerDisabled)
  }

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
      <TextInput 
        style={styles.input} 
        {...props}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    flexDirection: 'row'
  },
  button: {
    padding: 15,
    borderRightColor: colors.border,
    borderRightWidth: 1
  },
  buttonText: {
    fontSize: 18,
    color: colors.blue,
    fontWeight: "bold"
  },
  containerDisabled: {
    backgroundColor: colors.offWhite
  },
  input: {
    flex: 1,
    padding: 10,
    color: colors.textLight,
  },
})