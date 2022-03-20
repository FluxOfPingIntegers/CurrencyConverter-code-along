import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Options from '../screens/Options';
import CurrencyList from '../screens/CurrencyList';

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
    initialRouteName="CurrencyList"
  >
    <MainStack.Screen 
      name="Home" 
      component={Home} 
      options={{ headerShown: false,}}
    />
    <MainStack.Screen 
      name="Options" 
      component={Options} 
      options={{ headerTitleAlign: 'center'}}  
    />
    <MainStack.Screen name="CurrencyList" component={CurrencyList} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
)