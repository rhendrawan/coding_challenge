// Implement the function ‘bind’, which accepts a function and a context as arguments.
// The context argument should override an existing context that the function is defined in.
// Your bind function should return the passed in function.
var bind = function(func, context) {
  var prevArgs = Array.prototype.slice.call(arguments, 2);

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);

    return func.apply(context, args);
  };
};

// implement the function ‘bind’ as a method of the Function.prototype object
Function.prototype.bind = function(context) {
  var prevArgs = Array.prototype.slice.call(arguments, 1);
  var func = this;

  return function() {
    var args = Array.prototype.slice.call(arguments);
    args = prevArgs.concat(args);

    return func.apply(context, args);
  };
};
