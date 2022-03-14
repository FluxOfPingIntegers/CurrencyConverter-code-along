

import React from "react";
import { Text, View, StyleSheet, StatusBar, Image, Dimensions } from 'react-native';

import colors from "../constants/colors";


import { ConversionInput } from "../components/ConversionInput";


export default () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue}/>
      <View style={styles.logoContainer}>
        <Image 
          source={require('../assets/images/background.png')} 
          style={styles.logoBackground} 
          resizeMode="contain"
        />
        <Image 
          source={require('../assets/images/logo.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>

      <ConversionInput 
        text="USD" 
        value="123"
        onButtonPress={() => alert("todo!")} 
        onChangeText={text => console.log("text", text)}
        keyboardType="numeric"
      />

      <ConversionInput 
        text="GBP" 
        value="123"
        onButtonPress={() => alert("todo!")} 
        editable={false}
      />

      <Text style={styles.text}>1 USD = 0.77 GBP as of March 13, 2022</Text>

    </View>
  )
}

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.height * 0.45,
  },
  logo: {
    position: 'absolute',
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  text: {
    color: colors.white,
    fontSize: 14,
    textAlign: 'center',
  },
  textHeader: {
    color: colors.white, 
    fontWeight: 'bold',
    fontSize: 30,
    marginVertical: 20,
    textAlign: 'center',
  }
})