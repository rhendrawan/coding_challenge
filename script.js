function reverseRecursion(string) {
  if (string.length === 0) {
    return '';
  } else {
    return reverseRecursion(string.substring(1)) + string[0];
  }
}

console.log(reverseRecursion('hello'));
console.log(reverseRecursion('abcd'));