// Write a function that takes as its input a string and returns an array
// of arrays as shown below sorted in descending order by frequency and
// then by ascending order by character.
function characterFrequency(string) {
  var frequency = {};
  var result = [];

  for (var i = 0; i < string.length; i++) {
    frequency[string[i]] = frequency[string[i]] || 0;
    frequency[string[i]]++;
  }

  //push pairs into final result array
  for (var prop in frequency) {
    result.push([prop, frequency[prop]]);
  }

  //sort accordingly
  result.sort(function(a, b) {
    if (a[1] > b[1]) {
      return -1;
    } else if (a[1] < b[1]) {
      return 1;
    } else if (a[0] < b[0]) {
      return -1;
    } else if (a[0] > b[0]) {
      return 1;
    }
  });

  return result;

}

console.log(characterFrequency('mississippi'));   //[ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
console.log(characterFrequency('aaabbc'));    // [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
console.log(characterFrequency(''));    //[]
