const gameBoard = document.getElementById('game-board');
const cells = document.querySelectorAll('.game-cell');
const gameStatus = document.getElementById('game-status');
const restartButton = document.getElementById('game-restart');

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], //columns
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], //diagonals
    [2, 4, 6]
];

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    // if cell is full or game is over do nothing
    if (board[clickedCellIndex] !== '' || !gameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // check if someone won or it's a draw
    checkResult();
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const winCondition = winningConditions[i];
        let a = board[winCondition[0]];
        let b = board[winCondition[1]];
        let c = board[winCondition[2]];

        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        gameStatus.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
        return;
    }

    // if no empty cells and no winner it's a draw
    if (!board.includes('')) {
        gameStatus.textContent = "It's a draw!";
        gameActive = false;
        return;
    }

    // switch to the next player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    gameStatus.textContent = `It's ${currentPlayer}'s turn`;
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    gameStatus.textContent = "Player X's turn";
    cells.forEach(cell => cell.textContent = "");
}

//Event Listeners
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
restartButton.addEventListener('click', restartGame);