function deepClone(obj) {
	if (typeof obj !== 'object' || obj == null) {
		return
	}

	let res
	
	if (obj instanceof Array) res = []
	else res = {}

	for (let k in obj) {
		res[k] = deepClone(obj[k])
	}

	return res
}