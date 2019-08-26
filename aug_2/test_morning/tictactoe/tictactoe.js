// Sergio Manuel Rivera Vazquez

function ticTacToe(plays) {
    let res = {winner:"",lastPlay:0,board:[[],[],[]]};
    let tablero = [[[],[],[]],[[],[],[]],[[],[],[]]];
    let player1 = false;
    let player2 = false;
    let j1 = "player1";
    let j2 = "player2";
    let play = 0;
    for (let i = 0; i < plays.length; i++) {
        if(i == 0){player1 = true};
        if(i %2 == 0){
            player1 = true;
        }else if(i %2 != 0){
            player2 = true;
        }

        if(player1){
            let x = plays[i][0];
            let y = plays[i][2];
            let jugada1 =[x,y];
            tablero[jugada1[0]-1][jugada1[1]-1] = ['X'];
            play++;
            
            if(quienGano(tablero,"X",j1)){res["winner"] = j1}
            player1 = false;
          //  console.log(tablero);
            
        }
        if(player2){
        
        let x = plays[i][0];
        let y = plays[i][2];
        let jugada2 =[x,y];
        tablero[jugada2[0]-1][jugada2[1]-1] = ['O'];
        play++;
        if(quienGano(tablero,"O",j2)){res["winner"] = j2; res["lastPlay"] = play}
        player2 = false;
        
        }
        
    }

    function quienGano(tablero,signo,player) {
        if(tablero[0][0] == signo && tablero[0][1] == signo && tablero[0][2] == signo){return player}; //Linea superior hotizontal
        if(tablero[1][0] == signo && tablero[1][1] == signo && tablero[1][2] == signo){return player}; //linea media horizontal
        if(tablero[2][0] == signo && tablero[2][1] == signo && tablero[2][2] == signo){return player}; //linuea ultima horizontal
        if(tablero[0][0] == signo && tablero[1][1] == signo && tablero[2][2] == signo){return player}; //diagonal 1 derecha-izquierda
        if(tablero[2][0] == signo && tablero[1][1] == signo && tablero[0][2] == signo){return player}; //diagonal 2 izquierda-derecha 
        if(tablero[0][0] == signo && tablero[1][0] == signo && tablero[2][0] == signo){return player}; //columna1 win
        if(tablero[0][1] == signo && tablero[1][1] == signo && tablero[2][1] == signo){return player}; //columna2 win
        if(tablero[0][2] == signo && tablero[1][2] == signo && tablero[2][2] == signo){return player}; //columna3 win
    }

    console.log(tablero);
    let resTablero = [];
    let temp = "";
    for (let i = 0; i < tablero.length; i++) {
        temp = "";
       for (let j = 0; j < tablero[i].length; j++) {
           // console.log(tablero[i][j]);
            
           if(tablero[i][j].length < 1){ temp+=" "}
        temp += tablero[i][j];

        if(j < 2){temp+=","}
           
       }
    //    resTablero+",";
    resTablero[resTablero.length] = temp;
    }
    res.board = resTablero;
    res.lastPlay = play;
    
    return res;
    
}


console.log(ticTacToe(["1,1","1,2","2,2","3,1","3,3"]));
