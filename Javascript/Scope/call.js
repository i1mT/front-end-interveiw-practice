Function.prototype.myCall = function (context) {
  if (typeof this !== 'function') {
    return new TypeError('this must be a function!');
  }

  context = context || window;
  context.fn = this;
  const args = [...arguments].slice(1);
  let result = context.fn(...args);
  delete context.fn;
  return result;
}
