function exponentialRecursion(base, power) {
  if (power <= 0) {
    return 1;
  } else {
    return base * exponentialRecursion(base, power - 1);
  }
}

console.log(exponentialRecursion(2, 3));
console.log(exponentialRecursion(2, 4));
console.log(exponentialRecursion(3, 3));
console.log(exponentialRecursion(3, 4));

