class Board {
  constructor() {
    const letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const number = ['1', '2', '3', '4', '5', '6', '7', '8'];

    this.cells = new Array(8);
    for (let i = 0; i < this.cells.length; i += 1) {
      this.cells[i] = new Array(8);
    }

    letter.forEach((letter, posl) => {
      number.forEach((number, posn) => {
        const actual = letter + number;
        this.cells[posl][posn] = { [actual]: '  ', instanceName: '' };
      });
    });
  }

  moveWhite(start, target) {
    const prom = new Promise((onError, onSuccess) => {
      const coordStart = new Array(2);
      coordStart[0] = start.codePointAt(0) - 65;
      coordStart[1] = parseInt(start.charAt(1), 10) - 1;
      const piece = this.cells[coordStart[0]][coordStart[1]];
      if (piece !== 'nn') {
        if (piece.charAt(0) === 'w') {
          switch (piece.charAt(1)) {
            case 'P': {}
            case 'B': {}
            case 'H': {}
            case 'R': {}
            case 'Q': {}
            case 'K': {}
            default: {}
          }
        } else {
          onError(new Error(`The piece at ${start} is not white`));
        }
      } else {
        onError(new Error(`There is no piece in the selected ${start} cell`));
      }
    });
  }

  getBoard() {
    const arrayBoard = new Array(8);
    for (let i = 0; i < arrayBoard.length; i += 1) {
      arrayBoard[i] = new Array(8);
    }

    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        arrayBoard[i][j] = Object.values(this.cells[i][j]);
      }
    }
    return arrayBoard;
  }
}

class Piece {
  constructor(location, color, pieceName) {
    this.location = location;
    this.color = color;
    this.pieceName = pieceName;
  }
}

class Pawn extends Piece {
  constructor(location, color) {
    super(location, color, 'pawn');
  }

  validMove(target) {
    // Location and Target Decomposition;
    const coordLocation = this.location.split('');
    const coordTarget = target.split('');

    // If white +1, if black -1
    let signed;

    switch (this.color) {
      case 'white': { signed = 1; break; }
      case 'black': { signed = -1; break; }
      default: { signed = 0; break; }
    }

    if (parseInt(coordTarget[1], 10) === parseInt(coordLocation[1], 10) + signed) {
      return true;
    }
    return false;
  }
}

class Bishop extends Piece {
  constructor(location, color) {
    super(location, color, 'bishop');
  }

