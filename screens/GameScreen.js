import { View, Text, StyleSheet, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import CustomButton from '../components/CustomButton';
import Card from '../components/Card';
import InstructionText from '../components/InstructionText';
import {Ionicons} from '@expo/vector-icons'

const GameScreen = ({ userNumber, setIsGameOver, isGameOver,guessedRounds, setGuessedRounds}) => {
    const generateRandomBetween = (min, max, exclude) => {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;
        if (rndNum == exclude) {
            return generateRandomBetween(min, max, exclude)
        } else {
            return rndNum
        }
    }
    let minBoundary = 1;
    let maxBoundary = 100;
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [randomNum, setRandomNum] = useState(initialGuess);

    useEffect(() => {
        if (randomNum == userNumber) {
            setIsGameOver(true)
        }
    }, [initialGuess, userNumber, isGameOver])

    const nextGuessHandler = (direction) => {
        if (direction == 'lower' && initialGuess < userNumber || direction == 'greater' && initialGuess > userNumber) {
            Alert.alert('Dont lie!', 'You know this is wrong...', [{
                text: 'Sorry!', style: 'cancel'
            }]);
            return;
        }
        if (direction == 'lower') {
            maxBoundary = initialGuess - 1;
        } else {
            minBoundary = initialGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, initialGuess)
        setRandomNum(newRndNumber)
        setGuessedRounds([...guessedRounds,newRndNumber])
    }
    return (
        <View style={styles.gameContainer}>
            <Title value={'Oponent Input'} />
            <NumberContainer value={randomNum} />
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower ?</InstructionText>
                <View style={styles.btnContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            +
                        </CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            -
                        </CustomButton>
                    </View>
                </View>
            </Card>
            <View>
                <Text>round</Text>
            </View>
        </View>
    )
}

export default GameScreen;

const styles = StyleSheet.create({
    gameContainer: {
        flex: 1,
        padding: 40
    },
    btnContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        marginBottom: 12
    }
})