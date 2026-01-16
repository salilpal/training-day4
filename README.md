# Simple Number Guessing Game 🎲

A lightweight, interactive browser game built with vanilla JavaScript. The computer generates a random secret number, and the player must guess it using logic and feedback.

## 📖 How It Works

1.  The game generates a **random number between 1 and 10**.
2.  You will be prompted to enter a guess.
3.  The game provides feedback via alerts:
    - **"Too high!"** - You need to guess a lower number.
    - **"Too Low!"** - You need to guess a higher number.
    - **"Correct! You Win"** - You found the secret number.
4.  The game loops continuously until you guess the correct number.

## 🚀 Live Demo

You can play the game directly in your browser here:
**[https://salilpal.github.io/training-day4/]**

## 🛠️ Technologies Used

- **HTML5:** Structure of the page.
- **JavaScript:** Game logic, including:
  - `Math.random()` for generating the secret number.
  - `do...while` loops to keep the game running until a win.
  - `prompt()` and `alert()` for user interaction.

## 📂 Project Structure

```text
/
├── index.html    # Entry point (loads the script)
├── project.js    # Contains the game logic
└── README.md     # Project documentation
```
