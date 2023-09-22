import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Card = ({children}) => {
  return (
    <View style={styles.cardContainer}>
        {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        // flex: 1,
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#72063c',
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center'
    },
})