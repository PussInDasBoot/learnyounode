const fs = require('fs');
const file = process.argv[2];

var buffer = fs.readFileSync(file);
var string = buffer.toString();
var newlines = string.split('\n');
var count = (newlines.length - 1);

console.log(count);