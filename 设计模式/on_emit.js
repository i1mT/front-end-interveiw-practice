// 发布订阅模式

/*

----------- 第一版：先订阅后发布

*/
let Event = function () {
	this.obj = {}
}

Event.prototype.on = function (type, fn) {
	if (!this.obj[type]) {
		this.obj[type] = []
	}

	this.obj[type].push(fn)
}

Event.prototype.emit = function () {
	let type = [].prototype.shift.call(arguments)
	let arr  = this.obj[type]

	for(let i = 0; i < arr.length; i++) {
		arr[i].apply(arr[i], arguments)
	}
}

/*

--------- 第二版：可以先发布后订阅

*/

let Event = function () {
	this.obj = {}
	this.cacheList = []
}

Event.prototype.on = function(type, fn) {
	if (!this.obj[type]) {
		this.obj[type] = []
	}
	this.obj[type].push(fn)

	// 读取cacheList中在订阅之前发布的消息
	for(let i = 0; i < this.cacheList.length; i++) {
		this.cacheList[i]()
	}
}
Event.prototype.emit = function() {
	let args = arguments
	let self = this

	function cache() {
		let type = [].prototype.shift.call(args)
		let arr = self.obj[type]
		for (let i = 0; i < arr.length; i++) {
			arr[i].apply(arr[i], args)
		}
	}

	this.cacheList.push(cache)
}

















