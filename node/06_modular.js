var fileList = require('./06_module');

const directory = process.argv[2];

const extension = process.argv[3];


fileList(directory, extension, function(err, data) {
  if (err) {
    console.log(err);
  }
  data.forEach(function(file) {
    console.log(file);
  });
});