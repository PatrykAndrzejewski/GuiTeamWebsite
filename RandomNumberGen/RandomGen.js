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

function checkGuess() {
    if (!gameActive) {
        return; 
    }

    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < minNum || userGuess > maxNum) {
        messageDisplay.textContent = `Please enter a valid number between ${minNum} and ${maxNum}.`;
        return;
    }

    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    if (userGuess === randomNumber) {
        messageDisplay.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        gameActive = false;
        guessInput.disabled = true;
        submitGuessButton.disabled = true;
        restartButton.style.display = 'block'; //restart button shows again
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = 'Too low! Try again.';
    } else {
        messageDisplay.textContent = 'Too high! Try again.';
    }

    guessInput.value = ""; //clears input
}

submitGuessButton.addEventListener('click', checkGuess);

submitGuessButton.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});

restartButton.addEventListener('click', startNewGame);

startNewGame(); //starts game when page is loaded
