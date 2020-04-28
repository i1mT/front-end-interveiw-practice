let Event = function () {
	this.obj = {}
}
Event.prototype.on = function(type, fn) {
	if (!this.obj[type]) {
		this.obj[type] = []
	}
	this.obj[type].push(fn)
}
Event.prototype.emit = function() {
	let type = [].prototype.shift.call(arguments)
	let arr  = this.obj[type]
	for(let i = 0; i < arr.length; i++) {
		arr[i].apply(arr[i], arguments)
	}
}

// 版本2
let Event = function () {
	this.obj = {}
	this.cacheList = []
}
Event.prototype.on = function (type, fn) {
	if (!this.obj[type]) {
		this.obj[type] = []
	}
	this.obj[type].push(fn)

	for (let i = 0; i < this.cacheList.length; i++) {
		this.cacheList[i]()
	}
}
Event.prototype.emit = function () {
	let self = this
	let args = arguments

	function cache () {
		let type = [].prototype.shift.call(args)
		let arr  = self.obj[type]
		for (let i = 0; i < arr.length; i++) {
			arr[i].apply(arr[i], args)
		}
	}
	this.cacheList.push(cache)
}













