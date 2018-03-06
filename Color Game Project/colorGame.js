var numOfSquare = 6;
var colors = [];
var pickedColor;

var displayColor = document.getElementById("displayColor");
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modes = document.querySelectorAll(".mode");

// initiate game
function init() {
  setupModes();
  setupSquares();
  reset();
}
init();

function setupModes() {
  for (var i = 0; i < modes.length; i++) {
    modes[i].addEventListener("click", function() {
      modes[0].classList.remove("selected");
      modes[1].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numOfSquare = 3;
      } else {
        numOfSquare = 6;
      }
      reset();
    });
  }
}

function setupSquares() {
  for(var i = 0; i < squares.length; i++) {
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
}

resetButton.addEventListener("click", function() {
  reset();
});

function reset() {
  // generate colors;
  colors = generateColors(numOfSquare);
  // pick new color
  pickedColor = pickColor();
  // display new color
  displayColor.textContent= pickedColor;
  message.textContent = "";
  resetButton.textContent = "new colors"
  // update colors in screen
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

// change all colors to picked color when win
function changeColor(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

// randomly pick color
function pickColor() {
  var index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

//push random colors to colors array
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

// randomly generate each color
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
