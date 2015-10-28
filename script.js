function commonCharactrers(string1, string2) {
  var result = '';

  for (var i = 0; i < string1.length; i++) {
    if (string2.indexOf(string1.charAt(i)) >= 0) {
      if (result.indexOf(string1.charAt(i)) < 0) {
        result += string1.charAt(i);
      }
    }
  }

  return result;
}

console.log(commonCharactrers('acexivou', 'aegihobu'));   //'aeiou'
