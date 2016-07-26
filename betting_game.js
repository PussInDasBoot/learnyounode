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
      // case flow-throw on purpose!
    case compNumber - 1:
      alert(`Close you were off by one! You now have $${bankroll}.`)
      break;
    default:
      bankroll -= bet;
      alert(`Sorry you didn't win this time! You now have $${bankroll}.`)
  }
}



  switch(Math.abs(compNumber - number)) {
    case 0:
      bankroll += bet;
      alert(`Congratulations you won! You now have $${bankroll}.`)
      break;
    case 1:
      alert(`Close you were off by one! You now have $${bankroll}.`)
      break;
    default:
      bankroll -= bet;
      alert(`Sorry you didn't win this time! You now have $${bankroll}.`)
  }

$(document).ready(function(){
  var $bet = $('#bet');
  $('#betting-form').on('submit', function(event){
    event.preventDefault();
    // var bet = +$(this).closest('form').find('#bet').val();
    var bet = +$bet.val();
    console.log(bet);
    // $(this).closest('body').find('p').text(bet);
    $('#output_para').text(bet);
  })
})