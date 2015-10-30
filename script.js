// Find the first item that occurs an even number of times in an array.
// Remember to handle multiple even-occurrence items and return the first one.
// Return null if there are no even-occurrence items.
function evenOccurence(arr) {
  var letters = {};

  for (var i = 0; i < arr.length; i++) {
    var letter = arr[i];
    letters[letter] = letters[letter] || 0;
    letters[letter]++;
  }

  for (i = 0; i < arr.length; i++) {
    if (letters[arr[i]] % 2 === 0) {
      return arr[i];
    }
  }

  return null;
}

console.log(evenOccurence([ 1, 3, 3, 3, 2, 4, 4, 2, 5 ]));
console.log(evenOccurence([ "cat", "dog", "dig", "cat" ]));