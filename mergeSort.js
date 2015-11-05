var mergeSort = function(arr) {
  var half = Math.floor(array.length/2);
  var left = arr.slice(0, half);
  var right = arr.slice(half);

  if (arr.length === 0) {
    return array;
  }

  return merge(mergeSort(left), mergeSort(right));
};

var merge = function(left, right) {
  var i = 0;
  var j = 0;
  var result = [];
  var remaining;

  if (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  if (left.length === i) {
    remaining = right.slice(j);
  } else {
    remaining = left.slice(i);
  }

  return result.concat(remaining);
};

console.log(mergeSort([4,7,4,3,9,1,2]));