let ajax = new XMLHttpRequest()

// get
ajax.open('GET', url, true)
ajax.send()
ajax.onreadystatechange = function () {
	if (ajax.readyState === 4 && ajax.status === 200) {
		// 请求成功
		console.log(xhr.responseText)
	}
}

// POST
ajax.open('POST', url, true)
ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencode')
ajax.send('...')

ajax.onreadystatechange = function () {
	if (ajax.readyState === 4 && ajax.status === 200) {
		// 请求成功
		console.log(xhr.responseText)
	}
}