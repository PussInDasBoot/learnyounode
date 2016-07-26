$(document).ready(function(){
  var bankroll = 100
  $('p').text(bankroll)
  $('form').on('submit', function(event){
    event.preventDefault();
      if (bankroll == 0) {
        if (confirm("Would you like to play again?")){
          bankroll = 100;
        };
      }
      var bet = +$(this).closest('form').find('#bet').val();
      if (bet < 5 || bet > 10) {
        return handleError('Please bet between $5 and $10');
      }
      var number = +$(this).closest('form').find('#number').val();
      if (number < 1 || number > 10) {
        return handleError('Please choose a number between $5 and $10');
      }
      var compNumber = Math.floor(Math.random() * 10) + 1;
      if (bet > bankroll) {
        alert("You cannot bet more than you have");
        return false
      };
      if (number == "" || bet == "") {
        alert("Please input fields");
        return false
      };
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
      };
  });
  function handleError(message){
    alert(message);
    return false;
  };
})

