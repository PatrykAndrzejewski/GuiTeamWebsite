const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restart-button');

let randomNumber;
let attempts = 0;
let gameActive = true;
const minNum = 1;
const maxNum = 100; //open to change number whenever

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    console.log(`Generated random number: ${randomNumber}`); // for testing
}   

function startNewGame() {
    attempts = 0;
    gameActive = true;
    generateRandomNumber();
    messageDisplay.textContent = "Guess a number between 1 - 100";
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
    guessInput.disabled = false;
    submitGuessButton.disabled = false;
    restartButton.style.display = "none";
}
