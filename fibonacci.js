function fibonacci(n) {
  var fibArr = [0, 1, 1];

  for (var i = 3; i <= n; i++) {
    fibArr.push(fibArr[i-2] + fibArr[i-1]);
  }

   return fibArr[n-1];
}

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(5));
console.log(fibonacci(10));