console.log("tic tac toe connected");

var playerScore = [];
var computerScore = [];

var board = [1,2,3,4,5,6,7,8,9];
var playerTurn = 0;
var ties = 0;
var player = "X";
var computer = "O";
var winner = "none"

var playerClick =$(".boardPiece").click(function() {

  var playerPick = $(this).attr('id');

  playGame(playerPick, board);

});

var updateBoard = function(playerPick, board) {

    var itemtoRemove = parseInt(playerPick);

    board.splice($.inArray(itemtoRemove, board),1);

}

 var playGame = function(playerPick, board) {

   if ($("#"+playerPick).children().length === 0){
        $("#"+playerPick).append("<img src='images/player1.png' />");

        playerScore.push(parseInt(playerPick));

        updateBoard(playerPick, board)

        computerMove(playerPick, board);

        checkforWinner(playerPick, playerScore, computerScore, board);
   }


   }


 function computerMove(playerPick, board) {

    var box = board[Math.floor(Math.random()* board.length)]

     if($("#"+box).children('img').length !== 1) {

       $("#"+box).append("<img src='images/player2.png' />");
       computerScore.push(box)
       updateBoard(box, board)

     } else  {
      checkforWinner();
     }
};

function checkforWinner(playerPick, playerScore, computerScore, board) {

  var winningCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [7,5,3], [1,5,9]]

for (var i = 0; i < winningCombinations.length; i++) {
  for (var j = 0; j < winningCombinations[i].length; j++) {
    if (winningCombinations[i][j] === playerPick) {
      var winPoint =  winningCombinations[i][j]

      console.log(winPoint + " " + playerPick)
    }


  }

}
    };


function clearBoard() {

  $( ".boardPiece" ).empty();
}
