const url = process.argv[2];
const http = require('http');
const bl = require('bl');


http.get(url, function(res) {
  res.pipe(bl(function(err,data) {
    console.log(data.length);
    console.log(data.toString());
  }))
});