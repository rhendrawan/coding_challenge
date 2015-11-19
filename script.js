var rockPaperScissorPermutation = function(count) {
  var result = [];
  var plays = ['r', 'p', 's'];

  function recurse(string) {
    if (string.length === count) {
      result.push(string);
      return;
    }

    for (var i = 0; i < plays.length; i++) {
      recurse(string + plays[i]);
    }
  }

  recurse('');
  return result;
};


console.log(rockPaperScissorPermutation(2));
console.log(rockPaperScissorPermutation(3));