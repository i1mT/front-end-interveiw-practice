let singleton = function(name) {
	this.name = name
	this.instance = null
}
singleton.prototype.getInstance = function (name) {
	if (!this.instance) {
		this.instance = new singleton(name)
	}

	return this.instance
}



// 解耦版本
let getSingle = function (fn) {
	let result
	return function () {
		return result || (result = fn.apply(this, arguments) )
	}
}