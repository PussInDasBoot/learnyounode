const url = process.argv[2];
const url2 = process.argv[3];
const url3 = process.argv[4];
const http = require('http');
const bl = require('bl');
const async = require('async'); 


// http.get(url, function(res) {
//   res.pipe(bl(function(err,data) {
//     console.log(data.toString());
//   }))
// });

async.series({
  
}

function getAll() {
  for (var i = 2; i < 4; i++) {
    http.get(process.argv[i], function(res) {
      res.pipe(bl(function(err, data) {
        console.log(data.toString());
      }))
    });
  }
}

getAll();