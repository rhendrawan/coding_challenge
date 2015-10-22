function anagram(string) {
  var result = [];

  function recurse(str, remain) {
    if (str.length === string.length) {
      result.push(str);
    }

    for (var i = 0; i < remain.length; i++) {
      recurse(str + remain[i], remain.slice(0, i) + remain.slice(i+1));
    }
  }

  recurse('', string);
  return result;
}



console.log(anagram('abcd'));