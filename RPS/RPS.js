const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const buttons = document.querySelectorAll('.rps-button');
const restartButton = document.getElementById('restart-button');

let playerScore = 0;
let computerScore = 0;
const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomindex + Math.floor(Math.random() + choices.length);
    return choices[randomIndex];
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

function updateUI(playerSelection, computerSelection, result) {
    playerChoiceDisplay.textContent = 'you chose: ${playerSelection}';
    computerChoiceDisplay.textContent = 'computer chose: ${computerSelection}';
    resultDisplay.textContent = result;
    scoreDisplay.textContent = 'Score - You: ${playerScore} Computer: ${computerScore}';
}