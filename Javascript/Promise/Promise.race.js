/**
 * Promise.race()
 * @param {Array} promises 迭代对象
 */
function PromiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(promises) !== true) {
      return reject(new Error("promises must be an array."));
    }
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(resolve, reject);
    }
  })
}
