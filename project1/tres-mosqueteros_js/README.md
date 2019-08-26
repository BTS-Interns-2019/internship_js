# The 8 queen problem
## objective
To create a function on javascript that will place in a coordinated - based console application, the arrengement of 8 queens in function of a chess board, without being plache in check with each other.

## globals questions
1. __what are the entries?__
board size, first queen position.
2. __which are the outputs?__
A matrix with the final position of the 8 queens.

## restrictions
1. __(xi,yi)__ is the position of the _i-esima_ queen.
2. __xi__ it's a value between 0 and 7.
3. __yi__ it's a value between 0 and 7.
4. __every xi are diferents__ there's no 2 queens on the same row.
5. __every yi are diferents__ there's no 2 queens on the same colum.
6. __every xi - yi are diferents__ there's no 2 queens on the same diagonal, up - left and down - right.
7. __every xi + yi are diferents__ there's no 2 queens on the same diagonal, up - left and down - right.

## theoretical framework
For the current case, la exemplification of a logic function will be used, in which the behavior of one of the most important chess pieces, the queen, will be exposed.
It is intended to develop a function in javascript, which is executed in console mode, which will place the queens corresponding to the objective set at the beginning of this project and that fulfills the predefined function.

### the n-queens algoritm
The algorithm of the n-queens is a functional method for understanding the development of structured programming.
The list of applicable rules are each board position (rows and columns). The most efficient way to solve it is to place a queen in each row, in case you cannot place a queen in a row, go back to choose a new path.
there are different cases that could be analyzed to solve this problem, each one represents almost similar characteristics when trying to follow the behavior of the tower; Then, finding a satisfactory solution will depend largely on choosing the initial box well.

## rules/mechanics
Chess is a two-player game, where one player is assigned white pieces, and the other black pieces. Each player has 16 pieces at the start of the game: 
* 1 king.
* 1 queen.
* 2 bishops.
* 2 horses.
* 2 towe.
* 8 pawn.

The queen is considered as the strongest piece of the board. You can move any number of boxes in a straight line, both horizontally or vertically, and diagonally. The queen moves like the tower and the bishop together.

## instructions
1. our global function is called _queenProblem_, and recived two params which are, the number of queens, who also determined the size of the board, and the other param is an array with the coordinated of the first queen on the board.
2. the function was tested to only receive a numeric value; a coordinated, in case of not recived the array with the coordinated, places the first queen in the vector (0,0).
3. also validates that the coordinated are true values, it means, that the array will be values inside the board.
function *print_board*, draws the board with "0" on an empty space and "1" if is a queen.
4. function *has_conflict*, determines if the positions of the queens ara valid; 
5. function *place_next_queen*, test all the possible solutions to place a queen until it finds a right one. 
6. function *matriz_ceros* recive a number and return an array filled at "0"s
7. at last, will print the result matrix, with the queens on the right positions(represented by "1") and "0" for empty spaces.
