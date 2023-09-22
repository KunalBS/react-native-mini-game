import { Text, View, TextInput, StyleSheet, Alert } from "react-native"
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Title from "../components/Title";
import Colors from "../constants/colors";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const StartGameScreen = ({ onPickedNumber }) => {
    const [number, setNumber] = useState('')
    const handleNumberChange = (inputNum) => {
        // console.log(inputNum);
        setNumber(inputNum)
    }
    const resetHandler = () => {
        setNumber('')
    }
    const confirmHandler = () => {
        const chosenNumber = parseInt(number)
        if (chosenNumber <= 0 || isNaN(chosenNumber)) {
            Alert.alert("Invalid Number!",
                "Number has to be a Number between 1 and 99",
                [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]
            )
        }
        onPickedNumber(chosenNumber)
    }
    return (
        <View style={styles.screenContainer}>
            <Title value={'Guess My Number'} />
            <Card style={styles.inputContainer}>
                <InstructionText>Enter a Number</InstructionText>
                <TextInput style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardAppearance="dark"
                    inputMode="numeric"
                    onChangeText={handleNumberChange}
                    value={number}
                />
                <View style={styles.btnContainer}>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={resetHandler}>Reset</CustomButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <CustomButton onPress={confirmHandler}>Confirm</CustomButton>
                    </View>
                </View>
            </Card>
        </View>
    )
}

export default StartGameScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    inputContainer: {
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
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 22,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: 'white',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionText: {
        color: Colors.secondary,
        fontSize: 24
    }
})