var sum = 0;
// var sum1 = 0;


for(i = 2; i < process.argv.length; i++){
  // console.log(sum);
 sum += + process.argv[i];
 // sum1 += Number(process.argv[i]);
};

// console.log(process.argv[0], process.argv[1], process.argv[2], sum);
console.log(sum);
// console.log(sum1);
