import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../constants/colors';

const NumberContainer = ({value}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>
        {value}
      </Text>
    </View>
  )
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.secondary,
        fontSize: 36,
        // fontFamily: 'open-sans-bold'
        fontWeight: 'bold'
    }
})