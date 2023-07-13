let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let currentPlayer = 'X';
  let gameEnded = false;
  
  function makeMove(row, col) {
    if (board[row][col] === '' && !gameEnded) {
      board[row][col] = currentPlayer;
      document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;
      if (checkWin()) {
        document.getElementById('result').innerHTML += '<h2>Player ' + currentPlayer + ' wins!</h2>';
        document.getElementById('result').style.color="#5cb85c"
        gameEnded = true;
      } else if (checkDraw()) {
        document.getElementById('result').innerHTML += '<h2>It\'s a draw!</h2>';
        document.getElementById('result').style.color="#d9534f"
        gameEnded = true;
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }
  
  function checkWin() {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
        return true; // row win
      }
      if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
        return true; // column win
      }
    }
    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      return true; // diagonal win
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      return true; // diagonal win
    }
    return false;
  }
  
  function checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false; // game still in progress
        }
      }
    }
    return true; // all cells filled, it's a draw
  }
  
  function reset() {
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
    currentPlayer = 'X';
    gameEnded = false;
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
      cells[i].innerText = '';
    }
    const result = document.querySelector('h2');
    if (result) {
      result.remove();
    }
  }
  
  