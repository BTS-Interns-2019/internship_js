function nQueens(n, firstQueen) {
  // Create the board 
  const board = [];
  const initialBoard = [];
  for (let i = 0; i < n; i++) {
    board[i] = Array(n);
    board[i].fill(0);
    initialBoard[i] = Array(n);
    initialBoard[i].fill(0);
  }
  
  // Check if second parameter is an array
  if (!Array.isArray(firstQueen)) {
    return board;
  }

  board[firstQueen[0]][firstQueen[1]] = 1; // Place the first Queen

  const column = firstQueen[1]; // Get the column of the firstQueen
  return solveBoard(board, column) ? board : initialBoard;
}

function solveBoard(board, column) {
  if (column === 0) {
    return solveBoardFromBeginning(board, column);
  } else if (column === (board.length - 1)) {
    return solveBoardFromEnd(board, column);
  } else if (column > 0 && column < board.lenght - 1) {
    return solveBoardFromMiddle(board, column);
  }
}

function solveBoardFromBeginning(board, column) {
  if (column >= board.length) { // when all Queens are placed correctly (we reached the end of the board)
    return true;
  }

  for (let i = 0; i < board.length; i++) {
    if (isPositionValid(board, i, column)) { // check for each row if Queen can be placed in this spot
      board[i][column] = 1;

      if (solveBoard(board, column + 1)) { // recursively go for the next column
        return true;
      }
      
      board[i][column] = 0; // if the position of the current Queen didn't work for the next Queens
    }
  }

  return false; // no possible order was found
}

function solveBoardFromEnd(board, column) {
  if (column <= 0) { // when all Queens are placed correctly (we reached the end of the board)
    return true;
  }

  for (let i = 0; i < board.length; i++) {
    if (isPositionValid(board, i, column)) { // check for each row if Queen can be placed in this spot
      board[i][column] = 1;

      if (solveBoard(board, column - 1)) { // recursively go for the next column
        return true;
      }

      board[i][column] = 0; // if the position of the current Queen didn't work for the next Queens
    }
  }

  return false; // no possible order was found
}

function solveBoardFromMiddle(board, column) {
  return solveBoardFromBeginning(board, column) && solveBoardFromEnd(board, column); 
}

function isPositionValid(board, row, column) {
  for (let i = 0; i < column; i++) {
    if (board[row][i]) { // check if Queen is on the left 
      return false;
    }
  }
  
  for (let i = row, j = column; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j]) { // check if a Queen exists on the upper left diagonal 
      return false;
    }
  }

  for (let i = row, j = column; i < board.length && j >= 0; i++, j--) {
    if (board[i][j]) { // check if a Queen exists on the lower left diagonal
      return false;
    }
  }

  return true;
}

console.log(nQueens(4, [1, 3]));

module.exports = nQueens;