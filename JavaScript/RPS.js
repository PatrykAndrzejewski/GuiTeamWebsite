//DOm Elements
const playerChoiceDisplay = document.getElementById('player-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultDisplay = document.getElementById('result');
const scoreDisplay = document.getElementById('score');
const buttons = document.querySelectorAll('.rps-button'); 
const restartButton = document.getElementById('restart-button');

let playerScore = 0;
let computerScore = 0;
// game choices
const choices = ['rock', 'paper', 'scissors'];

// get the computer's random choice
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// figure out who won
function determineWinner(playerSelection, computerSelection) {
    // if choices are the same it's a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!"; 
    // player win conditions
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        return 'You win!';
    // computer wins
    } else {
        computerScore++;
        return 'Computer wins!';
    }
}

// update what the user sees
function updateUI(playerSelection, computerSelection, result) {
    playerChoiceDisplay.textContent = `You chose: ${playerSelection}`;
    computerChoiceDisplay.textContent = `Computer chose: ${computerSelection}`;
    resultDisplay.textContent = result;
    scoreDisplay.textContent = `Score - You: ${playerScore} Computer: ${computerScore}`;
}

// handle a players choice
function handlePlayerChoice(event) {
    const playerSelection = event.target.id; 
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);
    updateUI(playerSelection, computerSelection, result);
}

// reset the game
function restartGame() {
    playerScore = 0;
    computerScore = 0;
    playerChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
    resultDisplay.textContent = 'Make a move...';
    scoreDisplay.textContent = 'Score - You: 0 Computer: 0';
}

// add click listeners to all choice buttons
buttons.forEach(button => {
    button.addEventListener('click', handlePlayerChoice);
});

// add click listener for restart button
if (restartButton) { 
    restartButton.addEventListener('click', restartGame);
}

// initial game setup
resultDisplay.textContent = 'Make your move!';
scoreDisplay.textContent = 'Score - You: 0 Computer: 0';