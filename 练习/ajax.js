let ajax = new XMLHttpRequest()

// GET
ajax.open('GET', url, true)
ajax.send()
ajax.onreadystatechange = function () {
	if (ajax.readyState === 4 && ajax.status === 200) {
		// 请求成功
		console.log(ajax.responseText)
	}
}

// POST
ajax.open('POST', url, true)
ajax.setRequestHeader('Content-type', 'application/json')
ajax.send({...})
ajax.onreadystatechange = function () {
	if (ajax.readyState === 4 && ajax.status === 200) {
		// 请求成功
		console.log(ajax.responseText)
	}
}