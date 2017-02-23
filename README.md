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

###Unable to get win player 1, win player 2 and tie messages completed. tries using jQuery syntax $(".boardPiece").hide(); which i was unable to get working within a  messages function.

##Functions and Code
  
 There are 8 functions within the code.
 
 ###Player Turn
 
 The turn function essentially is either a 1 or a 0.  This allows the game to keep track of whos turn it is.
 The player Turn is switched to a 0 or a 1 
 
 ###player selection of the board
 
 ###tracking the squares used on the board
 
 ###winning combination function
 
 ###messages




## Things Not Finished/ To Do Items

1. refactor code (merge the winning combination function
2. get the winning combinations function completed.
3. work on the animation on win, tie
4. data storage
5. get the win and tie messages flashing.


##Learnings

1. don't panic!!!
2. things that seem simple are not!
3. do not read, or read other peoples code, it just confuses me.
4. psuedo code and write down the approach before beginning.








