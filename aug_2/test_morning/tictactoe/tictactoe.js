//Urbano Gonzalez Patiño
/**
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 */
function ticTacToe(plays) {
  let player = false;
  let players = "";
  let player2 = "";
  let board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]];
    let inGame="";
    let ans;
    let ansO;
    let winner;
    let lastPlay=0;
    game= {winner:"", lastPlay:0,board:[]};
  for (let i = 0; i < plays.length; i++) {
    console.log(player)
    if (player == false) {
      players = "X";

    } else if (player == true) {
      players = "O"
    }

    switch (plays[i]) {
      case "1,1":
        board[0][0] = players;
        // player=true;
        break;
      case "1,2":
        board[0][1] = players;
        // player=false;
        break;
      case "1,3":
        board[0][2] = players;
        // player=true;
        break;
      case "2,1":
        board[1][0] = players;
        // player= false;
        break;
      case "2,2":
        board[1][1] = players;
        // player=true
        break;
      case "2,3":
        board[1][2] = players;
        // player=false;
        break;
      case "3,1":
        board[2][0] = players;
        // !players
        break;
      case "3,2":
        board[2][1] = players;
        // !player
        break;
      case "3,3":
        board[2][2] = players;
        // !player
        break;
        conso.log("Just numbers")
      default:
        break;
    }
    
    ans = board.every((val, i, ) => board[0][0] === "X" && board[1][0] === "X" && board[2][0] === "X" || board[0[1] === "X" && board[1][1] === "X" && board[2][1] === "X" || board[0][2] === "X" && board[1][2] === "X" && board[2][2] === "X" || board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X" || board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X"]);

    ansO = board.every((val, i, ) => board[0][0] === "O" && board[1][0] === "O" && board[2][0] === "O" || board[0[1] === "O" && board[1][1] === "X" && board[2][1] === "O" || board[0][2] === "O" && board[1][2] === "O" && board[2][2] === "O" || board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O" || board[0][2] === "O" && board[1][1] === "O" && board[2][0] === "O"]);

     lastPlay++; 
    if (ans) {
      winner="Player 1";
      break
      return 
    }else if (ansO){
      winner="Player 2";
      break
    }
    

    if (player == false) {
      player = true;
    } else {
      player = false
    }

  }//For

  game.winner=winner;
  game.lastPlay=lastPlay;
for (let i = 0; i < board.length; i++) {
  game.board.push(board[i].join());

  
}


  console.log(JSON.stringify(game, null))
  return game;
}

console.log(ticTacToe([
  '1,1',
  '1,2',
  '1,3',
  '2,2',
  '2,3',
  '3,2'
  
]))
// ["1,1", "1,2", "2,1", "2,2", "3,1", "3,2"]
module.exports = ticTacToe;