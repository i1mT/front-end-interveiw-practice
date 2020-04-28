function myPromise(executor) {
    if (typeof executor !== 'function') {
        return new TypeError('executor must be a function')
    }

    let self = this
    self.status = 'pending'
    self.value = undefined
    self.reason = undefined
    self.onFulfilledCallbacks = []
    self.onRejectedCallbacks = []

    function resolve(value) {
        if (self.status === 'pending') {
            self.status = 'resolve'
            self.value  = value

            self.onFulfilledCallbacks.map(fn => {
                fn()
            })
        }
    }

    function reject(reason) {
        if (self.status === 'pending') {
            self.status = 'rejected'
            self.reason = reason

            self.onRejectedCallbacks.map(fn => {
                fn()
            })
        }

    }

    executor(resolve, reject)
}

myPromise.prototype.then = function(onFulfilled, onRejected) {
    let self = this
    return new myPromise((resolve, rejected) => {
        if (self.status === 'resolve') {
            try {
                let x = onFulfilled(self.value)
                resolve(x)
            } catch(e) {
                reject(e)
            }
        }

        if (self.status === 'rejected') {
            try {
                let x = onRejected(self.reason)
                resolve(x)
            } catch(e) {
                reject(e)
            }
        }

        if (self.status === 'pending') {
            self.onFulfilledCallbacks.push(() => {
                try {
                    let x = onFulfilled(self.value)
                    resolve(x)
                } catch(e) {
                    reject(e)
                }
            })

            self.onRejectedCallbacks.push(() => {
                try {
                    let x = onRejected(self.reason)
                    resolve(x)
                } catch(e) {
                    reject(e)
                }
            })
        }
    })
}





















