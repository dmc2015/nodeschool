var sum = 0;

for(i = 2; i < process.argv.length; i++){
 sum += + process.argv[i];
 // sum1 += Number(process.argv[i]);
};

console.log(sum);
