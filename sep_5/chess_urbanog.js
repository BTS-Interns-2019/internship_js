// Transform the String into numerical coordinates
function mapping(location) {
  const letras = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
  };
  const toMap = location.split('');
  const result = toMap.map((val) => { if (letras[val]) { return letras[val] - 1; } return Number(val) - 1; });
  return result;
}
console.log(mapping('G4'));

function Board(position) {
  const boardGame = new Array(8);
  for (let i = 0; i < boardGame.length; i += 1) {
    boardGame[i] = new Array(8);
    for (let j = 0; j < boardGame.length; j++) {
      boardGame[i][j] = '';
    }
  }
}

function Piece(location, color, pieceName) {
  this.location = location;
  this.color = color;
  this.pieceName = pieceName;
  this.validMove = {};
}
function Pawn(location, color) {
  Piece.call(this, location, color, 'Pawn');
}

Pawn.prototype = Object.create(Piece.prototype, {
  firstMove: {
    value: true,
    writable: true,
  },
  validMove: {
    value(target) {
      const startP = mapping(this.location);
      const goal = mapping(target);
      if (startP[0] < 8 || startP[0] > 0 || startP[1] < 8 || startP[1] > 0 || goal[0] < 8 || goal[0] > 0 || goal[1] < 8 || goal[1] > 0) {
        if (Math.abs(startP[1] - goal[1]) === 1 && startP[0] === goal[0]) {
          return true;
        }
        if (this.firstMove && Math.abs(startP[1] - goal[1]) === 2 && startP[0] === goal[0]) {
          this.firstMove = false;
          return true;
        }
        // if (this.color === 'b' && startP[1] - target[1] === 1 && startP[0] === goal[0]) {
        //   this.location = target;
        //   return true;
        // }
      }
      return false;
    },
  },
});

function Rock(location, color) {
  Piece.call(this, location, color, 'Rock');
}
Rock.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const startP = mapping(this.location);
      const goal = mapping(target);
      if (startP[0] < 8 || startP[0] > 0 || startP[1] < 8 || startP[1] > 0 || goal[0] < 8 || goal[0] > 0 || goal[1] < 8 || goal[1] > 0) {
        if (startP[0] === goal[0] || startP[1] === goal[1]) {
          this.location = target;
          return true;
        }
      }
      return false;
    },
  },
});

function Horse(location, color) {
  Piece.call(this, location, color, 'Horse');
}

Horse.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const startP = mapping(this.location);
      const goal = mapping(target);
      if (startP[0] < 8 || startP[0] > 0 || startP[1] < 8 || startP[1] > 0 || goal[0] < 8 || goal[0] > 0 || goal[1] < 8 || goal[1] > 0) {
        if (Math.abs(startP[0] - goal[0]) + Math.abs(startP[1] - goal[1]) === 3 && goal[0] !== startP[0] && goal[1] !== startP[1]) {
          this.location = target;
          return true;
        }
      }
      return false;
    },
  },
});

function Bishop(location, color) {
  Piece.call(this, location, color, 'Bishop');
}

Bishop.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const startP = mapping(this.location);
      const goal = mapping(target);
      if (startP[0] < 8 || startP[0] > 0 || startP[1] < 8 || startP[1] > 0 || goal[0] < 8 || goal[0] > 0 || goal[1] < 8 || goal[1] > 0) {
        if (Math.abs(goal[0] - startP[0]) !== Math.abs(goal[1] - startP[1])) {
          return false;
        }
        return true;
      }
      return false;
    },
  },
});

function Queen(location, color) {
  Piece.call(this, location, color, 'Queen');
}
Queen.prototype = Object.create(Piece.prototype, {
  validMove: {
    validMove(target) {
      const startP = mapping(this.location);
      const goal = mapping(target);
      if (startP[0] < 8 || startP[0] > 0 || startP[1] < 8 || startP[1] > 0 || goal[0] < 8 || goal[0] > 0 || goal[1] < 8 || goal[1] > 0) {
        if (Math.abs(goal[0] - startP[0]) === Math.abs(goal[1] - startP[1])) {
          return false;
        }
        return true;
      }
      return false;
    },
  },
});

function King(location, color) {
  Piece.call(this, location, color, '´King');
}

King.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const startP = mapping(this.location);
      const goal = mapping(target);
      if (startP[0] < 8 || startP[0] > 0 || startP[1] < 8 || startP[1] > 0 || goal[0] < 8 || goal[0] > 0 || goal[1] < 8 || goal[1] > 0) {
        if (goal[1] === startP[1] && (Math.abs(goal[0] - startP[0]) === 1)) {
          return true;
        }
        if (goal[0] === startP[0] && (Math.abs(goal[1] - startP[1])) === 1) {
          return true;
        }
        if (Math.abs(goal[0] - startP[0]) === 1 && Math.abs(goal[1] - startP[1]) === 1) {
          return true;
        }
      }
    },
  },
});
const p = new Pawn('G2', 'w');
const r1 = new Rock('G7', 'w');
const n = new Horse('B1', 'w');
const alfil1 = new Bishop('C1', 'w');
const Bohemian = new Queen('E1', 'w');
console.log(p.pieceName);
console.log(p.color);
console.log(p.validMove('G3'));

console.log(n.location);
console.log(n.validMove('A2'));
console.log(n.location);
console.log(alfil1.validMove('C2'));


// suma de los mov x y == 3
// La resta dse donde estas en y + la resta de a donde te vas a mover en X
