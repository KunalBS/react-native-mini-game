import { ImageBackground, SafeAreaView, StyleSheet, } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GameScreen from './screens/GameScreen';
import { useEffect, useState } from 'react';
import GameOverScreen from './screens/GameOverScreen';
const backgroundImg = require("./assets/images/background.png")
import Font from 'expo-font';
// import AppLoading from 'expo-app-loading';


const customFonts = {
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
}

export default function App() {
  const [pickedNumber, setPickedNumber] = useState()
  const [gameIsOver, setIsGameOver] = useState(false);
  const [guessedRounds, setGuessedRounds] = useState([])
  const [newGame, setNewGame] = useState(false)

  const pickedNumberHandler = (number) => {
    setPickedNumber(number);
    setIsGameOver(false); 
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>
  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} setIsGameOver={setIsGameOver} isGameOver={gameIsOver} setGuessedRounds={setGuessedRounds} guessedRounds={guessedRounds}/>
  }

  if(gameIsOver && pickedNumber){
    screen= <GameOverScreen pickedNumber={pickedNumber} guessedRounds={guessedRounds} setNewGame={setNewGame} newGame={newGame}/>
  }

  console.log(guessedRounds)

  return (
    <LinearGradient colors={['#72063c', '#ddb52f']} style={styles.rootScreen}>
      <ImageBackground source={backgroundImg} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
 
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    // backgroundColor: '#ddb52f'
  },
  backgroundImage: {
    opacity: 0.15
  }
});
