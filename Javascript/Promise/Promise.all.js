/**
 * Promise.all()
 * @param {Array} promises 迭代对象
 */
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(promises) !== true) {
      return reject(new Error("promises must be an array."));
    }
    let promiseCount = 0;
    let promiseNum = promises.length;
    let promiseRes = new Array(promiseNum);

    for (let i = 0; i < promiseNum; i++) {
      Promise.resolve(promises[i]).then(value => {
        promiseCount++;
        promiseRes[i] = value;
        if (promiseCount === promiseNum) {
          return resolve(promiseRes);
        }
      }, (reason) => {
        return reject(reason);
      })
    }
  });
}
