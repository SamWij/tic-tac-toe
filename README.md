# tic-tac-toe

[Link to Git Hub Page ](https://samwij.github.io/tic-tac-toe/)

##Approach to Problem

1. I approached the problem by sketching out the 9 square box:
 1 2 3
 4 5 6
 7 8 9

2. sketch out the HTML page into divs, this will give me an idea of the css and alignment of the page.
3. start to work out the variables and functions required within javascript.  I focused on the arrays required to calculate the winning combination.
4.  Think about the theme or idea of the game.

Overall, I decided to focus on building the 3x3 grid and have a basic layout so as to not over complicate the game.  I decided on a zombie theme.

##Challenges

###Winning Combination Issues
The major challenge was the winning combination and how to approach that.  I went between figuring out how to match arrays through to potentially using long if statements, through to switch cases. I started and re-started this so many time, I got lost and confused about the issue at hand.

How I overcame this was to write down my solution.  

###Wanting to play against a computer
Another challenge I had was I started off wanting to play against a computer, with the computer generating random numbers. I was successful at doing this but the game did not flow as well, as the function was just looking at the positions left on the board and picking one randomly, there was no AI interface.  At the 11th hour I changed this so that there were two players and you are required to play the game manually.

###Repetitive Code
I was unable to overcome this.  I attempted to clean up as much code as possible, however the winning combination code is very repetitive.

###messages
Unable to get win player 1, win player 2 and tie messages completed. tries using jQuery syntax $(".boardPiece").hide(); which i was unable to get working within a  messages function.

##Functions and Code

 There are 8 functions within the code.  On click of an item (Div) on the board the script will capture the div "id" which represents the board number (1 to 9).  Once there are at least 3 squares clicked for either Player 1 or Player 2, only then will we check to see if there is a winner.  On winner OR tie the scoreboard will update and await for the user to click either start new game or play again.

 Play again only resets the board and keeps scoreboard running.  Start Again will refresh the whole game board.

###Player Turn

 The turn function essentially is either a 1 or a 0.  This allows the game to keep track of which players turn it is.
 The player Turn is switched to a 0 or a 1.  This will determine which if statement runs on the playgame function.

###player selection of the board
On click of a square on the page the Player1Play function will run.
 Dependant on which players turn the player1Play the function will display an image of a Zombie.  The position that is clicked will be pushed up to a player array so we can track what positions they are at, and we update a running board (how many positions are left);  

###tracking the squares used on the board

there is a Board array:
```var board = [1,2,3,4,5,6,7,8,9];
 ```
 Once a user clicks on the board the position is removed from the board, showing how many pieces left.  I was using this to create a random number and let the computer choose a remaining spot.  I didn't like this, as there was no intelligence to it so removed the computer chooses function. I however kept this variable to confirm if the board was tied or not.

###winning combination function

The winning combination function is not DRY at all.  I created two sections which run multiple for loops:

Javascript example:  
```var player1Position = [1,2,3];
var player2Position = [1,2];
var winningCombs = [[8,1,6], [3,5,7], [4,9,2], [8,3,4], [1,5,9], [6,7,2], [8,5,2], [6,5,4]]```

The first for loop, loops through the winning combination nested array index.  While that for loop runs an inner for loop runs checking each value within the nested array.  

within this for loop another for loop is running that checks the winning combination against the player position:

```for (q = 0; q < player1Position.length; q++) {
    if (winningCombs[p1][p] == player1Position[q]) {
      foundP1 = true;
      break;
              }
    }```


##Learnings

1. don't panic!!!
2. things that seem simple are not! think it through slowly, do not rush.
3. do not read, or read other peoples code to get ideas, it just confuses me.  Approach things my way.
4. pseudo code and write down the approach before beginning.
