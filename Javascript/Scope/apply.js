Function.prototype.myApply = function (context, args) {
  if (typeof this !== 'function') {
    return new TypeError('this must be a function!');
  }

  context = context || window;
  context.fn = this;
  let result;
  if (args !== undefined) {
    result = context.fn(...args);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
}
