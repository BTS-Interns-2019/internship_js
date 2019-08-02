// Hector Soto Garcia
/**
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 */
function ticTacToe(plays) {
  const playsByPlayer = {
    player1: [],
    player2: [],
  };

  plays.forEach((play, index) => {
    if (index === 0 || index % 2 === 0) {
      playsByPlayer.player1.push(play.split(','));
    } else {
      playsByPlayer.player2.push(play.split(','));
    }
  });

  let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
  let winner;

  plays.forEach((play, index, plays) => {
    play = play.split(',');
    for (let row = 0; row < board.length; row++) {
      for (let column = 0; column < board.length; column++) {
        if (play[0] - 1 == row && play[1] - 1 == column) {
          if (playsByPlayer.player1.some(pos => pos.every((elem, index) => elem === play[index]))) {
            board[row][column] = 'X';
          } else {
            board[row][column] = 'O';
          }
        }
        winner = checkForVictory(board);
        if (winner) {
          break;
        }
      }
    }
  });

  board = board.map(row => row.join(''));
  
  return {
    winner,
    lastPlay: winner === 'Player 1' ? plays.length - 1 : plays.length,
    board
  };
}

function checkForVictory(board) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X') {
      return 'Player 1';
    } else if (board[1][i] === 'X' && board[2][i] === 'X' && board[2][i] === 'X') {
      return 'Player 1';
    } else if (board[1][1] === 'X' && board[2][2] === 'X' && board[3][3] === 'X') {
      return 'Player 1';
    } else if (board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O') {
      return 'Player 2';
    } else if (board[1][i] === 'O' && board[2][i] === 'O' && board[2][i] === 'O') {
      return 'Player 2';
    } else if (board[1][1] === 'O' && board[2][2] === 'O' && board[3][3] === 'O') {
      return 'Player 2';
    }
  }
  return '';
}

module.exports = ticTacToe;