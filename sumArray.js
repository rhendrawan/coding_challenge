// Given an array of numbers, calculate the greatest contiguous sum of numbers in it.
// A single array item will count as a contiguous sum.
function sumArray(array) {
  maxSum = -Infinity;

  for (var i = 0; i < array.length; i++) {
    var currSum = 0;

    for (var j = i; j < array.length; j++) {
      currSum += array[j];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }

  return maxSum;
}

console.log(sumArray([ 1, 2, 3 ]));   //6
console.log(sumArray([ 4, -1, 5 ]));   //8
console.log(sumArray([ 10, -11, 11 ]));   //11
console.log(sumArray([ 1, 2, 3, -6, 4, 5, 6 ]));   //15