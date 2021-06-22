function generateArray(length) {
	let arr = Array(length);
	for(let i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 100);
	}
	return arr;
}

function swap(arr, pos1, pos2) {
	let t = arr[pos1];
	arr[pos1] = arr[pos2];
	arr[pos2] = t;
}

function originLog(arr) {
	console.log('origin arr: ');
	console.log(arr);
}

function doneLog(arr) {
	console.log('sorted arr: ');
	console.log(arr);
}

function checkAsc(arr) {
	for(let i = 0; i < arr.length; i++) {
		if(arr[i + 1] < arr[i]) {
			console.log(false);
			return;
		}
	}
	console.log(true)
}

module.exports = {
	generateArray,
	originLog,
	doneLog,
	swap,
	checkAsc
};