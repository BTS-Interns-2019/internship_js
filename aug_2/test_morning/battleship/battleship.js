
/**
 * battleship
 */
function isBoardReady(boats) {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
  const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let board = [];

  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < columns.length; j++) {
      board.push(rows[i] + columns[j]);
    }
  }

  let inSameColumn;
  let inSameRow;

  for (let i = 0; i < boats.length; i++) {
    boats[i] = boats[i].map(coordinate => {
      coordinate = coordinate.split('');
      coordinate.sort((a, b) => a < b);
      return coordinate.join('');
    });

    let firstLetter = boats[i][0].split('')[0];
    let firstNumber = boats[i][0].split('')[1];

    inSameRow = boats[i].every(coordinate => {
      coordinate = coordinate.split('');
      return coordinate[0] === firstLetter;
    });

    inSameColumn = boats[i].every(coordinate => {
      coordinate = coordinate.split('');
      return coordinate[1] === firstNumber;
    });

    console.log(inSameColumn, inSameRow);

    // if (!inSameColumn && !inSameRow) {
    //   return false;
    // }
  }

  return true;
}

isBoardReady([
  ['B8', 'C8'],
  ['C4', '4F'],
  ['2B', 'D2'],
  ['H5', 'H1'],
  ['J8', 'J6'],
])

module.exports = isBoardReady;
