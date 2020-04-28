Function.prototype.before = function(fn) {
	let self = this
	return function () {
		fn.apply(self, arguments)
		return self.apply(self, arguments)
	}
}

Function.prototype.after = function(fn) {
	let self = this

	return function() {
		self.apply(self, arguments)
		return fn.apply(self, arguments)
	}
}