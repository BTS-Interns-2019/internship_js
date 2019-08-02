/**
 * Cristian Humberto Plascencia Angulo
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 */
function ticTacToe(plays) {
  retObj = {winner:"as", lastPlay:"",bord:["  a ", "  b ", "  ñ ",]};
  jugadas = 0;
  jugador=0;
  jug1=[];
  jug2=[];
  for (let i = 0; i < plays.length; i++) {
    plays[i] = plays[i].trim()
    jugadas++;
    if(jugador==0){
      jugador+=1;
      jug1[jug1.length] = plays[i];
      llenartablero(plays[i], "X");
      if(yagano(jug1,jugador)){
        retObj.winner="Player 1";
        retObj.lastPlay=jugadas;

      }
    }else if(jugador>0){
      jugador-=1;
      jug2[jug2.length] = plays[i];
      llenartablero(plays[i], "O");
      if(yagano(jug2, jugador)){
        retObj.winner="Player 1";
        retObj.lastPlay=jugadas;
      }
    }
    
  }
  function llenartablero(pos, car){
    pos = pos.split(",");
    //retObj.bord[pos[0]-1][pos[1]-1] = car;
    retObj.bord[pos[0]][pos[1]] = retObj.bord[pos[0]][pos[1]] = car
    var replaceAt = (string, index, replace) => {
      return string.substring(0, index) + replace + string.substring(index + 1);
    }
    //replaceAt( retObj.bord[pos[0]-1],[pos[1]-1],car)
    //console.log(retObj.bord)
    //substr_replace(retObj.bord[pos[0]], pos[1], car);
    //console.log(JSON.stringify(retObj.bord,null));
  }
  function yagano(arr, jug){
    if(arr.indexOf("1,1")!=-1){
      if(arr.indexOf("2,1")!=-1){
        if(arr.indexOf("3,1")){
          return true;
        }
      }  
    }
    if(arr.indexOf("1,1")!=-1){
      if(arr.indexOf("1,2")!=-1){
        if(arr.indexOf("1,3")){
          return true;
        }
      }  
    }
    if(arr.indexOf("1,1")!=-1){
      if(arr.indexOf("2,2")!=-1){
        if(arr.indexOf("3,3")){
          return true;
        }
      }  
    }
    if(arr.indexOf("3,1")!=-1){
      if(arr.indexOf("3,2")!=-1){
        if(arr.indexOf("3,3")){
          return true;
        }
      }  
    }
    if(arr.indexOf("1,3")!=-1){
      if(arr.indexOf("2,3")!=-1){
        if(arr.indexOf("3,3")){
          return true;
        }
      }  
    }
    return false;
  }
  return retObj;
}
var samplePlay  = [
    ' 1,1 ' ,
    ' 1,2 ' ,
    ' 2,1 ' ,
    ' 2,2 ' ,
    ' 3,1 ' ,
    ' 3,2 '
  ];

console.log(ticTacToe(samplePlay));