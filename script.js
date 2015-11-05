$(document).ready(function() {

  var count = 0;
  var count2 = 0;
  $('#death').hide();
  $('#myModal').modal({
    show: true
  });

  var animateRoid = function() {
    $('#roid').animate({"left": "0px", "top": "500px"}, 2000, function(){
       if ($('#roid').offset({"left": "0px", "top": "500px"})) {
        $('#play').hide();
        $('#death').show();
        $('#player1Score').append(count);
        count = 0;
        }
    })           
  }
  var resetRoid = function(){ 
    $('#roid').removeAttr('style'); 
    $('#roid').stop(); 
  }
  var restartRoid = function() {
    resetRoid()
    animateRoid()
  } 
  $('#start').click(function() {
    animateRoid()
  })
  $('#roid').click(function() { 
    restartRoid();
     count += 1;
  });
  
 $('#player2Go').on('click', function(e) {
     e.preventDefault();
     $('#roid').removeAttr('style'); 
     $('#death').hide();
     $('#play').show();
     $(this).hide();
      animateRoid();
      $('#player1Score').html("Player 2 Score: ");     
});
});