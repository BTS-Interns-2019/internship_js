
/**Emmanuel Rubio Navarro
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 */
function ticTacToe(plays) {
  let board=[[0,0,0],[0,0,0],[0,0,0]];  
  for (let i = 0; i < plays.length; i++) {
    xy=plays[i];
    let x = xy.split(",")[0]-1;
    let y = xy.split(",")[1]-1;
    let player= (i%2)+1;
    let winner="";
    let lastPlay=i+1;
    board [x][y] = player;
    status=isSolved(board);    
    switch (status){
      case 1:      
        winner="Player 1";
        finalizar(board);
        return {winner,lastPlay,board}
      case 2:
        winner="Player 2";
        finalizar(board);
        return {winner,lastPlay,board}
      case 0:
        winner="";
        finalizar(board);
        return {winner,lastPlay,board}
    }
  } 
  return {winner,lastPlay,board};
}
function finalizar(tab){
  tab.forEach((val, i,)=>{
    cad="";
    val.forEach((x)=>{
      switch (x){
        case 0:
          cad+=" ";
          break;
        case 1:
          cad+="X";
          break;
        case 2:
          cad+="O";
          break;
      }
    })
    tab[i]=cad;
  })
}
function isSolved(board) {
  let ceros=false;
    for (let i = 0; i < board.length; i++) {
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][1] != 0)return board[i][0];
        if(board[0][i]==board[1][i] && board[1][i]==board[2][i] && board[1][i] != 0)return board[0][i];
        if(board[i].includes(0))ceros=true;
    }
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[1][1]!= 0)return board[1][1];
    if(board[2][0]==board[1][1] && board[1][1]==board[0][2] && board[1][1]!= 0)return board[1][1];
    if(ceros)return -1;
    return 0;
}

module.exports = ticTacToe;