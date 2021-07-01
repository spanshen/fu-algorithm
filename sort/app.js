let util = require('./util');
let methods = require('./methods');

let arr = util.generateArray(100);// 生成数组

util.originLog(arr);// log排序前数组，用于对比

console.time('sort time');

// 排序
// methods.bubbleSort(arr);
// methods.selectSort(arr);
// methods.insertSort(arr);
// methods.quickSort(arr, 0, arr.length - 1);
// let res = methods.mergeSort(arr)
// methods.shellSort(arr);

console.timeEnd('sort time');

util.doneLog(arr);// log排序后数组，和排序前对比

util.checkAsc(arr);// 检查是否为升序序列