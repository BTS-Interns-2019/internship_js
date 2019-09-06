const { Piece } = require('../piece_hectors');

// Pawn constructor
function Pawn(location, color) {
  Piece.call(this, location, color, 'Pawn');
}

Pawn.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      // rows
      const targetRow = +target.substring(target.length - 1);
      const currentRow = +this.location.substring(this.location.length - 1);

      // if the target is outside the board
      if (targetRow > 8 || targetRow < 1) {
        return false;
      }

      // pawns can only move one row (in this implementation of chess)
      // white pieces can only move up one row at a time
      if (targetRow - currentRow !== 1) {
        return false;
      }

      // white pawns can't move backwards
      if (this.color === 'w' && targetRow <= currentRow) {
        return false;
      }

      // black pawns can't move backwards
      if (this.color === 'b' && targetRow >= currentRow) {
        return false;
      }

      return true;
    },
  },
});

module.exports = {
  Pawn,
};
