/* 

-------------原型链继承 

*/
function parent() {
	this.val = {a: 1}
	console.log(1)
}
parent.prototype.sayHi = function() {
	console.log(233)
}
function son () {
	console.log(2)
}

son.prototype = new parent()

let b = new son()
let c = new son()
b.sayHi() // 233
console.log(b.val === c.val)
b.val.a = 2
console.log(c.val)

/* 缺点：
	1. 不能传参给超类构造函数
	2. 多个子类实例共享超类的属性
 */

 /* 

 -------------构造继承 

 */
function parent(name) {
	this.name = name
	this.say = function () {
		console.log(244)
	}
}
parent.prototype.sayHi = function () {
	console.log(233)
}
function son(name) {
	parent.call(this, name)
}
let b = new son()
b.say() // 244
b.sayHi() // error

/*
	缺点：
	1. 方法都在构造函数中，无法实现函数复用
	2. 超类定义的方法对子类不可用了
*/

/*

------------组合继承

*/
function parent(name) {
	console.log("parent constructed")
	this.name = name
	this.color = ['red', 'blue']
}
parent.prototype.sayHi = function () {
	console.log(this.name)
}
function son(name) {
	parent.call(this, name)
}
son.prototype = new parent()

let b = new son('iimT')
b.sayHi()
b.color.push('white')
console.log(b.color)


/*
	缺点：
		1. 构造函数会执行两次
*/

/*

------------寄生组合继承

*/
function inheritFun(son, parent) {
	let prototype = Object.create(parent.prototype)
	son.prototype = prototype
	son.prototype.constructor = son
}
function parent(name) {
	console.log("parent constructed")
	this.name = name
	this.color = ['red', 'blue']
}
parent.prototype.sayHi = function () {
	console.log(this.name)
}
function son(name) {
	parent.call(this, name)
}

inheritFun(son, parent)

let b = new son('iimT')
b.sayHi()
b.color.push('white')
console.log(b.color)


/* 完美方案！ */




























