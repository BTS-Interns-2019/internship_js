const { Piece } = require('../piece_hectors');

// Horse constructor
function Horse(location, color) {
  Piece.call(this, location, color, 'Horse');
}

Horse.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
      // get the numerical value for each column (target and current)
      let targetColumn = target.substring(0, 1);
      let currentColumn = this.location.substring(0, 1);
      targetColumn = columns.indexOf(targetColumn) + 1;
      currentColumn = columns.indexOf(currentColumn) + 1;
      const targetRow = +target.substring(target.length - 1);
      const currentRow = +this.location.substring(this.location.length - 1);

      // the sum of the subtractions between target's and current's rows and columns should be exactly 3
      if (
        (
          Math.abs(targetRow - currentRow)
          + Math.abs(targetColumn - currentColumn)
        ) !== 3
      ) {
        return false;
      }

      // If any of the target values is out of range
      if (targetRow > 8 || targetRow < 1 || !columns.hasOwnProperty(targetColumn)) {
        return false;
      }

      return true;
    },
  },
});

module.exports = {
  Horse,
};
