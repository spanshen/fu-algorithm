const util = require('../util');

const bubble = function(arr) {
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr.length - i; j++) {
			if(arr[j + 1] < arr[j]) {
				util.swap(arr, j, j + 1);
			}
		}
	}
}

const select = function(arr) {
	for(let i = 0; i < arr.length; i++) {
		let min = arr[i], index = i;
		for(let j = i; j < arr.length; j++) {
			if(arr[j] < min) {
				min = arr[j];
				index = j;
			}
		}
		if(index !== i) {
			util.swap(arr, index, i);
		}
	}
}

const insert = function(arr) {
	for(let i = 1; i < arr.length; i++) {
		let cur = arr[i], j = i;
		while(j > 0 && arr[j - 1] > cur) {
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = cur;
	}
}

module.exports = {
	bubble,
	select,
	insert
}