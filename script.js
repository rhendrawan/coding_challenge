var spiralTraversal = function(matrix){
  var results = [];
  var minRow = 0;
  var maxRow = matrix.length-1;
  var minCol = 0;
  var maxCol = matrix[0].length-1;

  while (minRow <= maxRow && minCol <= maxCol) {
    for (var i = minCol; i <= maxCol; i++) {
      results.push(matrix[minRow][i]);
    }
    minRow++;
    for (var j = minRow; j <= maxRow; j++) {
      results.push(matrix[j][maxCol]);
    }
    maxCol--;
    if (minRow <= maxRow) {
      for (var k = maxCol; k >= minCol; k--) {
        results.push(matrix[maxRow][k]);
      }
      maxRow--;
    }
    if (minCol <= maxCol) {
      for (var m = maxRow; m >= minRow; m--) {
        results.push(matrix[m][minCol]);
      }
      minCol++;
    }
  }
  return results;
};

console.log(
  spiralTraversal(
    [ [ 1, 2, 3, 4, 5 ],
      [ 6, 7, 8, 9, 10 ],
      [ 11, 12, 13, 14, 15 ],
      [ 16, 17, 18, 19, 20 ],
      [ 21, 22, 23, 24, 25 ]
    ]
  )
);
