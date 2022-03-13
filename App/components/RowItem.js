import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

import colors from '../constants/colors';

export const RowItem = ({ text, rightIcon, onPress }) => {
  return (
    <TouchableOpacity style={styles.row} onPress={onPress}>
    <Text style ={styles.text}>{text}</Text>
    {rightIcon}
  </TouchableOpacity>
  )
}

export const RowSeperator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
      },
    text: {
      fontSize: 16,
      color: colors.text,
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20,
      },
});