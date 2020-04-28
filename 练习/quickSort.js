function partition(arr, low, high) {
	let pivot = arr[low]
	while (low < high) {
		while (low < high && pivot <= arr[high])
			high--
		arr[low] = arr[high]
		while(low < high && pivot >= arr[low])
			low++
		arr[high] = arr[low]
	}
	arr[low] = pivot
	return low
}
function quickSort(arr, low, high) {
	if (low < high) {
		let pivot = partition(arr, low, high)
		quickSort(arr, low, pivot-1)
		quickSort(arr, pivot+1, high)
	}
}