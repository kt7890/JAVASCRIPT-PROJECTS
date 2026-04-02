const cells = document.querySelectorAll('[data-cell]');
const turnText = document.getElementById('turn');
const winnerText = document.getElementById('winner');
const restartBtn = document.getElementById('restart');

let xTurn = true;
let gameOver = false;
let board = Array(9).fill('');

const winningCombinations = [
    [0,1,2],[3,4,5],[6,7,8], // rows
    [0,3,6],[1,4,7],[2,5,8], // columns
    [0,4,8],[2,4,6]          // diagonals
];

function handleClick(e) {
    const cell = e.target;
    const index = Array.from(cells).indexOf(cell);

    if (board[index] !== '' || gameOver) return;

    board[index] = xTurn ? 'X' : 'O';
    cell.textContent = board[index];

    if (checkWin()) {
        winnerText.textContent = `${xTurn ? 'X' : 'O'} Wins! 🎉`;
        gameOver = true;
        return;
    }

    if (board.every(cell => cell !== '')) {
        winnerText.textContent = "It's a Draw! 🤝";
        gameOver = true;
        return;
    }

    xTurn = !xTurn;
    turnText.textContent = `Turn: ${xTurn ? 'X' : 'O'}`;
}

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === (xTurn ? 'X' : 'O'));
    });
}

function restartGame() {
    board.fill('');
    cells.forEach(cell => cell.textContent = '');
    xTurn = true;
    gameOver = false;
    winnerText.textContent = '';
    turnText.textContent = 'Turn: X';
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);
