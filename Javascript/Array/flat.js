/**
 * Array.prototype.flat()
 * @param {Array} arr 要展开的数组
 * @param {Number} d 深度
 */
function flatDeep(arr, d) {
  return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d-1) : val), []) : arr.slice();
}

// test
var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
const res = flatDeep(arr1, Infinity);
console.log(res);
