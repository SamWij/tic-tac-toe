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

//messages
$(".win-p1-messages").hide();
$(".win-p2-messages").hide();
$(".tie-messages").hide();


  var playerClick =$(".boardPiece").click(function() {

    player1Turns++
    console.log("Human Player: " + player1Turns);
    var playerPick = $(this).attr('id');
    player1Play(playerPick, board);
    updateBoard(playerPick, board);

  });

  var updateBoard = function(playerPick, board) {

      var itemtoRemove = parseInt(playerPick);
      board.splice($.inArray(itemtoRemove, board),1);

  }

   var player1Play = function(playerPick, board) {


     if ($("#"+playerPick).children().length !== 1){

          $("#"+playerPick).append("<img src='images/player1.png' />");
          player1Position.push(parseInt(playerPick))

        }
          player2Play(player1Position, board);

      }

  function player2Play(playerPosition1,board, player1Turns) {

      var box = board[Math.floor(Math.random()* board.length)]
        player2Turns++;

        console.log("Computer Player: " + player2Turns);

       if($("#"+box).children('img').length !== 1) {

          $("#"+box).append("<img src='images/player2.png' />");

           player2Position.push(box);
           updateBoard(box, board)

        }

        dataCheck(playerPosition1, player2Position, board, player1Turns, player2Turns);


  };

function dataCheck(playerPosition1, player2Position, board, player1Turns, player2Turns) {

  if (player1Turns < 3 && player2Turns < 2) {
      console.log("not enough data to determine a winner");
    } else {
        checkforWinner(playerPosition1, player2Position, board);
      }
}

  function checkforWinner(player1Position, player2Position, board) {

    var winningCombs = [[8,1,6], [3,5,7], [4,9,2], [8,3,4], [1,5,9], [6,7,2], [8,5,2], [6,5,4]]

      for (var p1 = 0; p1 < winningCombs.length; p1++) {

          var setFoundP1 = true;  //use variable to find set.

            for (p = 0; p < winningCombs[p1].length; p++) {
                // check if number matches winning combo
                // if not, break, not winner
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
  if (winP1 === true) {
    player1TotalWins++
    console.log("Player1 Won: " + winP1);
    var win = "Player1"
    WinningMessageShow(win);

  } else if (winP2 === true) {
    player2TotalWins++;
    console.log("Player2 Won: " + winP2);
    var win = "Player2"
    WinningMessageShow(win);

  } else if (board.length <= 1 && winP1 != true && winP2 != true) {
    ties++
    console.log("TIE: " + "P1 "+ winP1 + "P2 "+ winP2 + "board length "+ board.length)
    var win = "tie"
    WinningMessageShow(win);
  }
  $(".playerTotal").text(player1TotalWins)
  $(".ties").text(ties)
  $(".computerTotal").text(player2TotalWins)


}

function clearBoard() {

$( ".boardPiece" ).empty();

player1Turns = 0;
player2Turns = 0;
player1Position = [];
player2Position = [];
board = [1,2,3,4,5,6,7,8,9];
$(".boardPiece").show();
}



function WinningMessageShow(win) {
  hideBoardPiece();
  if (win === "Player1") {
      $(".win-p1-messages").show().fadeOut(4000);
    } else if (win === "Player1") {
      $(".win-p2-messages").show().fadeOut(4000);
      } else if (win === "tie") {
          $(".tie-messages").show().fadeOut(4000);
      }
        clearBoard();
  }


function hideBoardPiece() {
  $(".boardPiece").hide();
}
