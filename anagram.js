//Given a single input string, write a function that produces all possible anagrams
//of a string and outputs them as an array. At first, don’t worry about repeated strings.
//What time complexity is your solution?
function anagram(string) {
  var result = {};

  function recurse(str, remain) {
    if (str.length === string.length) {
      result[str] = true;
    }

    for (var i = 0; i < remain.length; i++) {
      recurse(str + remain[i], remain.slice(0, i) + remain.slice(i+1));
    }
  }

  recurse('', string);
  return Object.keys(result);
}


console.log(anagram('abcd'));
//["abcd", "abdc", "acbd", "acdb", "adbc", "adcb", "bacd", "badc", "bcad", "bcda", "bdac", "bdca", "cabd", "cadb", "cbad", "cbda", "cdab", "cdba", "dabc", "dacb", "dbac", "dbca", "dcab", "dcba"]