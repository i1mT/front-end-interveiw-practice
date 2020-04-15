 /**
  * Array.prototype.filter
  * @param {Function} callback(element, index, array) 测试函数
  * @param {Function} thisArg 执行callback时用于this的值
  */
 Array.prototype.myFilter = function (callback, thisArg = this) {
  let ret = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      ret.push(this[i]);
    }
  }
  return ret;
}
test();

// test
function test() {
const arr = [1, 2, 3, 4, 5];
let res = arr.myFilter((item, index, arr) => {
    console.log(item)
    console.log(index)
    console.log(arr)
    return item > 2;
});
console.log(arr);
console.log(res);
}
