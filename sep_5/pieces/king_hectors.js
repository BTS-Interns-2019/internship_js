const { Piece } = require('../piece_hectors');

// King constructor
function King(location, color) {
  Piece.call(this, location, color, 'King');
}

King.prototype = Object.create(Piece.prototype, {
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

      // if target is one space away in a vertical manner
      if (
        targetColumn === currentColumn
        && (Math.abs(targetRow - currentRow) === 1)
      ) {
        return true;
      }

      // if the target is one space away in a horizontal manner
      if (targetRow === currentRow && Math.abs(targetColumnNumber - currentColumnNumber) === 1) {
        return true;
      }

      // if the target is one space away in a diagonal manner
      if (
        Math.abs(targetRow - currentRow) === 1
        && Math.abs(targetColumnNumber - currentColumnNumber) === 1
      ) {
        return true;
      }
      
      return false;
    },
  },
});

module.exports = {
  King,
};
