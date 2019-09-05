# Chess master

Filename `chess_<branchname>.js`

## Constructor `Board`
* It represents a chess board with chess pieces
* Cells in the board are represented by a letter [A-H] and a number [1-8]; for example `G5`
* It has methods `moveWhite` and `moveBlack` that returns a promise and receives 2 parameters as `string`, starting cell and target cell. This method attempts to move a piece of the indicated color located at "starting cell" to "target cell"
  * If there is an error during the operation reject with an error object containing the text:
    * `There is no piece in the selected {location} cell`
    * `The piece at {location} is not {expected_color}`
    * `The piece {name_of_piece} cannot be moved to {target}`
  * It resolves with the piece object if everything went good
* It has a method `getBoard` that returns a bidimentional array containing 2 characters strings representing each piece on the board, or empty string
  * To represent the pieces use `b` or `w` for color, and the first letter of the piece name in capital; example `wK` is the white king


## Chess pieces
* List
  * pawn
  * bishop
  * knight
  * rook
  * queen
  * king
* Create a constructor for each piece that inherits behavior from a `Piece` constructor
* The name of the constructors must be the name of the piece starting with Capital letter
* each piece has:
  * `location`
  * `color`
  * `pieceName`
  * `validMove()`; it receives a target cell string and returns true if the move is valid for this piece


## TDD
Filename `chess_<branchname>.test.js`

Create at least 3 test cases
