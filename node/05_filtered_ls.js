const fs = require('fs');
const path = require('path');

const directory = process.argv[2];

const extension = process.argv[3];
// console.log(extension);

fs.readdir(directory, function(err, files) {
  if (err) throw err;
  var newFiles = [];
  files.forEach(function(file) {
    if (path.extname(file) == '.'+extension) {
      newFiles.push(file);
    } else {
    }
  });

  newFiles.forEach(function(file) {
    console.log(file);
  });
});
