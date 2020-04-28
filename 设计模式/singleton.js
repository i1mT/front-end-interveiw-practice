const singleton = function (name) {
	this.name = name
	this.instance = null
}
singleton.getInstance = function(name) {
	if (!this.instance) {
		this.instance = new singleton(name)
	}
	return this.instance
}



// 用于解耦的单例
const getSingle = function (fn) {
	const result
	return function() {
		return result || (result = fn.apply(this, arguments))
	}
}