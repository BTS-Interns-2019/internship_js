const { Piece } = require('../piece_hectors');

// Bishop constructor
function Bishop(location, color) {
  Piece.call(this, location, color, 'Bishop');
}

Bishop.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const targetRow = +target.substring(target.length - 1);
      const currentRow = +this.location.substring(this.location.length - 1);

      // if the target is outside the board
      if (targetRow > 8 || targetRow < 1) {
        return false;
      }

      // pawns can only move one row (in this implementation of chess)
      // white pieces can only move up one row at a time
      if (this.color === 'w' && currentRow + targetRow !== 1) {
        return false;
      }

      // black pieces can only move down one row at a time
      if (this.color === 'b' && currentRow - targetRow !== 1) {
        return false;
      }

      return true;
    },
  },
});

module.exports = {
  Bishop,
};
