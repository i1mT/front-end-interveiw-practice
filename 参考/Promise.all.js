function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		if (promises instanceof Array !== true) {
			return reject(new TypeError('arguments must be an Array'))
		}

		let resolvedCounter = 0
		let promiseNum 		= promises.length
		let resolvedValues  = new Array(promiseNum)
		for(let i = 0; i < promiseNum; i++) {
			Promise.resolve(promises[i]).then(value => {
				resolvedCounter++
				resolvedValues[i] = value
				if (resolvedCounter === promiseNum) {
					return resolve(resolvedValues)
				}
			}, reason => {
				return reject(reason)
			})
		}
	})
}