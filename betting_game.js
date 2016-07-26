for (var bankroll = 100; bankroll > 0; bankroll){
  var bet = Math.floor(prompt("Would you like to bet $5 or $10?"));
  var number = Math.floor(prompt("Great, now pick a number between 1 and 10"));
  console.log(number)
  var compNumber = Math.floor(Math.random() * 10) + 1;
  console.log(compNumber);
  switch(number) {
    case compNumber:
        bankroll += bet;
        alert(`Congratulations you won! You now have $${bankroll}.`)
        break;
    case compNumber + 1:
        alert(`Close you were off by one! You now have $${bankroll}.`)
        break;
    case compNumber - 1:
        alert(`Close you were off by one! You now have $${bankroll}.`)
        break;
    default:
        bankroll -= bet;
        alert(`Sorry you didn't win this time! You now have $${bankroll}.`)
  }
}

