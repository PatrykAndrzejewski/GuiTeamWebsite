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
