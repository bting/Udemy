var colors = generateColors(6);
var displayColor = document.getElementById("displayColor");
var pickedColor = pickColor();
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

displayColor.textContent = pickedColor;
resetButton.addEventListener("click", function() {
  // generate colors;
  colors = generateColors(6);
  // pick new color
  pickedColor = pickColor();
  // display new color
  displayColor.textContent= pickedColor;
  // update colors in screen
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
});

for(var i = 0; i < squares.length; i++) {
  // add initial color to squares
  squares[i].style.backgroundColor = colors[i];
  // add event listener to squares
  squares[i].addEventListener("click", function() {
    var clickecdColor = this.style.backgroundColor;
    if (clickecdColor === pickedColor) {
      changeColor(pickedColor);
      h1.style.backgroundColor = pickedColor;
      resetButton.textContent = "Play Again?"
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

function generateColors(num) {
  //create an array
  var array = [];
  // generate random color and push to array
  for (var i = 0; i < num; i++) {
    array.push(randomColor());
  }
  // return array
  return array;
}

function randomColor() {
  // generate red
  var r = Math.floor(Math.random() * 256);
  // generate Green
  var g = Math.floor(Math.random() * 256);
  // generate blue
  var b = Math.floor(Math.random() * 256);
  // generate rgb(255, 0, 0); Notice you should add space here.
  // since the color css return would have a space
  var str = "rgb(" + r + ", " + g + ", " + b + ")";
  return str;
}
