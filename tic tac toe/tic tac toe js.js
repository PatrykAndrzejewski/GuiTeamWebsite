let playerO = "O";
let playerX = "X";
let curentPlayer = playerO;
//               0  1  2  3  4  5  6  7  8
let gameBoard = ["","","","","","","","",""];
let gameCells;

window.onload = function() {
    gameCells = document.getElementsByClassName("game-cell");
    for (let celll of gameCells)    {
        celll.addEventListener("click", placeCell);
    }
}

function placeCell() {

    this.innerText = curentPlayer;

    curentPlayer = (curentPlayer == playerO) ? playerX : playerO;
}