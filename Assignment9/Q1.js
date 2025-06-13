// 2.Install the lodash package using npm install lodash. and use any of its function

const allPackage = require("lodash");

const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = allPackage.uniq(numbers);

console.log(uniqueNumbers);

//Output:

// [Running] node "/home/nishint.goyal/Desktop/JavaScript-Training/Assignment9/Q1.js"
// [ 1, 2, 3, 4, 5 ]
