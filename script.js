var insertionSort = function(arr) {
  var temp;

  for (var i = 0; i < arr.length; i++) {
    temp = arr[i];

    for (var j = i-1; j >= 0; j--) {
      if (arr[j] > temp) {
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
};

console.log(insertionSort([ 3, 1, 2 ]));
console.log(insertionSort([ 1, 0, 100, 42 ]));