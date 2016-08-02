// console.log(process.argv);



function sum(){
  var numbers = process.argv;
  var accumulator = 0
  for (var i = 2; i < numbers.length; i++) {
    accumulator += +numbers[i];
  }
  return accumulator;
}

console.log(sum());