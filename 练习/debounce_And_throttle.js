function debounce (fn, delay) {
	let timer

	return function () {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn.apply(this, arguments)
		}, delay)
	}
}

function throttle (fn, delay) {
	let canRun = true
	return function () {
		if (!canRun) return
		canRun = false
		fn.apply(this, arguments)
		setTimeout(() => {
			canRun = true
		}, delay)
	}
}