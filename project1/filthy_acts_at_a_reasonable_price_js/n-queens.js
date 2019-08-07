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
  
  // Check if second parameter is an array and n is bigger than 20 or smaller than 4
  if (!Array.isArray(firstQueen) || n > 20 || n < 4) {
    return initialBoard;
  }

  // Vector
  const vector = Array(n);

  vector[firstQueen[1]] = firstQueen[0]; // Place the first Queen

  const column = firstQueen[1]; // Get the column of the firstQueen
  
  return solveBoard(n, vector, column) ? drawBoard(vector) : initialBoard;
}

function drawBoard(vector) {
  const result = [];
  for (let i = 0; i < vector.length; i++) {
    result[i] = Array(vector.length);
    result[i].fill(0);
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < vector.length; j++) {
      if (i === vector[j]) {
        result[i][j] = 1;
      }
    }
  }

  return result;
}

function solveBoard(length, vector, column) {
  if (column === 0) {
    return solveBoardLeftToRight(length, vector, column);
  } else if (column === (length - 1)) {
    return solveBoardRightToLeft(length, vector, column);
  } else if (column > 0 && column < length - 1) {
    return solveBoardFromMiddle(length, vector, column);
  }
}

function solveBoardLeftToRight(length, vector, column) {
  let i = column + 1;
  while (i < length) {
    // console.log(vector);
    for (let j = 0; j < length; j++) {
      // console.log('i: ' + i, 'j: ' + j, 'i + 1: ' + (vector[i-1] + 1), 'i - 1: ' + (vector[i-1] -1),'j - i: ' + (j - i), 'j + i: ' + (j + i));
      if (
        j !== Number.parseInt(vector[i - 1]) && 
        j !== Number.parseInt((vector[i - 1] + 1)) && 
        j !== Number.parseInt((vector[i - 1] - 1)) && 
        !vector.includes(j) &&
        !descDiag.includes(j - i) &&
        !ascDiag.includes(j + i)
      ) {
        vector[i] = j;
        descDiag[i] = (j - i); 
        ascDiag[i] = (j + i);
        break;
      }
    }
    if (typeof vector[i] === 'undefined' || vector[i] === null) {
      vector[i - 1] = undefined;
      i--;
    } else {
      i++;
    }
    
    if (vector.every(num => typeof num === 'undefined')) {
      return false;
    }
  }

  return vector;
}

function solveBoardRightToLeft(length, vector, column) {
  let i = column - 1;
  while (i >= 0) {
    // console.log(descDiag, ascDiag, vector);
    for (let j = 0; j < length; j++) {
      // console.log('i: ' + i, 'j: ' + j, 'i + 1: ' + (vector[i+1] + 1), 'i - 1: ' + (vector[i + 1] -1),'j - i: ' + (j - i), 'j + i: ' + (j + i));
      if (
        j !== Number.parseInt(vector[i + 1]) && 
        j !== Number.parseInt((vector[i + 1] + 1)) && 
        j !== Number.parseInt((vector[i + 1] - 1)) && 
        !vector.includes(j) &&
        !descDiag.includes(j - i) &&
        !ascDiag.includes(j + i)
      ) {
        vector[i] = j;
        descDiag[i] = (j - i); 
        ascDiag[i] = (j + i);
      }
    }
    if (typeof vector[i] === 'undefined' || vector[i] === null) {
      vector[i + 1] = undefined;
      i++;
    } else {
      i--;
    }

    if (vector.every(num => typeof num === 'undefined')) {
      return false;
    }
  }

  return vector;
}

function solveBoardFromMiddle(length, vector, column) {
  if (solveBoardLeftToRight(length, vector, column) && solveBoardRightToLeft(length, vector, column)) {
    return vector;
  }

  return false;
}

module.exports = nQueens;