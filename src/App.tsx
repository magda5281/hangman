import { useState } from 'react';
import words from './wordList.json';
import HangmanDrawing from './components/hangmanDrawing';
import HangmanWord from './components/hangmanWord';
import Keyboard from './components/keyboard';
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  console.log(wordToGuess);
  const [guessedLetters, setGuessedLetters] = useState([]);

  return (
    <section className="hangman_main">
      <h2>Loose Win </h2>
      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />
    </section>
  );
}

export default App;
