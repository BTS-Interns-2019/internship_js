const { Piece } = require('../piece_hectors');

// Horse constructor
function Horse(location, color) {
  Piece.call(this, location, color, 'Horse');
}

Horse.prototype = Object.create(Piece.prototype, {
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

      // If any of the target values is out of range
      if (targetRow > 8 || targetRow < 1 || !columns.includes(targetColumn)) {
        return false;
      }

      // the sum of the subtractions between target's and current's rows and columns should be exactly 3
      if (
        (
          Math.abs(targetRow - currentRow)
          + Math.abs(targetColumnNumber - currentColumnNumber)
        ) !== 3
      ) {
        return false;
      }

      return true;
    },
  },
});

module.exports = {
  Horse,
};
