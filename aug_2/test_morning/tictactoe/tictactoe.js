
/**Edgar David Peregrino Jimenez
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 */
function ticTacToe(plays) {
var win = {
winner: "",
  lastplay:"",
  board:[]
};


function checkWinner(board) {
		for (let a = 0; a < 8; a++) {
			let line;
			switch (a) {
			case 0:
				line = board[0] + board[1] + board[2];
				break;
			case 1:
				line = board[3] + board[4] + board[5];
				break;
			case 2:
				line = board[6] + board[7] + board[8];
				break;
			case 3:
				line = board[0] + board[3] + board[6];
				break;
			case 4:
				line = board[1] + board[4] + board[7];
				break;
			case 5:
				line = board[2] + board[5] + board[8];
				break;
			case 6:
				line = board[0] + board[4] + board[8];
				break;
			case 7:
				line = board[2] + board[4] + board[6];
				break;
			}
			if (line.equals("XXX")) {
        win.winner = "player 2"
        win.lastplay = line

				return win;
			} else if (line.equals("OOO")) {

        win.winner = "player 2"
        win.lastplay = line;
				return win;
			}
		}

  }

 // return {};
}

