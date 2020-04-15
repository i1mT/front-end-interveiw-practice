/**
 * Array.prorotype.reduce
 * @param callback(accumulator, currentValue, index, array) 对每个值执行的函数
 *  - accumulator 累计值
 *  - currentValue 当前值
 *  - index 当前索引
 *  - array 源数组
 * @param initialValue 初始值
 */
Array.prototype.myReduce = function (callback, initialValue) {
  if (this.length === 0) return Error('array.length must more than 1.');

  let startIndex = initialValue === undefined ? 1 : 0;
  let accumulator = initialValue || this[0];
  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this);
  }

  return accumulator;
}

let arr = [1, 2, 3, 4];
let res1 = arr.myReduce((prev, cur) => prev+cur);
let _res1 = arr.reduce((prev, cur) => prev+cur);
let res2 = arr.myReduce((prev, cur) => prev+cur, 100);
let _res2 = arr.reduce((prev, cur) => prev+cur, 100);
console.log(res1, _res1);
console.log(res2, _res2);
