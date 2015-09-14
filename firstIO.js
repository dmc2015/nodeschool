var fs = require('fs');

var babySteps = fs.readFileSync(process.argv[2]);

 
var babyString = babySteps.toString();


var babyArray = babyString.split('\n');
// console.log(babyArray);
console.log(babyArray.length - 1);
