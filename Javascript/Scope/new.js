function myNew(fn) {
  let obj = {}; // 创建一个空对象
  obj.__proto__ = fn.prototype;
  const args = [...arguments].shift();
  let result = fn.apply(obj, args);

  return result instanceof Object ? result : obj;
}
