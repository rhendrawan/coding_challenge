// Insertion sort is a basic sorting algorithm. Insertion sort iterates over an array,
// growing a sorted array behind the current location.
// It takes each element from the input and finds the spot,
// up to the current point, where that element belongs.
// It does this until it gets to the end of the array.
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