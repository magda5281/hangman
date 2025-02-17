import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import HangmanDrawing from './components/hangmanDrawing';
import HangmanWord from './components/hangmanWord';
import Keyboard from './components/keyboard';
function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [clickedLetters, setClickedLetters] = useState<string[]>([]);
  const incorrectLetters = clickedLetters.filter(
    (letter) => !wordToGuess.includes(letter),
  );
  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split('')
    .every((letter) => clickedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (clickedLetters.includes(letter)) return;
      if (isLoser) return;
      if (isWinner) return;
      setClickedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [clickedLetters],
  );

  // hook up keyboard with hangman drawing
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key: string = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [clickedLetters]);

  return (
    <section className="hangman_main">
      <h2>
        {isWinner && 'WINNER!!! - refresh to try again'}
        {isLoser && 'Nice try - Refresh to try again'}
      </h2>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={clickedLetters} wordToGuess={wordToGuess} />
      <Keyboard
        disabled={isLoser || isWinner}
        activeLetters={clickedLetters.filter((letter) =>
          wordToGuess.includes(letter),
        )}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </section>
  );
}

export default App;
