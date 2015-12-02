// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.
function rotateMatrix (matrix)  {
  var newArray = [];

  for (var i = 0; i< matrix.length; i++){
    var newRow = [];

    for (var j = 0 ; j < matrix.length ; j ++ ){
      newRow.push(matrix[matrix.length-1-j][i]);
    }

    newArray[i] = newRow;
    newRow = [];
  }
  return newArray;
}

console.log(rotateMatrix([ [1, 2],
[3, 4] ]));

console.log(rotateMatrix([
  [ 1, 2, 3, 4],
  [ 5, 6, 7, 8],
  [ 9, 'A','B', 'C'],
  ['D','E','F','G']
]));