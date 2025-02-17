# Hangman Game

Deployed to Vercel

## 🔗 Links

- [Live Project](https://hangman-zeta-drab.vercel.app/)

## Description

This is a fully responsive Hangman game built using **React**, **TypeScript**, and **Vite**. The game randomly selects a word, and the player must guess the word one letter at a time before making 6 incorrect guesses.

## Features

- **Interactive keyboard**: Clickable on-screen keyboard & physical keyboard support
- **Win/Loss Detection**: Detects when the user wins or loses
- **Dynamic Word Selection**: Picks a random word from `wordList.json`
- **Responsive Design**: Scales the Hangman drawing and keyboard layout for mobile screens
- **Restart Game**: Press `Enter` to restart after win/loss

## Technologies Used

- **React**: Component-based UI
- **TypeScript**: Type safety
- **Vite**: Fast development environment
- **CSS Modules & Media Queries**: Ensures a responsive UI

## How to Play

1. Guess a letter by clicking a button or pressing a key.
2. If the letter is in the word, it will appear in the correct position.
3. If the letter is incorrect, a part of the hangman will be drawn.
4. The game ends when:
   - The player guesses all letters correctly (WIN 🎉).
   - The player makes 6 incorrect guesses (LOSE 💀).
5. Press `Enter` to start a new game after winning or losing.

## Responsive Design

### **Scaling Hangman Drawing**

- The game automatically adjusts for smaller screens (`<520px`) using `@media` queries in CSS.
- `transform: scale(0.6)` is applied to shrink the Hangman drawing on smaller screens .

### **Adaptive Keyboard Layout**

- Uses `grid-template-columns: repeat(auto-fit, minmax(50px, 1fr))` to adjust keyboard button sizes dynamically.

## Customization

- **Change word list**: Modify `wordList.json` to include your own words.
- **Update styles**: Edit `Keyboard.module.css` or other component styles.
- **Increase difficulty**: Modify `const isLoser = incorrectLetters.length >= 6;` in `App.tsx` to change the max number of mistakes allowed.

## License

This project is open-source and available under the MIT License.

## Acknowledgments

- Inspired by traditional Hangman games
- Developed using React and TypeScript

Enjoy playing Hangman! 🚀
