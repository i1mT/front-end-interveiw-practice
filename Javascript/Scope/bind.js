Function.prototype.myBind = function (thisArg) {
  if (typeof this !== 'function') {
    return new TypeError('this must be a function!');
  }

  const self = this;
  const args = [...arguments].slice(1);
  function fnNop() {};
  function result() {
    const _this = this instanceof self ? this : thisArg; // 处理new的情况

    return self.apply(_this, args.concat([...arguments]));
  }

  if (this.prototype) { // this上还有原型链，维护原型链
    fnNop.prototype = this.prototype;
  }

  result.prototype = new fnNop(); // 继承原型链

  return result;
}
