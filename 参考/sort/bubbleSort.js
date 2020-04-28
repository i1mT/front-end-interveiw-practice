function bubbleSort(arr) {
	let done, temp
	for(let i = 0; i < arr.length - 1; i++) {
		done = true
		for (let j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j+1]) {
				temp = arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
				done = false
			}
		}
		if (done) return arr
	}
	return arr
}