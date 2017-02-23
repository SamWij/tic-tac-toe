console.log("tic tac toe connected");
  var player1Position = [];
  var player2Position = [];

  var board = [1,2,3,4,5,6,7,8,9];
  var currentPlayer = 0;
  var ties = 0;
  var player1TotalWins = 0;
  var player2TotalWins =0;
  var player1Turns = 0;
  var player2Turns = 0;
  var turn = 0;

  //hide messages
  $(".win-p1-messages").hide();
  $(".win-p2-messages").hide();
  $(".tie-messages").hide();



  var playerClick =$(".boardPiece").click(function() {


    var playerPick = $(this).attr('id');

    player1Play(playerPick, board);
    updateBoard(playerPick, board);

  });


  var startOver = $("button").click(function() {

    location.reload();

  });
  var playAgain = $("button").click(function() {

    clearBoard();

  });

  var updateBoard = function(playerPick, board) {

      var itemtoRemove = parseInt(playerPick);
      board.splice($.inArray(itemtoRemove, board),1);

  }

   var player1Play = function(playerPick, board) {



     if ($("#"+playerPick).children().length !== 1 && turn === 0){

          console.log("player 1 turn " + turn)
          player1Turns++
          $("#"+playerPick).append("<img src='images/player1.png' />");
          player1Position.push(parseInt(playerPick))
          turn = 1;
          playerTurn(turn)

        } else if ($("#"+playerPick).children().length !== 1 && turn === 1) {

          console.log("player 2 turn " + turn)
          player2Turns++;
          $("#"+playerPick).append("<img src='images/player2.png' />");
          player2Position.push(parseInt(playerPick))
          turn = 0;
          playerTurn(turn)
        }

          dataCheck(player1Position, player2Position, board, player1Turns, player2Turns);

      }

      var playerTurn = function() {
        if (turn === 0) {
            $( ".player2" ).effect( "highlight", {color: 'red'}, 1000 );

        } else if (turn === 1) {
            $('.player1').effect( "highlight", {color: 'red'}, 1000 );

        }

      }


function dataCheck(player1Position, player2Position, board, player1Turns, player2Turns) {

  if (player1Position.length < 3 && player2Position.length < 3) {
      console.log("not enough data to determine a winner");

    } else {
        checkforWinner(player1Position, player2Position, board);

      }
}

  function checkforWinner(player1Position, player2Position, board) {

    var winningCombs = [[8,1,6], [3,5,7], [4,9,2], [8,3,4], [1,5,9], [6,7,2], [8,5,2], [6,5,4]]

      for (var p1 = 0; p1 < winningCombs.length; p1++) {
          var setFoundP1 = true;  //use variable to find set.

            for (p = 0; p < winningCombs[p1].length; p++) {
                var foundP1 = false;

                // player1 hand
              for (q = 0; q < player1Position.length; q++) {
                  if (winningCombs[p1][p] == player1Position[q]) {
                    foundP1 = true;
                    break;
                            }
                  }
                  // value not found in players hand
                  // not a valid set, move on
                if (foundP1 == false) {
                      setFoundP1 = false;
                      break;
                }
            }// end of inner for loop

          if (setFoundP1 == true) {
            var winP1 = true;
            break;
            }
      } //end of outer for loop


          for ( p2= 0; p2 < winningCombs.length; p2++) {

              var setFoundP2 = true;
                    for (r = 0; r < winningCombs[p2].length; r++) {
                          // check if number matches winning combo
                          // if not, break, not winner
                          var foundP2 = false;
                          // players hand
                        for (s = 0; s < player2Position.length; s++) {
                            if (winningCombs[p2][r] == player2Position[s]) {

                                foundP2 = true;
                                break;
                            }
                          }

                          // value not found in players hand
                          // not a valid set, move on
                          if (foundP2 == false) {
                              setFoundP2 = false;
                              break;
                                  }
                                    }// end of inner for loop

                                    if (setFoundP2 == true) {
                                        var winP2 = true;

                                        break;
                                    }
                              } //end of outer for loop


    updateScoreBoard(winP1,winP2, board)
    }//end function






function updateScoreBoard(winP1, winP2, board) {
  var win =""
  if (winP1 === true) {
    player1TotalWins++
    console.log("Player1 Won: " + winP1);
    win = "Player1"



  } else if (winP2 === true) {
    player2TotalWins++;
    console.log("Player2 Won: " + winP2);
    win = "Player2"



  } else if (board.length <= 1 && winP1 != true && winP2 != true) {
    ties++
    console.log("TIE: " + "P1 "+ winP1 + "P2 "+ winP2 + "board length "+ board.length)
    win = "tie"


  }
  // WinningMessageShow(win);
  $(".playerTotal").text(player1TotalWins)
  $(".ties").text(ties)
  $(".computerTotal").text(player2TotalWins)


}

function clearBoard() {

$( ".boardPiece" ).empty();
turn = 0;
var win ="";
player1Turns = 0;
player2Turns = 0;
player1Position = [];
player2Position = [];
board = [1,2,3,4,5,6,7,8,9];
$(".boardPiece").show();
}

clearBoard();

// function WinningMessageShow(win) {
//
//   if (win === "Player1") {
//       $(".boardPiece").hide();
//       $(".win-p1-messages").show().fadeOut(4000);
//     } else if (win === "Player1") {
//       $(".boardPiece").hide();
//       $(".win-p2-messages").show().fadeOut(4000);
//     } else if (win === "tie") {
//           $(".boardPiece").hide();
//           $(".tie-messages").show().fadeOut(4000);
//       }

  // }
