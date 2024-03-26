const cells = document.querySelectorAll('.cell');
const refreshBtn = document.getElementById('refreshBtn');
const winnerBtn = document.getElementById('winnerBtn');
const winnerName = document.getElementById('winnerName');

let currentPlayer = 'Player1';
let boardState = ['', '', '', '', '', '', '', '', ''];
let winner = false;

const checkWinner = () => {
  const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], 
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c]) {
      winner = true;
      winnerName.textContent = currentPlayer;
      winnerBtn.disabled = false;
      break;
    }
  }
};

const handleCellClick = (index) => {
  if (!boardState[index] && !winner) {
    boardState[index] = currentPlayer === 'Player 1' ? 'X' : 'O';
    cells[index].textContent = boardState[index];
    checkWinner();
    currentPlayer = currentPlayer === 'Player 1' ? 'Player 2' : 'Player 1';
  }
};

cells.forEach((cell, index) => {
  cell.addEventListener('click', () => handleCellClick(index));
});

refreshBtn.addEventListener('click', () => {
  boardState = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'Player 1';
  winner = false;
  winnerBtn.disabled = true;
  winnerName.textContent = '';
  cells.forEach(cell => cell.textContent = '');
});
