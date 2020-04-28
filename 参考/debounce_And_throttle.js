function debounce(fn, delay) {
	let timer = null

	return function() {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, arguments)	
		}, delay)
	}
}

function throttle(fn, delay) {
	let canRun = true

	return function() {
		if (!canRun) return
		canRun = false
		fn.apply(this, arguments) // 第一次点击就响应
		setTimeout(() => {
			canRun = true
		}, delay)
	}
}