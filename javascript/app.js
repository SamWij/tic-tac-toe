console.log("tic tac toe connected");

var player1Array = [];
var winningCombinations = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];


var player1 = $( "#X" ).click(function() {
  alert( "Handler X called." );
   var player = "X";

});

var player2 = $( "#O" ).click(function() {
  alert( "Handler O called." );
  var player = "O";

});


$( ".boardPiece" ).click(function() {

  var player1Pick = $(this).attr('id');
  $("#"+player1Pick).append("<img src='images/player1.png' />");
  player1Array.push(player1Pick);

  computer();

  });


var computer = 
