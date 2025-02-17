import { useState } from 'react';
import words from './wordList.json';
import HangmanDrawing from './components/hangmanDrawing';
import HangmanWord from './components/hangmanWord';
import Keyboard from './components/keyboard';
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [clickedLetters, setClickedLetters] = useState([]);
  const incorrectLetters = clickedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );
  return (
    <section className="hangman_main">
      <h2>Loose Win </h2>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={clickedLetters} wordToGuess={wordToGuess} />
      <Keyboard />
    </section>
  );
}

export default App;
