const util = require('./util');

// 冒泡
function bubble(arr) {
	let temp;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				util.swap(arr, j, j + 1)
			}
		}
	}
}

// 选择
function select(arr) {
	for(let i = 0; i < arr.length; i++) {
		let min = arr[i];
		let index = i;
		for(let j = i; j < arr.length; j++) {
			if(arr[j] < arr[index]) {
				min = arr[j];
				index = j;
			}
		}
		util.swap(arr, i, index);
	}
}

module.exports = {
	bubble,
	select
}