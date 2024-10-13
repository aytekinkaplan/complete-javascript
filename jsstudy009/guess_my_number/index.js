"use strict";
// Global değişkenler
let randomNumber;
let maxNumber = 100;
let attempts = 10;
let bestScore = Infinity;

// HTML elementlerini seç
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");

const guessInput = document.querySelector(".guess-input");
const guessBtn = document.querySelector(".guess-btn");
const message = document.querySelector(".message");
const attemptsLeft = document.getElementById("attempts-left");
const currentScoreDisplay = document.getElementById("current-score");
const bestScoreDisplay = document.getElementById("best-score");
const minRangeDisplay = document.getElementById("min-range");
const maxRangeDisplay = document.getElementById("max-range");

const levelEasy = document.querySelector(".level-easy");
const levelHard = document.querySelector(".level-hard");
const restartBtn = document.querySelector(".restart-btn");

// Başlangıç ekranında zorluk seviyesi seç
levelEasy.addEventListener("click", function () {
  maxNumber = 100;
  attempts = 10;
  startGame();
});

levelHard.addEventListener("click", function () {
  maxNumber = 500;
  attempts = 5;
  startGame();
});

// Oyunu başlat
function startGame() {
  randomNumber = Math.trunc(Math.random() * maxNumber) + 1;
  guessInput.value = "";
  message.textContent = "";
  minRangeDisplay.textContent = 1;
  maxRangeDisplay.textContent = maxNumber;
  attemptsLeft.textContent = attempts;
  switchScreen(gameScreen);
}

// Tahmin butonuna tıklandığında
guessBtn.addEventListener("click", function () {
  let guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > maxNumber) {
    message.textContent = `Please enter a valid number between 1 and ${maxNumber}!`;
    return;
  }

  attempts--;
  attemptsLeft.textContent = attempts;

  if (guess === randomNumber) {
    endGame(true);
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again.";
  } else {
    message.textContent = "Too low! Try again.";
  }

  if (attempts === 0) {
    endGame(false);
  }
});

// Oyunun bitişini işle
function endGame(win) {
  if (win) {
    message.textContent = "Correct! You've won!";
    let currentScore = 10 - attempts;
    currentScoreDisplay.textContent = currentScore;

    if (currentScore < bestScore) {
      bestScore = currentScore;
      bestScoreDisplay.textContent = bestScore;
    }
  } else {
    message.textContent = "You've lost! No attempts left.";
  }

  switchScreen(endScreen);
}

// Yeniden başlat
restartBtn.addEventListener("click", function () {
  switchScreen(startScreen);
});

// Ekranlar arasında geçiş yap
function switchScreen(screen) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.remove("active"));
  screen.classList.add("active");
}
