const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const buttons = document.querySelectorAll('.rps-button');
const restartButton = document.getElementById('restart-button');

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];