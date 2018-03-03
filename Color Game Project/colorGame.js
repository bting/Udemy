var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var displayColor = document.getElementById("displayColor");
var pickedColor = pickColor();
displayColor.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");

for(var i = 0; i < squares.length; i++) {
  // add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  // add event listener to squares
  squares[i].addEventListener("click", function() {
    var clickecdColor = this.style.backgroundColor;
    if (clickecdColor === pickedColor) {
      changeColor(pickedColor);
      messageDisplay.textContent = "Correct";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColor(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
