//Miguel Angel Vivanco Maldonado
/**
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 */
function ticTacToe(plays) {
  let player1 = plays.filter((actual,i)=>{
    if(i%2 == 0){
      return actual;
    }
  });
  let player2 = plays.filter((actual,i)=>{
    if(i%2 == 1){
      return actual;
    }
  });
  player1=player1.sort();
  player2=player2.sort();
  let winner, turns=0,div1, div2;
  aux1=[];
  aux2=[];
  let board =['   ', '   ', '   '];
  for(let i=0;i<plays.length;i++){
    //console.log("Player 1 turn");
    aux1.push(player1[i]);
    //console.log("Historial "+aux1);
    let coord1=player1[i].split(",");
    let y1=coord1[0]-1;
    //console.log("y1 "+y1);
    let x1=coord1[1]-1;
    //console.log("x1 "+x1);
    //console.log("board s-> "+board[y1]);
    div1=board[y1].split('');
    div1.splice(x1,1,'X');
    board[y1]=div1.join('');
    //console.log("Tablero "+board);
    turns=turns+1;
    //console.log(turns);
    if(wins(aux1)==true){
      winner='Player 1';
      //console.log("Player 1 wins");
      //console.log("Turnos "+turns);
      break;
    }
    //console.log("Player 1 turn");
    aux2.push(player2[i]);
    //console.log("Historial "+aux2);
    let coord2=player2[i].split(",");
    let y2=coord2[0]-1;
    //console.log("y2 "+y2);
    let x2=coord2[1]-1;
    //console.log("x2 "+x2);
    //console.log("board s-> "+board[y2]);
    div2=board[y2].split('');
    div2.splice(x2,1,'O');
    board[y2]=div2.join('');
    
    //console.log("Tablero "+board);
    turns=turns+1;
    //console.log(turns);
    if(wins(aux2)==true){
      winner='Player 2';
      //console.log("Player 2 wins");
      //console.log("Turnos "+turns);
      break;
    }
  }
  return {winner:winner,lastPlay:turns,board:board};
}

function wins(player){
  if(player.length>2){
    if(player[0]=='1,1'){
      if(player[1]=='1,2'&&player[2]=='1,3'){
        return true;
      }else if(player[1]=='2,1'&&player[2]=='3,1'){
        return true;
      }else if(player[1]=='2,2'&&player[2]=='3,3'){
        return true;
      }else{
        return false;
      }
    }else if(player[0]=='1,2'){
      if(player[1]=='2,2'&&player[2]=='3,2'){
        return true;
      }else{
        return false;
      }
    }else if(player[0]=='1,3'){
      if(player[1]=='2,3'&&player[2]=='3,3'){
        return true;
      }else if(player[1]=='2,2'&&player[2]=='3,1'){
        return true;
      }else{
        return false;
      }
    }else if(player[0]=='2,1'){
      if(player[1]=='2,2'&&player[2]=='2,3'){
        return true;
      }else{
        return false;
      }
    }else if(player[0]=='3,1'){
      if(player[1]=='3,2'&&player[2]=='3,3'){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }else{
    return false;
  }
}

module.exports = ticTacToe;