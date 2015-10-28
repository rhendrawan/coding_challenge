// Pipe composes a series of functions and returns the resulting function.
// Each function is called on the return value of the preceding function.
function pipe() {
  var args = arguments;

  return function(result) {
    for (var i = 0; i < args.length; i++) {
      result = args[i].call(null, result);
    }

    return result;
  };
}

// Compose should return a function that is the composition of a list of functions of arbitrary length.
// Each function is called on the return value of the function that follows.
function compose() {
  var args = arguments;

  return function(result) {
    for (var i = args.length - 1; i >= 0; i--) {
      result = args[i].call(null, result);
    }
    return result;
  };
}
