function mergeSort (array) {
  var half = Math.floor(array.length/2);
  var left = array.slice(0, half);
  var right = array.slice(half);

  if (array.length <= 1) {
    return array;
  }

  // Sort both halves, then merge them together.
  return merge(mergeSort(left), mergeSort(right));
}

var merge = function(left, right) {
  var i = 0;
  var j = 0;
  var result = [];
  var remaining;

  // While there is something left in both arrays to push to `result`...
  while (i < left.length && j < right.length) {
  // ...push the smaller of the two
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // One array is already pushed to result,
  // so add the rest of the other array
  if (left.length === i) {
    remaining = right.slice(j);
  } else {
    remaining = left.slice(i);
  }

  return result.concat(remaining);
};

console.log(mergeSort([4, 6, 3, 8]));
console.log(mergeSort([4,7,4,3,9,1,2]));