const { Piece } = require('./piece_hectors');
const { Rook } = require('./pieces/rook_hectors');
const { Horse } = require('./pieces/horse_hectors');
const { Bishop } = require('./pieces/bishop_hectors');
const { Queen } = require('./pieces/queen_hectors');
const { King } = require('./pieces/king_hectors');
const { Pawn } = require('./pieces/pawn_hectors');

// Chess constructor
function Board() {
  // Initial pieces
  // whites
  const wR1 = new Rook('A1', 'w');
  const wH1 = new Horse('B1', 'w');
  const wB1 = new Bishop('C1', 'w');
  const wQ = new Queen('D1', 'w');
  const wK = new King('E1', 'w');
  const wB2 = new Bishop('F1', 'w');
  const wH2 = new Horse('G1', 'w');
  const wR2 = new Rook('H1', 'w');
  const wP1 = new Pawn('A2', 'w');
  const wP2 = new Pawn('B2', 'w');
  const wP3 = new Pawn('C2', 'w');
  const wP4 = new Pawn('D2', 'w');
  const wP5 = new Pawn('E2', 'w');
  const wP6 = new Pawn('F2', 'w');
  const wP7 = new Pawn('G2', 'w');
  const wP8 = new Pawn('H2', 'w');

  // blacks
  const bR1 = new Rook('A8', 'b');
  const bH1 = new Horse('B8', 'b');
  const bB1 = new Bishop('C8', 'b');
  const bQ = new Queen('D8', 'b');
  const bK = new King('E8', 'b');
  const bB2 = new Bishop('F8', 'b');
  const bH2 = new Horse('G8', 'b');
  const bR2 = new Rook('H8', 'b');
  const bP1 = new Pawn('A7', 'b');
  const bP2 = new Pawn('B7', 'b');
  const bP3 = new Pawn('C7', 'b');
  const bP4 = new Pawn('D7', 'b');
  const bP5 = new Pawn('E7', 'b');
  const bP6 = new Pawn('F7', 'b');
  const bP7 = new Pawn('G7', 'b');
  const bP8 = new Pawn('H7', 'b');

  this.pieces = [
    // Whites
    wR1,
    wH1,
    wB1,
    wQ,
    wK,
    wB2,
    wH2,
    wR2,
    wP1,
    wP2,
    wP3,
    wP4,
    wP5,
    wP6,
    wP7,
    wP8,

    // Blacks
    bR1,
    bH1,
    bB1,
    bQ,
    bK,
    bB2,
    bH2,
    bR2,
    bP1,
    bP2,
    bP3,
    bP4,
    bP5,
    bP6,
    bP7,
    bP8,
  ];
}

Board.prototype = {
  movePiece(start, target, color) {
    return new Promise((resolve, reject) => {
      const piece = this.pieces.find(p => p.location === start.toUpperCase());

      // no piece at defined start position
      if (!piece) {
        reject(new Error(`There is no piece in the selected ${start} cell`));
      }

      // piece found at specified start position
      if (piece) {
        // piece is the color of the player in turn
        if (piece.color === color) {
          // check if piece is able to move to specified target position
          if (piece.validMove(target)) {
            piece.location = target.toUpperCase();
            resolve(piece);
          } else {
            reject(new Error(`The piece ${piece.name} cannot be moved to ${target}`));
          }
        } else {
          reject(new Error(`The piece at ${start} is not white`));
        }
      }
    });
  },
  moveWhite(start, target) {
    return this.movePiece(start, target, 'w');
  },
  moveBlack(start, target) {
    return this.movePiece(start, target, 'b');
  },
  getBoard() {
    const board = [];
    const columns = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
      5: 'E',
      6: 'F',
      7: 'G',
      8: 'H',
    };

    for (let i = 0; i < 8; i += 1) {
      for (let j = 0; j < 8; j += 1) {
        const currentPosition = columns[j + 1] + (i + 1);
        const piece = this.pieces.find(p => p.location === currentPosition);

        if (piece) {
          board.push(`${piece.color}${piece.pieceName.replace(/\d/g, '')}`);
        } else {
          board.push(' ');
        }
      }
    }

    return board;
  },
};

module.exports = {
  Board,
  Piece,
  Rook,
  Horse,
  Bishop,
  Queen,
  King,
  Pawn,
};
