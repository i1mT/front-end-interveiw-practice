function promiseAll(promises) {
	return new Promise((resolve, reject) => {
		if (promises instanceof Array !== true) {
			return reject(new TypeError('argument must be an Array'))
		}

		let counter = 0
		let promisesLen = promises.length
		let result = new Array(promisesLen)

		for (let i = 0; i < promisesLen; i++) {
			Promise.resolve(promises[i]).then(res => {
				counter++
				result[i] = res
				if (counter === promisesLen) return resolve(result)
			}, reason => {
				return reject(reason)
			})
		}
	})
}