Function.prototype.myBind = function (thisArg) {
	if (typeof this !== 'function') {
		return Error('this must be a function')
	}

	let self = this
	let arg  = [].slice.call(arguments, 1)

	function noop () {}
	function res () {
		if (this instanceof noop) thisArg = this
		return self.apply(thisArg, arg.concat([].slice.call(arguments)))
	}

	if (this.prototype) {
		noop.prototype = this.prototype
	}

	res.prototype = new noop()
	res.prototype.constructor = res

	return res
}