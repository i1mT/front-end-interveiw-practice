function fibo(n) {
	let res = new Array(n+1)
	res.push(1, 1)

	fro (let i = 2; i <= n; i++) {
		res[i] = res[i-1] + res[i-2]
	}
	return res[n]
}
function fibo1 (n) {
	if (n === 0 || n === 1) return 1

	return fibo1(n-1) + fibo1(n-2)
}

function jsonp(url, args) {
	return new Promise((resolve, reject) => {
		let script = document.createElememnt('script')
		url = url + "?"
		for (let p in args) {
			url = url + p + '=' + args[p] + "&"
		}
		url = url + "&cb=callback"
		script.src = url
		
		document.appendChild(script)

		window.callback = (res) => {
			
				resolve(res)
			
		}
	})
}

A.prototype.constructor === Array



Array.prototype.myReduce = function(fn) {
	let res
	let self = this
	let prev, cur, temp
	for (let i in self) {
		self[i] = cur
		if (!prev) {
			fn(res, cur)
		} else {
			fn (prev, cur)
		}
		prev = cur
	}
	return res
}




















