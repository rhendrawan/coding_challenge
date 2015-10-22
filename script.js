function fibonacciRecursion(n) {
  if (n <= 3) {
    return 1;
  } else {
    return fibonacciRecursion(n-2) + fibonacciRecursion(n-1);
  }
}

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacciRecursion(5));
console.log(fibonacciRecursion(10));
