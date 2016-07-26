$(document).ready(function(){
  var bankroll = 100;
  $('form').on('submit', function(event){
    event.preventDefault();
    var bet = +$(this).closest('form').find('#bet').val();
    var number = +$(this).closest('form').find('#number').val();
    var compNumber = Math.floor(Math.random() * 10) + 1;
    console.log(compNumber);
    console.log(number);
    switch(Math.abs(compNumber - number)) {
    case 0:
      bankroll += bet;
      $(this).closest('body').find('p').text('Congratulations you won! \n Your guess: '+number+'\nNumber: '+compNumber+'\nYou now have $'+bankroll);
      break;
    case 1:
      $(this).closest('body').find('p').text('Close you were off by one! \n Your guess: '+number+'\nNumber: '+compNumber+'\nYou now have $'+bankroll);
      break;
    default:
      bankroll -= bet;
      $(this).closest('body').find('p').text('Sorry you did not win this time! \n Your guess: '+number+'\nNumber: '+compNumber+'\nYou now have $'+bankroll);
    }

  })


})





