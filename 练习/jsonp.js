function jsonp (url, data) {
	return new Promise((resolve, reject) => {
		let dataString = url.indexOf('?') === -1 ? '?':'&'
		let callbackName = `jsonpCB_${Date.now()}`

		url = url + `${dataString}callback=${callbackName}`
		if (data) {
			for (let k in data) {
				url = url + `${k}=${data[k]}`
			}
		}

		let script = document.createElement('script')
		script.src = url

		window[callbackName] = res => {
			document.body.removeChild(script)
			delete window[callbackName]

			if (res) {
				resolve(res)
			} else {
				reject('无数据')
			}
		}

		script.addEventListener('error', () => {
			document.body.removeChild(script)
			delete window[callbackName]

			reject('script加载失败')
		})

		document.body.append(script)
	})
}