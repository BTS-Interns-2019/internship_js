const { Piece } = require('../piece_hectors');

// Queen constructor
function Queen(location, color) {
  Piece.call(this, location, color, 'Queen');
}

Queen.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      // board columns
      const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      // letter-based columns
      const targetColumn = target.substring(0, 1);
      const currentColumn = this.location.substring(0, 1);
      // number-based columns
      const targetColumnNumber = columns.indexOf(targetColumn) + 1;
      const currentColumnNumber = columns.indexOf(currentColumn) + 1;
      // rows
      const targetRow = +target.substring(target.length - 1);
      const currentRow = +this.location.substring(this.location.length - 1);

      // if the target is outside the board
      if (targetRow > 8 || targetRow < 1 || !columns.includes(targetColumn)) {
        return false;
      }

      // first check if it moves in a vertical or horizontal manner
      if (targetColumn === currentColumn || targetRow === currentRow) {
        return true;
      }

      // check if the move is diagonal
      if (Math.abs(targetRow - currentRow) === Math.abs(targetColumnNumber - currentColumnNumber)) {
        return true;
      }
      
      return false;
    },
  },
});

module.exports = {
  Queen,
};
