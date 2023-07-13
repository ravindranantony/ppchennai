// var chance = "player1"
// var player = chance + "'s chance"
// var disabledBtn = 0

// document.getElementById("chance").innerHTML = player


// function check(){
//     var btn1 = document.getElementById("btn1").innerHTML
//     var btn2 = document.getElementById("btn2").innerHTML
//     var btn3 = document.getElementById("btn3").innerHTML
//     var btn4 = document.getElementById("btn4").innerHTML
//     var btn5 = document.getElementById("btn5").innerHTML
//     var btn6 = document.getElementById("btn6").innerHTML
//     var btn7 = document.getElementById("btn7").innerHTML
//     var btn8 = document.getElementById("btn8").innerHTML
//     var btn9 = document.getElementById("btn9").innerHTML
//     var result = document.getElementById(resultText).innerHTML
//     var reset = document.getElementById("reset-btn")

//    if(btn1 === "x" && btn2 === "x" && btn3 === "x"){
//         disable()
//         result.innerHTML = "player 1 won !"
//         reset.style.visibility = "visible"
//         reset.style.visibility = "visible"


//     }
//     else if(btn4 === "x" && btn5 === "x" && btn6 === "x"){
//         disable()
//         result.innerHTML = "player 1 won !"
//         reset.style.visibility = "visible"
//         reset.style.visibility = "visible"
// }
//     else if(btn7 === "x" && btn8 === "x" && btn9 === "x"){
//        disable()
//        result.innerHTML = "player 1 won !"
//        reset.style.visibility = "visible"
//        reset.style.visibility = "visible"
// }
//     else if(btn1 === "x" && btn4 === "x" && btn7 === "x"){
//         disable()
//         result.innerHTML = "player 1 won !"
//         reset.style.visibility = "visible"
//         reset.style.visibility = "visible"
// }
// else if(btn2 === "x" && btn5 === "x" && btn8 === "x"){
//     disable()
//     result.innerHTML = "player 1 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn3 === "x" && btn6 === "x" && btn9 === "x"){
//     disable()
//     result.innerHTML = "player 1 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn1 === "x" && btn5 === "x" && btn9 === "x"){
//     disable()
//     result.innerHTML = "player 1 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn3 === "x" && btn5 === "x" && btn7 === "x"){
//     disable()
//     result.innerHTML = "player 1 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn1 === "o" && btn2 === "o" && btn3 === "o"){
//     disable()
//     result.innerHTML = "player 2 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn4 === "o" && btn5 === "o" && btn6 === "o"){
//     disable()
//     result.innerHTML = "player 2 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn7 === "o" && btn8 === "o" && btn9 === "o"){
//     disable()
//     result.innerHTML = "player 2 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn1 === "o" && btn4 === "o" && btn7 === "o"){
//     disable()
//     result.innerHTML = "player 2 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn2 === "o" && btn5 === "o" && btn8 === "o"){
//     disable()
//     result.innerHTML = "player 2 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn3 === "o" && btn6 === "o" && btn9 === "o"){
//     disable()
//     result.innerHTML = "player 2 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if(btn3 === "o" && btn5 === "o" && btn7 === "o"){
//     disable()
//     result.innerHTML = "player 2 won !"
//     reset.style.visibility = "visible"
//     reset.style.visibility = "visible"
// }
// else if (disabledBtn === 9){
//     result.innerHTML = "Match Draw ! !"
//     result.style.visibility = "visible"
//     result.style.visibility = "visible"
// }

    


// function disableBtn(id){ 
//     if (chance === "player1") {
//         document.getElementById(id).disabled =true 
//         document.getElementById(id).innerHTML = "x"
//         chance = "player 2"
//         player = chance + "'s chance"
//         document.getElementById("chance").innerHTML = player
//         disabledBtn = disableBtn+1
//         check()

//     }


// else if (chance === "player2") {
//     document.getElementById(id).disabled =true 
//     document.getElementById(id).innerHTML = "o"
//     chance = "player 1"
//     document.getElementById("chance").innerHTML = player
//     disabledBtn = disableBtn+1
//     check()
// }

// function disable(){
//     for(var i = 1; i < 10; i++){
//         var id = "btn" + i
//         document.getElementById(id).disabled = true
//         document.getElementById("reset-btn").style.visibility ="visible"
//         document.getElementById("resultText").style.visibility ="visible"
//     }
// }
// function reset(){
//     for(var i = 1; i < 10; i++){
//         var id = "btn" + i
//         document.getElementById(id).disabled = false
//         document.getElementById(id).innerHTML =""
// }
//      chance = "player 1";
//      player = chance + " 's chance";
//      document.getElementById("chance").innerHTML = player;
//      document.getElementById("reset-btn").style.visibility ="hidden"
//      document.getElementById("resultText").style.visibility ="hidden"
//      disableBtn = 0
// }}}

// Game state variables
let currentPlayer = 'X';
let gameActive = true;
let moves = 0;

// Winning combinations
const winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]              // Diagonals
];

// DOM elements
const buttons = document.querySelectorAll('.btn');
const resetButton = document.getElementById('reset-btn');
const resultText = document.getElementById('resultText');
const chanceText = document.getElementById('chance');

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (gameActive && !button.textContent) {
      // Update the button and game state
      button.textContent = currentPlayer;
      button.classList.add('disabled');
      moves++;
      checkGameStatus();
      togglePlayer();
    }
  });
});

// Reset the game
resetButton.addEventListener('click', resetGame);

// Check the game status after each move
function checkGameStatus() {
  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      buttons[a].textContent === currentPlayer &&
      buttons[b].textContent === currentPlayer &&
      buttons[c].textContent === currentPlayer
    ) {
      // Player wins
      gameActive = false;
      highlightWinningCombination(combination);
      resultText.textContent = `Player ${currentPlayer} wins!`;
      resultText.style.visibility = 'visible';
      break;
    } else if (moves === 9) {
      // Game is a draw
      gameActive = false;
      resultText.textContent = 'It\'s a draw!';
      resultText.style.visibility = 'visible';
      break;
    }
  }
}

// Highlight the winning combination
function highlightWinningCombination(combination) {
  for (let index of combination) {
    buttons[index].classList.add('winner');
  }
}

// Toggle the current player
function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  chanceText.textContent = `Player ${currentPlayer}'s turn`;
}

// Reset the game to the initial state
function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  moves = 0;
  resultText.style.visibility = 'hidden';
  chanceText.textContent = `Player ${currentPlayer}'s turn`;
  buttons.forEach(button => {
    button.textContent = '';
    button.classList.remove('disabled', 'winner');
  });
}

// Initialize the game
resetGame();

// ...Existing JavaScript code...

// Clear the content of all buttons
const clearButton = document.getElementById('clear-btn');
clearButton.addEventListener('click', clearBoard);

function clearBoard() {
  buttons.forEach(button => {
    button.textContent = '';
    button.classList.remove('disabled', 'winner');
  });
  
  // Reset game state
  currentPlayer = 'X';
  gameActive = true;
  moves = 0;
  resultText.style.visibility = 'hidden';
  chanceText.textContent = `Player ${currentPlayer}'s turn`;
}

// ...Existing JavaScript code...
