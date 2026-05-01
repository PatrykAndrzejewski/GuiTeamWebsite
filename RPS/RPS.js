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
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"; 
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
    playerChoiceDisplay.textContent = `You chose: ${playerSelection}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerSelection}`;
    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Score - You: ${playerScore} Computer: ${computerScore}`;
}

function handlePlayerChoice(event) {
    const playerSelection = event.target.id; '
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    updateUI(playerSelection, computerSelection, result);
}

function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    resultDisplay.textContent = 'Make a move...';
    scoreDisplay.textContent = 'Score - You: 0 Computer: 0';
}

buttons.forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});

if (restartButton) { 
    restartButton.addEventListener('click', restartGame);
}

resultDisplay.textContent = 'Make your move!';
scoreDisplay.textContent = 'Score - You: 0 Computer: 0';