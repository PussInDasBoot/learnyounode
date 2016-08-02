const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;
  var newlines = data.split('\n');
  var count = (newlines.length - 1);
  console.log(count);
});

