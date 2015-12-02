function translateRomanNumeral(roman) {
  var DIGIT_VALUES = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  var result = 0;

  for (var i = 0; i < roman.length; i++) {
    var curNum = DIGIT_VALUES[roman[i]];
    var nextNum = DIGIT_VALUES[roman[i+1]];

    if (curNum === undefined) {
      return "null";
    }

    if (nextNum && curNum < nextNum) {
      result -= curNum;
    } else {
      result += curNum;
    }
  }

  return result;
}

console.log(translateRomanNumeral("LX"));
console.log(translateRomanNumeral("IV"));
console.log(translateRomanNumeral("horse"));
console.log(translateRomanNumeral(""));