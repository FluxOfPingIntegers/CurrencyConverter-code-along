import React, { useState, useContext } from "react";
import { 
  Text, 
  View, 
  StyleSheet, 
  StatusBar, 
  Image, 
  Dimensions, 
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { format } from 'date-fns';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import { ConversionContext } from '../util/ConversionContext';


export default ({ navigation }) => {
  const { 
    baseCurrency, 
    quoteCurrency, 
    swapCurrencies,
    date,
    rates,
    isLoading,
   } = useContext(ConversionContext);

  const [value, setValue] = useState('100')

  const conversionRate = rates[quoteCurrency];

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue}/>
      <ScrollView scrollEnabled={scrollEnabled}>
          <SafeAreaView style={styles.header} >
            <TouchableOpacity onPress={() => navigation.push("Options")}>
              <Entypo name="cog" size={32} color={colors.white} />
            </TouchableOpacity>
          </SafeAreaView>

          <View style={styles.content}>
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
            {isLoading ? (
              <ActivityIndicator color={colors.white} size="large" />
            ) : (
              <>
                <View>
                  <ConversionInput 
                    text={baseCurrency} 
                    value={value}
                    onButtonPress={() => 
                      navigation.push("CurrencyList", { 
                        title: 'Base Currency', 
                        isBaseCurrency: true,
                      })
                    } 
                    keyboardType="numeric"
                    onChangeText={text => setValue(text)}
                  />
            
                  <ConversionInput 
                    text={quoteCurrency}
                    value={
                      value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
                    }
                    editable={false}
                    onButtonPress={() => 
                      navigation.push("CurrencyList", { 
                        title: 'Quote Currency',
                        isBaseCurrency: false,
                      })
                    } 
                  />
              </View>
              <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
                  date && format(new Date(date), 'MMMM do, yyyy')
                }`}
              </Text>
        
              <Button text="Reverse Currencies" onPress={() => swapCurrencies()} />
            </>
            )}
          <KeyboardSpacer 
            onToggle={(visible) => setScrollEnabled(visible)} 
          />
          </View>
      </ScrollView>
    </View>
  )
}

const screen = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  content: {
    paddingTop: screen.height * 0.025,
  },
  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
  },
  inputContainer: {
    marginBottom: 10,
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