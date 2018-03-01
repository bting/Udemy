/*var body = document.getElementsByTagName("body")[0];
var button = document.getElementsByTagName("button")[0];
var isPurple = false;
button.addEventListener("click", function() {
  if (isPurple) {
    body.style.background = "white";
  } else {
    body.style.background = "purple";
  }
  isPurple = !isPurple;
});*/

/*var isOrange = false;
var button = document.querySelector("button");

button.addEventListener("click", function() {
  if(isOrange) {
    document.body.style.background = "white";
  } else {
    document.body.style.background = "orange";
  }
  isOrange = !isOrange;
});*/

var button = document.querySelector("button");
button.addEventListener("click", function() {
  document.body.classList.toggle("red");
})
