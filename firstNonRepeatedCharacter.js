// Given an arbitrary input string, return the first non-repeating character.
// For strings with all repeats, return 'sorry'.
var firstNonRepeatedCharacter = function(string) {
  var letterCount = {};

  for (var i = 0; i < string.length; i++) {
    letterCount[string.charAt(i)] = letterCount[string.charAt(i)] || 0;
    letterCount[string.charAt(i)]++;
  }

  for (i = 0; i < string.length; i++) {
    if (letterCount[string.charAt(i)] === 1) {
      return string[i];
    }
  }

  return 'sorry';
};

console.log(firstNonRepeatedCharacter('ABCDBIRDUP'));
console.log(firstNonRepeatedCharacter('XXXXXXX'));