function reverse(string) {
  var result = '';

  for (var i = string.length - 1; i >= 0; i--) {
    result += string.charAt(i);
  }

  return result;
}

console.log(reverse('hello'));
