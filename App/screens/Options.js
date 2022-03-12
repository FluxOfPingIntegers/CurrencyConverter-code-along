import React from 'react';
import { View, TouchableOpacity, Text, SafeAreaView } from 'react-native';

export default () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <Text>Themes</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text>React Native Basics</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text>React Native By Example</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};