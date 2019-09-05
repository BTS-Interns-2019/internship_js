const { Piece } = require('../piece_hectors');

// Rook constructor
function Rook(location, color) {
  Piece.call(this, location, color, 'Rook');
}

Rook.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      const targetColumn = target.substring(0, 1);
      const currentColumn = this.location.substring(0, 1);
      const targetRow = target.substring(target.length - 1);
      const currentRow = this.location.substring(this.location.length - 1);

      // If any of the target values is out of range
      if (targetRow > 8 || targetRow < 1 || !columns.includes(targetColumn)) {
        return false;
      }

      // if the target is in a diagonal respecting the current position
      if (targetColumn !== currentColumn && targetRow !== currentRow) {
        return false;
      }

      return true;
    },
  },
});

module.exports = {
  Rook,
};
