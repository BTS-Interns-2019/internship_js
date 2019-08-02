
/**
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 *  The function receives 1 parameter
  * `plays` as an array
    * Each element is an string representing coordinades in the board `x,y`.
    * `Player 1` is the one who starts, then `Player 2` is the second play, then `Player 1` again, and so on...
* The function will return an object containing
  * `winner`
  * `lastPlay` an integer the last played `play` starting in 1
  * `board` An array of 3 items representing the final state of the board
    * Each item is a 3-characters-string
    * `'X'` is player 1
    * `'O'` (letter o') is player 2
    * `' '` is an empty space
 */
function ticTacToe(plays) {
  function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substr(0, index) + chr + str.substr(index + 1);
  }
  let currentPlay = 1
  let output = {};
  let board = ["   ", "   ", "   "]
  let winner = ''
  let lastPlay = 0
  let terminado = false;
  for (let i = 0; i < plays.length && !terminado; i++) {
    let play = plays[i]
    let x = play.charAt(0)
    let y = play.charAt(2)
    board[x - 1] = setCharAt(board[x - 1], y - 1, currentPlay == 1 ? 'X' : 'O')
    //verificar si se acabo
    for (let f = 0; f < 3; f++) {
      let columna = board[0].charAt(f) + board[1].charAt(f) + board[2].charAt(f)
      let diagonal = ''
      if (f == 0) {
        diagonal = board[0].charAt(f) + board[1].charAt(1) + board[2].charAt(2)
      } else if (f == 2) {
        diagonal = board[2].charAt(f) + board[1].charAt(1) + board[0].charAt(0)
      }
      if (board[f] == 'OOO' || columna == 'OOO' || diagonal == 'OOO') {
        terminado = true;
        winner = "Player 2"
        lastPlay = i + 1;
      }
      if (board[f] == 'XXX' || columna == 'XXX' || diagonal == 'OOO') {
        terminado = true;
        winner = "Player 1"
        lastPlay = i + 1;
      }
    }
    currentPlay = currentPlay == 1 ? 2 : 1
  }
  output.winner = winner;
  output.lastPlay = lastPlay;
  output.board = board;
  return output;
}
samplePlay2 = [
  '1,1',
  '1,2',
  '2,1',
  '2,2',
  '3,2',
  '3,1',
  '1,3',
  '2,3',
  '3,3'
]
console.log(ticTacToe(samplePlay2))
module.exports = ticTacToe;