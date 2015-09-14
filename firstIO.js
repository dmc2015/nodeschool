var fs = require('fs');

var babySteps = fs.readFileSync('babysteps.js');

var babyString = babySteps.toString();


var babyArray = babyString.split('\n');
// console.log(babyArray);
console.log(babyArray.length);
