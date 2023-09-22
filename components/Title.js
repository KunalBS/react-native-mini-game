import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Title = ({value}) => {
  return (
    <View>
      <Text style={styles.title}>{value}</Text>
    </View>
  )
}

export default Title;

const styles = StyleSheet.create({
    title: {
        // fontFamily: 'open-sans-bold',
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})