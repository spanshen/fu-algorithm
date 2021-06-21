let util = require('./util');
let methods = require('./methods');

// 生成数组
let arr = util.generateArray(10);
// log排序前数组，用于对比
util.originLog(arr);

// 排序
// methods.bubble(arr);
methods.select(arr);

// log排序后数组，和排序前对比
util.doneLog(arr);
