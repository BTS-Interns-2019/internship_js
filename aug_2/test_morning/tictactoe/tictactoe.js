
/**
 * ticTacToe
 * @param {Array} plays
 * @returns {object}
 */
function ticTacToe(plays) {
  var matriz = [[" ", " ", " "],
                [" ", " ", " "],
                [" ", " ", " "]];
  var coordenada;
  var turno;
  var ganador = "";

  for(var a=0; a<plays.length; a++){
    coordenada = plays[a].split(",");
    coordenada[0] -= 1;
    coordenada[1] -= 1;

    a%2 === 0 ? turno = 'X' : turno = 'O';
    matriz[coordenada[0]][coordenada[1]] = turno;
    console.log(matriz);
    for(var i=0; i<matriz.length; i++){
      switch(true){
        case matriz[i][0]==='X' && matriz[i][1]==='X' && matriz[i][2]==='X' : {
          console.log("Aqui Gano1");
          ganador = 'Player 1';
          break;
        }
        case matriz[i][0]==='O' && matriz[i][1]==='O' && matriz[i][2]==='O' : {
          ganador = 'Player 2';
          break;
        }
        case matriz[0][i]==='X' && matriz[1][i]==='X' && matriz[2][i]==='X' : {
          console.log("Aqui Gano2");
          ganador = 'Player 1';
          break;
        }
        case matriz[0][i]==='O' && matriz[1][i]==='O' && matriz[2][i]==='O' : {
          ganador = 'Player 2';
          break;
        }
        case matriz[0][i]==='X' && matriz[1][i]==='X' && matriz[2][i]==='X' : {
          console.log("Aqui Gano3");
          ganador = 'Player 1';
          break;
        }
        case matriz[0][i]==='O' && matriz[1][i]==='O' && matriz[2][i]==='O' : {
          ganador = 'Player 2';
          break;
        }
        case matriz[0][0]==='X' && matriz[1][1]==='X' && matriz[2][2]==='X' : {
          console.log("Aqui Gano4");
          ganador = 'Player 1';
          break;
        }
        case matriz[0][0]==='O' && matriz[1][1]==='O' && matriz[2][2]==='O' : {
          ganador = 'Player 2';
          break;
        }
        case matriz[0][2]==='X' && matriz[1][1]==='X' && matriz[2][0]==='X' : {
          console.log("Aqui Gano5");
          ganador = 'Player 1';
          break;
        }
        case matriz[0][2]==='O' && matriz[1][1]==='O' && matriz[2][0]==='O' : {
          ganador = 'Player 2';
          break;
        }
      }
      if(ganador != ""){
        console.log(ganador);
        console.log(a);
        break;
      }
    }
    if(ganador != ""){
      matriz_fin = [];
      var str1 = matriz[0][0] + matriz[0][1] + matriz[0][2];
      var str2 = matriz[1][0] + matriz[1][1] + matriz[1][2];
      var str3 = matriz[2][0] + matriz[2][1] + matriz[2][2];

      matriz_fin = [str1,str2,str3];
      console.log(ganador, a+1, matriz_fin);
      return {
        winner: ganador,
        lastPlay: a +1,
        board: matriz_fin
      };}
  }
    
  return {
    winner: ganador,
    lastPlay: plays.length,
    board: matriz_fin
  };
}

module.exports = ticTacToe;
