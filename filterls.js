fs = require('fs');
path = require('path');
directoryName = process.argv[2];
ext =    process.argv[3];
fileList = [];

// for(i=0; i <= process.argv.length; i++){
//   console.log('here is a log of a array ', i ,':  ', process.argv[i]);
// }


// console.log(process.argv[2], process.argv[3]);


var fileFilter = fs.readdir(directoryName,  function callback(err, data){
  if(err){
    return console.log('there was a error');
  }else{
    for(i = 0; i <= data.length; i++){
      // console.log('iteration of each data element', data[i]/*, 'logging file :', data*/);
      // console.log('extension of each element', path.extname(data[i]));
      // console.log('this is the appended extension', '.'+ext, 'this is the un appended extension', ext);
      if (path.extname(data[i]) == '.'+ext){
        fileList.push(data[i]);
        console.log(fileList[i].toString());
        // console.log('pushing to file list', fileList);
      }
    }


    // var fileListString = fileList.toString();
    // console.log(fileList.splice(','));
    // console.log(fileList);
    //

    // for(k = 0; k <= fileList.length; k++){
    //   console.log(fileList[k]);
    // }
    //
    // return {
    //
    // }

    // console.log(fileListString);

  }


  // return console.log('there was no error', data);

});


// fileFilter();

// var fileList = fs.readdir(directoryName, ext, function callback(err, data){
//   if(err){
//     return console.log('there is a error here: ');
//   }else{
//     return console.log('test worked');
//   }
//
// });

// NODE_DEBUG=fs;

//    fs.readdir(directoryName, ext, function (err, data){
//
//
//
//   }
//
// )
// {
//
//
//
// }


//OFFICIAL SOLUTION
// var fs = require('fs')
//    var path = require('path')
//
//    fs.readdir(process.argv[2], function (err, list) {
//      list.forEach(function (file) {
//        if (path.extname(file) === '.' + process.argv[3])
//          console.log(file)
//      })
//    })
