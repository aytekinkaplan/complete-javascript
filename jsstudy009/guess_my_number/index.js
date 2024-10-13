let randomNumber = Math.trunc(Math.random() * 100) + 1;

const guessInput = document.querySelector(".guess-input");
const guessBtn = document.querySelector(".guess-btn");
const message = document.querySelector(".message");

guessBtn.addEventListener("click", guessNumber);

function guessNumber() {
  let guess = Number(guessInput.value);
  if (!guess) {
    message.textContent = "No number!";
  } else if (guess === randomNumber) {
    message.textContent = "Correct Number!";
    document.body.style.backgroundColor = "#60b347";
  } else if (guess > randomNumber) {
    message.textContent = "Too high! Try again!";
  } else {
    message.textContent = "Too low! Try again!";
  }
}
