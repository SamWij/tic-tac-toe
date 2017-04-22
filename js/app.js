console.log("connected")

var ties = 0;
var player1TotalWins = 0;
var player2TotalWins = 0;
var player1 = "x";
var player2 = "o";
var turn = 0;
var moves = 0;
var board = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]


//play another game and keep scoreboard as is
var playAgain = $(".new-game").click(function() {
  clearBoard();
});

//reload
var startOver = $(".reload").click(function() {
  location.reload();
});

//on click identify the id
$( ".boardPiece" ).on( "click", function() {
  var boardPieceChosen = $(this).attr('id');

  currentPlay(boardPieceChosen)
});



var currentPlay = function(boardPieceChosen) {
  var num = parseInt(boardPieceChosen)
  var win =""

  if($("#"+boardPieceChosen).children().length !== 1 && turn == 0) {
    $("#"+boardPieceChosen).prepend($('<img>',{src:"images/player1.png"}))
    for(var i = 0; i < board.length; i++) {
      var index = board[i];
      for(var j = 0; j < index.length; j++) {
        if (num  === index[j]) {
          index[j] = "x"
          win = "x"
        }
      }
        turn = 1;

      }
  } else if ($("#"+boardPieceChosen).children().length !== 1 && turn == 1) {
    $("#"+boardPieceChosen).prepend($('<img>',{src:"images/player2.png"}))
    for(var i = 0; i < board.length; i++) {
      var index = board[i];
      for(var j = 0; j < index.length; j++) {
        if (num  === index[j]) {
          index[j] = "o"
          win = "o"
        }
      }
    }
    turn = 0;

  }
  moves++
  if (moves < 5) {
    console.log(moves)
  } else if (moves >= 5) {
    checkForWin(win)
  }
}


var checkForWin = function(win) {
  var winCheck = win+win+win
  var winner = ""
  for(var i = 0; i < board.length; i++) {
    var boardMerge = board[i].join("")
      if (boardMerge === winCheck && win === "x") {
        winner = "player one"
      } else if (boardMerge === winCheck && win === "o") {
        winner = "player two"
      } else if (moves === 9 && boardMerge != "xxx" && boardMerge != "ooo"){
        winner = "tie"
      }
  }
  updateScoreBoard(winner)
}


var updateScoreBoard = function(winner) {
  if (winner === "player one") {
    player1TotalWins++
    $(".playerTotal").text(player1TotalWins)
  } else if (winner === "player two") {
    player2TotalWins++
    $(".computerTotal").text(player2TotalWins)
  } else if (winner === "tie") {
    ties++
    $(".ties").text(ties)
  } else {
    console.log(winner + " no winner")
  }

  messages(winner)
}

var messages =  function (winner) {

  if (winner === "player one" || winner === "player two" ) {
    $('.messages').append('<p>').html(winner + " has won!").fadeIn(2000);
    $('.messages').fadeOut( 2000);
    clearBoard();
  } else if (winner === "tie") {
    $('.messages').html("urrrrggghh!!! it's a tie").fadeIn(2000);
    $('.messages').fadeOut( 2000);
    clearBoard();
  }

}

  function clearBoard() {
    $( ".boardPiece" ).empty();
    turn = 0;
    var win ="";
    board = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
    moves = 0
  }
