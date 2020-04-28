function MyPromise(executor) {
    if (typeof executor !== 'function') {
        return new TypeError("executor must be a function!")
    }
    let self = this

    self.value = undefined
    self.resason = undefined
    self.status = 'pending' // 默认Promise的状态是pending
    self.onFulfilledCallbacks = []
    self.onRejectedCallbacks  = []
    
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value
            self.status = 'resolved'
            // 发布
            self.onFulfilledCallbacks.forEach(fn => {
                fn()
            })
        }
    }
    function reject(resason) {
        if (self.status === 'pending') {
            self.resason = resason
            self.status = 'rejected'
            // 发布
            self.onRejectedCallbacks.forEach(fn => {
                fn()
            })
        }
    }
    executor(resolve, reject)
}
MyPromise.prototype.then = function (onFulfilled, onRejected) {
    let self = this
    return new MyPromise((resolve, rejected) => {
        if (self.status === 'resolved') {
            try {
                let x = onFulfilled(self.value)
                resolve(x) // 这里还有一种情况未处理，就是x也是一个Promise对象的情况
            } catch(e) {
                rejected(e)
            }
        }
        if (self.status === 'rejected') {
            try {
                let x = onRejected(self.reason)
                resolve(x)
            } catch(e) {
                rejected(e)
            }
        }
        if (self.status === 'pending') {
            // 订阅事件
            self.onFulfilledCallbacks.push(() => {
                try {
                    let x = onFulfilled(self.value)
                    resolve(x)
                } catch(e) {
                    rejected(e)
                }
            })
            self.onRejectedCallbacks.push(() => {
                try {
                    let x = onRejected(self.reason)
                    resolve(x)
                } catch(e) {
                    rejected(e)
                }
            })
        }
    })
}