  validMove(target) {
    const coordLocation = new Array(2);
    coordLocation[0] = parseInt(this.location.codePointAt(0), 10) - 65;
    coordLocation[1] = parseInt(this.location.charAt(1), 10) - 1;

    const possible = [];

    // izquierda - arriba
    for (let i = coordLocation[0] - 1, j = coordLocation[1] + 1; i >= 0; i -= 1, j += 1) {
      if (j > 7) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    // derecha - arriba
    for (let i = coordLocation[0] + 1, j = coordLocation[1] + 1; i < 8; i += 1, j += 1) {
      if (j > 7) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    // izquierda - abajo
    for (let i = coordLocation[0] - 1, j = coordLocation[1] - 1; i >= 0; i -= 1, j -= 1) {
      if (j < 0) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    // derecha - abajo
    for (let i = coordLocation[0] + 1, j = coordLocation[1] - 1; i <= 8; i += 1, j -= 1) {
      if (j < 0) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (possible.includes(target)) { return true; }
    return false;
  }
}

class Rook extends Piece {
  constructor(location, color) {
    super(location, color, 'rook');
  }

  validMove(target) {
    const coordLocation = new Array(2);
    coordLocation[0] = parseInt(this.location.codePointAt(0), 10) - 65;
    coordLocation[1] = parseInt(this.location.charAt(1), 10) - 1;

    const possible = [];

    // horizontal
    for (let i = 0; i < 8; i += 1) {
      if (i !== coordLocation[0]) {
        const letter = String.fromCharCode(i + 65);
        const number = this.location.charAt(1);
        const newPossible = letter + number;
        possible.push(newPossible);
      }
    }

    // vertical
    for (let i = 0; i < 8; i += 1) {
      if (i !== coordLocation[1]) {
        const letter = this.location.charAt(0);
        const number = (i + 1).toString();
        const newPossible = letter + number;
        possible.push(newPossible);
      }
    }

    if (possible.includes(target)) { return true; }
    return false;
  }
}

class Queen extends Piece {
  constructor(location, color) {
    super(location, color, 'queen');
  }

  validMove(target) {
    const coordLocation = new Array(2);
    coordLocation[0] = parseInt(this.location.codePointAt(0), 10) - 65;
    coordLocation[1] = parseInt(this.location.charAt(1), 10) - 1;

    const possible = [];

    // horizontal
    for (let i = 0; i < 8; i += 1) {
      if (i !== coordLocation[0]) {
        const letter = String.fromCharCode(i + 65);
        const number = this.location.charAt(1);
        const newPossible = letter + number;
        possible.push(newPossible);
      }
    }

    // vertical
    for (let i = 0; i < 8; i += 1) {
      if (i !== coordLocation[1]) {
        const letter = this.location.charAt(0);
        const number = (i + 1).toString();
        const newPossible = letter + number;
        possible.push(newPossible);
      }
    }

    // izquierda - arriba
    for (let i = coordLocation[0] - 1, j = coordLocation[1] + 1; i >= 0; i -= 1, j += 1) {
      if (j > 7) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    // derecha - arriba
    for (let i = coordLocation[0] + 1, j = coordLocation[1] + 1; i < 8; i += 1, j += 1) {
      if (j > 7) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    // izquierda - abajo
    for (let i = coordLocation[0] - 1, j = coordLocation[1] - 1; i >= 0; i -= 1, j -= 1) {
      if (j < 0) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    // derecha - abajo
    for (let i = coordLocation[0] + 1, j = coordLocation[1] - 1; i <= 8; i += 1, j -= 1) {
      if (j < 0) { break; }
      const letter = String.fromCharCode(i + 65);
      const number = (j + 1).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (possible.includes(target)) { return true; }
    return false;
  }
}

class King extends Piece {
  constructor(location, color) {
    super(location, color, 'queen');
  }

  validMove(target) {
    const coordLocation = new Array(2);
    coordLocation[0] = parseInt(this.location.codePointAt(0), 10) - 65;
    coordLocation[1] = parseInt(this.location.charAt(1), 10) - 1;

    const possible = [];

    if (coordLocation[0] > 0) {
      console.log('si entra1');
      const letter = String.fromCharCode(coordLocation[0] - 1 + 65);
      const number = coordLocation[1] + 1;
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (coordLocation[0] < 7) {
      console.log('si entra2');
      const letter = String.fromCharCode(coordLocation[0] + 1 + 65);
      const number = coordLocation[1] + 1;
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (coordLocation[1] > 0) {
      console.log('si entra3');
      const letter = this.location.charAt(0);
      const number = (coordLocation[1] - 2).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (coordLocation[1] < 7) {
      console.log('si entra4');
      const letter = this.location.charAt(0);
      const number = (coordLocation[1] + 2).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (coordLocation[0] > 0 && coordLocation[1] > 0) {
      console.log('si entra5');
      const letter = String.fromCharCode(coordLocation[0] - 1 + 65);
      const number = (coordLocation[1] - 2).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (coordLocation[0] > 0 && coordLocation[1] < 7) {
      console.log('si entra6');
      const letter = String.fromCharCode(coordLocation[0] - 1 + 65);
      const number = (coordLocation[1] + 2).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (coordLocation[0] < 7 && coordLocation[1] > 0) {
      console.log('si entra7');
      const letter = String.fromCharCode(coordLocation[0] + 1 + 65);
      const number = (coordLocation[1] - 2).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }

    if (coordLocation[0] < 7 && coordLocation[1] < 7) {
      console.log('si entra8');
      const letter = String.fromCharCode(coordLocation[0] + 1 + 65);
      const number = (coordLocation[1] + 2).toString();
      const newPossible = letter + number;
      possible.push(newPossible);
    }
    console.log(possible);

    if (possible.includes(target)) { return true; }
    return false;
  }
}

let board = new Board();
