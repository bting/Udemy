var player1 = document.querySelector("#player1");
var display1 = document.querySelector("#num1");
var player2 = document.querySelector("#player2");
var display2 = document.querySelector("#num2");
var reset = document.querySelector("#reset");
var input = document.getElementsByTagName("input")[0];
var total = document.querySelector("#total");
// another method without using id
//var total = document.querySelector("p span");

var score2 = 0;
var score1 = 0;
var limit = 5;
var gameOver = false;

player1.addEventListener("click", function() {
  if (!gameOver) {
    score1 += 1;
    display1.textContent = score1;
  }
  if (score1 >= limit) {
    gameOver = true;
    display1.classList.add("winner");
  }
});

player2.addEventListener("click", function() {
  if (!gameOver) {
    score2 += 1;
    display2.textContent = score2;
  }
  if (score2 >= limit) {
    display2.classList.add("winner");
    gameOver = true;
  }
});

reset.addEventListener("click", function() {
  resetGame();
});

input.addEventListener("change", function() {
  limit = Number(input.value);
  total.textContent = input.value;
  resetGame();
});

function resetGame() {
  score1 = 0;
  display1.textContent = score1;
  score2 = 0;
  display2.textContent = score2;
  gameOver = false;
  display1.classList.remove("winner");
  display2.classList.remove("winner");
}
