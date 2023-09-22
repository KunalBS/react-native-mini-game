import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title';
import Colors from '../constants/colors';
import CustomButton from '../components/CustomButton';
import StartGameScreen from './StartGameScreen';

const GameOverScreen = ({ pickedNumber, guessedRounds, newGame, setNewGame }) => {

    const handleChange = () => {
        setNewGame(true)
    }
    return (
        <View style={styles.screenContainer}>
            <Title value={'Game Over !'} />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.outerText}>Your phone needed <Text style={styles.summaryText}>{guessedRounds?.length}</Text> rounds to guess the number <Text style={styles.summaryText}>{pickedNumber}</Text></Text>
            <CustomButton onPress={handleChange}>Start New Game</CustomButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        padding: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.secondary,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 20,
        color: Colors.primary,
        fontWeight: 'bold'
    },
    outerText: {
        fontSize: 12,
        marginVertical: 24
    }
})