// A prime number is a whole number that has no other divisors other than itself
// and 1. Write a function that accepts a number and returns true
// if it’s a prime number, false if it’s not.
var primeTester = function(num) {
  if (num < 2) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(primeTester(2));
console.log(primeTester(1));