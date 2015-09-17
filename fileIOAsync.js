// var fs = require('fs');
//
// var file = fs.readFile(process.argv[2], function (err, data) {
//   if(err){
//     return console.log('invalid data');
//   }else{
//     stringData = data.toString();
//     splitString = stringData.split('\n');
//     // return console.log('split string /n: ', splitString.length);
//     return console.log(splitString.length -1);
//
//
//   }
//
//
// });
//
//
//
// var fs = require('fs');
//
// fs.readFile(process.argv[2], numberOfLines)
//
// function numberOfLines(err, file) {
//   if(err){
//     return console.log('there is an error' + err)
//   }else{
//     var fileStringForm = file.toString();
//     var splitString = fileStringForm.split('\n');
//     return console.log(splitString.length - 1);
//   }
// }
//


var fs = require('fs');

function countFileLines(err, data){
  if(err){
    return console.log('there was an error: ' + err);
  }else{
    var stringForm = data.toString();
    var splitString = stringForm.split('\n');

    return console.log(splitString.length - 1);
  }
}

fs.readFile(process.argv[2], countFileLines);
