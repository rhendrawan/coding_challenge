function balanceParenthesis(string) {
  var result = [];

  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === '(') {
      result.push('1');
    }

    if (string.charAt(i) === ')') {
      if (result.pop() === undefined) {
        return false;
      }
    }
  }

  if (result.length === 0) {
    return true;
  }

  return false;
}

console.log(balanceParenthesis("(x + y) - (4)"));   //true
console.log(balanceParenthesis("(((10 ) ()) ((?)(:)))"));   //true
console.log(balanceParenthesis("(50)("));   //false
console.log(balanceParenthesis(""));    //true