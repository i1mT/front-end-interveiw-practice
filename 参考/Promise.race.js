function PromiseRace(promises) {
	return new Promise((resolve, reject) => {
		if (promises instanceof Array !== true) {
			return reject(new TypeError('arguments must be an Array!'))
		}
		for(let i = 0; i < promises; i++) {
			Promise.resolve(promises[i]).then(resolve, reject)
		}
	})
}