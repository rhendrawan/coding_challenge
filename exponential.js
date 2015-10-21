function exponential(base, power) {
  result = 1;

  for (var i = power; i >= 1; i--) {
    result *= base;
  }

  return result;
}

console.log(exponential(2, 3));
console.log(exponential(2, 4));
console.log(exponential(3, 3));
console.log(exponential(3, 4));
