function coinSums(total) {
  var counter = 0;
  var coins = [1, 2, 5, 10, 20, 50, 100, 200];

  function recurse(index, remainder) {
    if (index === 0) {
      if (remainder % coins[index] === 0) {
        counter++;
      }
    }

    while (remainder >= 0) {
      recurse(index - 1, remainder);
      remainder -= coins[index];
    }
  }

  recurse(coins.length - 1, total);
  return counter;
}

console.log(coinSums(17));    // 18
console.log(coinSums(1));     // 1