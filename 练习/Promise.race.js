function PromiseRace(promises) {
	return new Promise((resolve, reject) => {
		if (promises instanceof Array !== true) {
			reject(new TypeError('argument must be an Array'))
		}
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i]).then(resolve, reject)
		}
	})
}