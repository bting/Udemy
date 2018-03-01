/*function printReverse(items) {
  for(var i = items.length-1; i >= 0; i--) {
    console.log(items[i]);
  }
}
printReverse([1,2,3,45]);*/

function isUniform(items) {
  var base = items[0];
  for(var i = 1; i < items.length; i++) {
    if (items[i] !== base) {
      return false;
    }
  }
  return true;
}

function sumArray(items) {
  var sum = 0;
  items.forEach(function(num){
    sum += num;
  });
  console.log(sum);
  return sum;
}

function max(items) {
  var max = items[0];
  items.forEach(function(num){
    if (num > max) {
      max = num;
    }
  });
  /*console.log(max);*/
  return max;
}
