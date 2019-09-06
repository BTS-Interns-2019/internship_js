const { Piece } = require('../piece_hectors');

// Bishop constructor
function Bishop(location, color) {
  Piece.call(this, location, color, 'Bishop');
}

Bishop.prototype = Object.create(Piece.prototype, {
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

      // if the substraction between target's and current's rows and columns are equal
      if (Math.abs(targetRow - currentRow) !== Math.abs(targetColumnNumber - currentColumnNumber)) {
        return false;
      }

      return true;
    },
  },
});

module.exports = {
  Bishop,
};
