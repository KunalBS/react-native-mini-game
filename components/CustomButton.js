import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ children, onPress}) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: '#72063c' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#ddb52f',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    }
})