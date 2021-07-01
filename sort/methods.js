const util = require('./util');

// 冒泡
function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i; j++) {
			if (arr[j] > arr[j + 1]) {
				util.swap(arr, j, j + 1)
			}
		}
	}
}

// 选择
function selectSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = arr[i];
		let index = i;
		for (let j = i; j < arr.length; j++) {
			if (arr[j] < arr[index]) {
				min = arr[j];
				index = j;
			}
		}
		if (i !== index) {
			util.swap(arr, i, index);
		}
	}
}

// 插入
function insertSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let j = i, cur = arr[i];
		while (j > 0 && cur < arr[j - 1]) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = cur;
	}
}

// 快速
function quickSort(arr, start, end) {
	if (start >= end) {
		return;
	}
	let pivot = arr[start], i = start, j = end;
	while (i < j) {
		while (j > i && arr[j] > pivot) {
			j--;
		}
		// 这里注意是arr[i] <= pivot，因为一开始i = start，如果是<，那i就不会动，一直停在最开始
		while (i < j && arr[i] <= pivot) {
			i++;
		}
		if (i < j) {
			util.swap(arr, i, j);
		}
	}
	arr[start] = arr[i];
	arr[i] = pivot;
	quickSort(arr, start, i - 1);
	quickSort(arr, i + 1, end);
}

// 归并排序工具函数。合并两个有序数组
function merge2Array(A, B) {
	let res = [];
	while(A.length > 0 && B.length > 0) {
		if(A[0] < B[0]) {
			res.push(A.shift());
		}else {
			res.push(B.shift());
		}
	}
	return res.concat(A).concat(B);
}
// 归并
function mergeSort(arr) {
	if(arr.length <= 1) {
		return arr;
	}
	let mid = Math.floor(arr.length / 2);
	let left = arr.slice(0, mid);
	let right = arr.slice(mid);
	return merge2Array(mergeSort(left), mergeSort(right));
}

// 希尔
function shellSort(arr) {
	for(let gap = Math.floor(arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for(let i = gap; i < arr.length; i++) {
			let j = i, cur = arr[i];
			while(j - gap >= 0 && cur < arr[j - gap]) {
				arr[j] = arr[j - gap];
				j = j - gap;
			}
			arr[j] = cur;
		}
	}
}


module.exports = {
	bubbleSort,
	selectSort,
	insertSort,
	quickSort,
	mergeSort,
	shellSort
}