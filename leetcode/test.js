var arr = [0, 3, 0, 12, 1];

var moveZeroes = function (nums) {
	let slow = 0;
	let fast = 0;
	while (fast !== nums.length) {
			while (slow !== 0) {
					slow++;
			}
			while (fast === 0) {
					fast++;
			}
			if(fast === nums.length) {
				break;
		}
			let t = nums[slow];
			nums[slow] = nums[fast];
			nums[fast] = t;
	}
	console.log(nums)
	return nums;
};

moveZeroes(arr);