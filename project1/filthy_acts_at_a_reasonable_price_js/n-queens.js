// Descendant Diagonal
const descDiag = [];
// Ascendant Diagonal
const ascDiag = [];

function nQueens(n, firstQueen) {
  // Create the board 
  const initialBoard = [];
  for (let i = 0; i < n; i++) {
    initialBoard[i] = Array(n);
    initialBoard[i].fill(0);
  }
  
  // Check if second parameter is an array
  if (!Array.isArray(firstQueen)) {
    return initialBoard;
  }

  // Vector
  const vector = Array(n);

  vector[firstQueen[1]] = firstQueen[0]; // Place the first Queen

  const column = firstQueen[1]; // Get the column of the firstQueen
  return solveBoard(vector, column);
  // return solveBoard(vector, column) ? board : initialBoard; // Draw the board 
}

function solveBoard(vector, column) {
  if (column === 0) {
    return solveBoardLeftToRight(vector, column);
  } else if (column === (vector.length - 1)) {
    return solveBoardRightToLeft(vector, column);
  } else if (column > 0 && column < vector.length - 1) {
    return solveBoardFromMiddle(vector, column);
  }
}

function solveBoardLeftToRight(vector, column) {
  if (column <= 0) {
    return false;
  }

  for (let i = column + 1; i < vector.length; i++) {
    console.log(vector);
    for (let j = 0; j < vector.length; j++) {
      if (
        j !== vector[i] && 
        j !== (vector[i - 1] + 1) && 
        j !== (vector[i - 1] - 1) && 
        !vector.includes(j) &&
        !descDiag.includes(j - i) &&
        !ascDiag.includes(j + i)
      ) {
        vector[i] = j;
        descDiag.push(j - i); 
        ascDiag.push(j + i);
        break;
      }
    }

    if (typeof vector[i] === 'undefined' || vector[i] === null) {
       return solveBoardLeftToRight(vector, column - 1);
    }
  }

  return vector;
}

function solveBoardRightToLeft(vector, column) {
  for (let i = column - 1; i >= 0; i--) {
    for (let j = 0; j < vector.length; j++) {
      if (
        j !== vector[i] && 
        j !== (vector[i + 1] + 1) && 
        j !== (vector[i + 1] - 1) && 
        !vector.includes(j) &&
        !descDiag.includes(j - i) &&
        !ascDiag.includes(j + i)
      ) {
        vector[i] = j;
        descDiag.push(j - i); 
        ascDiag.push(j + i);
        break;
      }
    }

    // if (typeof vector[i] === 'undefined') {
    //   i = i + 2;
    //   if (i > column) {
    //     i = vector.length - 1;
    //     solveBoardLeftToRight(vector, i)
    //   }
    // }
  }

  return vector;
}

function solveBoardFromMiddle(vector, column) {
  solveBoardLeftToRight(vector, column);
  console.log(vector);
  solveBoardRightToLeft(vector, column);
  // return vector;
}

console.log(nQueens(4, [0, 1]));

module.exports = nQueens;