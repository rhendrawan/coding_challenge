// Write a function that, given a string, finds the longest run of identical characters
// and returns an array containing the start and end indices of that run.
// If there are two runs of equal length, return the first one. Return [0,0] for no runs.
var longestRun = function(string) {
  var count = 0;
  var longestCount = 0;
  var currentStart = 0;
  var currentEnd = 0;
  var start = 0;
  var end = 0;

  for (var i = 0; i < string.length; i++) {
    // if new character
    if (string[i] !== string[i-1]) {
      count = 1;
      currentStart = i;
      currentEnd = i;
    } else {
    // same character as previous
      count++;
      currentEnd++;
      if (longestCount < count) {
        longestCount = count;
        start = currentStart;
        end = currentEnd;
      }
    }
  }

  return [start, end];
};

console.log(longestRun("abbbcc"));
console.log(longestRun("aabbc"));
console.log(longestRun(""));
console.log(longestRun("mississippi"));
console.log(longestRun("abcdefgh"));