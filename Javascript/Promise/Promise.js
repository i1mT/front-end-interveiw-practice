/**
 * Promise
 */
function MyPromise(executor) {
  let self = this;

  self.PENDING  = 'pending';
  self.RESOLVED = 'resolved';
  self.REJECTED = 'rejected';
  self.state = self.PENDING;
  self.value = undefined;
  self.reason = undefined;
  self.onFulfiledCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve (value) {
    if (self.state !== self.PENDING) return;
    self.state = self.RESOLVED;
    self.value = value;
    self.onFulfiledCallbacks.forEach(fn => {
      fn();
    });
  }

  function reject (reason) {
    if (self.state !== self.PENDING) return;
    self.state = self.REJECTED;
    self.reason = reason;
    self.onRejectedCallbacks.forEach(fn => {
      fn();
    });
  }
  executor(resolve, reject);
}

MyPromise.prototype.then = function (onFulfiled, onRejected) {
  let self = this;
  return new MyPromise((resolve, reject) => {
    if (self.state === self.PENDING) {
      // pending
      self.onFulfiledCallbacks.push(() => {
        try {
          let x = onFulfiled(self.value);
          resolve(x);
        } catch(e) {
          reject(e);
        }
      });
      self.onRejectedCallbacks.push(() => {
        try {
          let x = onRejected(self.reason);
          resolve(x);
        } catch(e) {
          reject(e);
        }
      });
    }
    if (self.state === self.RESOLVED) {
      // resolved
      try {
        let x = onFulfiled(self.value);
        resolve(x);
      } catch(e) {
        reject(e);
      }
    }
    if (self.state === self.REJECTED) {
      //rejected
      try {
        let x = onRejected(self.reason);
        resolve(x);
      } catch(e) {
        reject(e);
      }
    }
  });
}

// test
const promise1 = new MyPromise(function(resolve, reject) {
  setTimeout(function() {
    resolve('foo');
  }, 300);
});

promise1.then(function(value) {
  console.log(value);
  return value+'2333';
}).then(val => {
  console.log(val);
});
