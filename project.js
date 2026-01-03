/*
Computer picks a random number between 1–10.
User enters a guess.
If guess is correct → “You win!”.
If guess is wrong → Show “Too high” or “Too low” until correct.

Example code:
let secret = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = prompt("Guess a number between 1 and 10:");
    if (guess == secret) {
        alert("Correct! You win 🎉");
    } else if (guess > secret) {
        alert("Too high! Try again.");
    } else {
        alert("Too low! Try again.");
    }
} while (guess != secret);
*/

let secret = Math.floor(Math.random() * 10) + 1;
let guess;

do {
  guess = prompt("Guess a number between 1 and 10: ");
  if (guess == secret) {
    alert("Correct! You Win");
  } else if (guess > secret) {
    alert("Too high! Try again.");
  } else {
    alert("Too Low! Try Again.");
  }
} while (guess != secret);
