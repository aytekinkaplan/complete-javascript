let randomNumber;
let maxNumber = 100; // Default max number is 100 for easy level

const guessInput = document.querySelector(".guess-input");
const guessBtn = document.querySelector(".guess-btn");
const message = document.querySelector(".message");

// Select level for the game
const levelEasy = document.querySelector(".level-easy");
const levelHard = document.querySelector(".level-hard");

// Function to reset the game based on the difficulty level
function resetGame() {
  randomNumber = Math.trunc(Math.random() * maxNumber) + 1;
  guessInput.value = "";
  message.textContent = "";
  document.body.style.backgroundColor = "#222";
  guessBtn.textContent = "Guess";
  guessInput.setAttribute("max", maxNumber); // Update the max attribute in input
}

// Easy level setup (range: 1-100)
levelEasy.addEventListener("click", function () {
  maxNumber = 100;
  resetGame();
  message.textContent = "You are in Easy mode. Guess between 1 and 100!";
});

// Hard level setup (range: 1-500)
levelHard.addEventListener("click", function () {
  maxNumber = 500;
  resetGame();
  message.textContent = "You are in Hard mode. Guess between 1 and 500!";
});

// Guess the number logic
guessBtn.addEventListener("click", guessNumber);

function guessNumber() {
  let guess = Number(guessInput.value);
  if (!guess || guess < 1 || guess > maxNumber) {
    message.textContent = `Please enter a valid number between 1 and ${maxNumber}!`;
  } else if (guess === randomNumber) {
    message.textContent = "Correct Number! Well done!";
    document.body.style.backgroundColor = "#60b347";
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again!";
  } else {
    message.textContent = "Too low! Try again!";
  }
}

// Allow "Enter" key to submit the guess
guessInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    guessNumber();
  }
});

// Initialize the game in easy mode by default
resetGame();
