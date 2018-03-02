var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var displayColor = document.getElementById("displayColor");
var pickedColor = colors[0];
displayColor.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
for(var i = 0; i < squares.length; i++) {
  // add initial color to squares
  squares[i].style.background = colors[i];
  // add event listener to squares
  squares[i].addEventListener("click", function() {
    var clickecdColor = this.style.background;
    if (clickecdColor === pickedColor) {
      alert("correct");
    } else {
      alert("wrong!!");
    }
  });
}
