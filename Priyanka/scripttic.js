let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameEnded = false;

function makeMove(index) {
  if (gameEnded || board[index] !== '') return;

  board[index] = currentPlayer;
  document.getElementsByClassName('cell')[index].innerText = currentPlayer;

  if (checkWin()) {
    alert(`Player ${currentPlayer} wins!`);
    gameEnded = true;
    return;
  }

  if (checkDraw()) {
    alert("It's a draw!");
    gameEnded = true;
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetBoard() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameEnded = false;

  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}