var prompt = require('prompt-sync')();

var bankroll = 100;
while (bankroll > 0) {
  console.log('You have $'+bankroll+' in the bank.');
  if (bankroll == 0) {
    var playagain = prompt("Would you like to play again?")
  }
  if (playagain === "yes") {
    bankroll = 100;
  }

  console.log("Bet between $5 and $10");
  var bet = parseInt(prompt());
  if (bet == "quit") {
    break;
  }
   while (!validBet(bet)) {
    console.log("Bet between $5 and $10");
    bet = +prompt();
  }
  console.log("Choose a number between 1 and 10");
  var number = parseInt(prompt());

  while (!validNumber(number)) {
    console.log("Choose a number between 1 and 10");
    number = +prompt();
  }
  var compNumber = Math.floor(Math.random() * 10) + 1;
  switch(Math.abs(compNumber - number)) {
    case 0:
      bankroll += bet;
      console.log('Congratulations you won! \nYour guess: '+number+'\nNumber: '+compNumber+'\nYou now have $'+bankroll);
      break;
    case 1:
      console.log('Close you were off by one! \nYour guess: '+number+'\nNumber: '+compNumber+'\nYou now have $'+bankroll);
      break;
    default:
      bankroll -= bet;
      console.log('Sorry you did not win this time! \nYour guess: '+number+'\nNumber: '+compNumber+'\nYou now have $'+bankroll);
  };
  function handleError(message){
    console.log(message);
    return false;
  };
  function validBet(bet){
    var result = true
    if (bet < 5 || bet > 10) {
      result = false;
    } else if (bet > bankroll) {
      handleError("You cannot bet more than you have");
      result = false;
    } else if (bet == "") {
      handleError("Please input fields");
      result = false;
    }
    return result;
  };

  function validNumber(number){
    var result = true
    if (number == "") {
      handleError("Please input fields");
      result = false;
    } else if (number > 10 || number < 1) {
      result = false;
    }
    return result;
  };


  // function take_number(start, end) {
  //   var number = +prompt();
  //   while (!v) {
  //     console.log("Choose a number between 1 and 10");
  //     number = +prompt();
  //   }
  //   return number;
  // }
}
