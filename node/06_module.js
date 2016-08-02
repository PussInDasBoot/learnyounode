const fs = require('fs');
const path = require('path');

function fileList(directory, extension, callbackFunction) {

  fs.readdir(directory, function(err, files) {
  if (err) {
    return callbackFunction(err);
  }
  var newFiles = [];
  files.forEach(function(file) {
    if (path.extname(file) == '.'+extension) {
      newFiles.push(file);
    }
  });
  callbackFunction(null, newFiles);
});
};

module.exports = fileList
