// get the elements from the DOM
const guessInput = document.getElementById('guess-input');
const submitGuessButton = document.getElementById('submit-guess');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const restartButton = document.getElementById('restart-button');

// the random number
let randomNumber;
let attempts = 0;
let gameActive = true;
const minNum = 1;
const maxNum = 100; //open to change number whenever

// make a new random number
function generateRandomNumber() {
    // calculate a random number
    randomNumber = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
    // show the number in the console for not for display
    console.log(`Generated random number: ${randomNumber}`); // for testing
}   

// set up a new game
function startNewGame() {
    attempts = 0;
    gameActive = true;
    // get a new random number
    generateRandomNumber();
    messageDisplay.textContent = "Guess a number between 1 - 100";
    // show attempts
    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    // clear the input box
    guessInput.value = "";
    guessInput.disabled = false;
    // enable submit button
    submitGuessButton.disabled = false;
    restartButton.style.display = "none";
}

// check the player's guess
function checkGuess() {
    // if game is not active do nothing
    if (!gameActive) {
        return; 
    }

    // get the number from the input box
    const userGuess = parseInt(guessInput.value);

    // check if guess is valid
    if (isNaN(userGuess) || userGuess < minNum || userGuess > maxNum) {
        messageDisplay.textContent = `Please enter a valid number between ${minNum} and ${maxNum}.`;
        return;
    }

    // addattempts
    attempts++;
    attemptsDisplay.textContent = `Attempts: ${attempts}`;

    // if guess is correct
    if (userGuess === randomNumber) {
        // show win message
        messageDisplay.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts!`;
        // game is over
        gameActive = false;
        // disable input
        guessInput.disabled = true;
        // disable submit button
        submitGuessButton.disabled = true;
        // show restart button
        restartButton.style.display = 'block'; //restart button shows again
    // if guess is too low
    } else if (userGuess < randomNumber) {
        messageDisplay.textContent = 'Too low! Try again.';
    // if guess is too high
    } else {
        messageDisplay.textContent = 'Too high! Try again.';
    }

    // clear the input box
    guessInput.value = ""; //clears input
}

// listen for click on submit button
submitGuessButton.addEventListener('click', checkGuess);

//enter key press
guessInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // check the guess
        checkGuess();
    }
});

// listen for click on restart button
restartButton.addEventListener('click', startNewGame);

startNewGame(); //starts game when page is loaded
