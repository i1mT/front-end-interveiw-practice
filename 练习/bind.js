Function.prototype.myBind = function (thisArg) {
	if (typeof this !== 'function') {
		return // 被绑定的必须是函数
	}

	let self = this
	let args = [].prototype.slice.call(arguments, 1)

	function noop () {}
	function res () {
		if (this instanceof noop) thisArg = this
		return self.apply(thisArg, args.concat([].prototype.slice.call(arguments)))
	}

	if (this.prototype) {
		noop.prototype = this.prototype
	}
	
	res.prototype = new noop()
	res.prototype.constructor = res

	return res
}