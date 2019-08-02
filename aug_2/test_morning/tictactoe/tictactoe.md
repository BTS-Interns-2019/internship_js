# Tic Tac Toe

>Function definition in `tictactoe.js`, you must add `module.exports = ticTacToe;` at the end of the file

>TDD in `tictactoe.test.js`

Type your name in comments at the top of the file.

Pancha and Paco are playing [Tic Tac Toe](https://www.google.com/search?q=tic+tac+toe&oq=tick+tac) by letter
and everithing was relatively good until it turns to be relatively bad...

They start arging about who wins each match, so we need to clarify that.


* Write a function called `ticTacToe`
* The function receives 1 parameter
  * `plays` as an array
    * Each element is an string representing coordinades in the board `x,y`.
    * `Player 1` is the one who starts, then `Player 2` is the second play, then `Player 1` again, and so on...
* The function will return an object containing
  * `winner` should be `'Player 1'` or `'Player 2'` according to who wins, if nobody wins should be empty string
  * `lastPlay` an integer the last played `play` starting in 1
  * `board` An array of 3 items representing the final state of the board
    * Each item is a 3-characters-string
    * `'X'` is player 1
    * `'O'` (letter o') is player 2
    * `' '` is an empty space

## TDD

You are provided with a sample tests file.

Add at least another 2 useful test cases.