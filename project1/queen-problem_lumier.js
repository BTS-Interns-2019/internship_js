function queenProblem(size, ini) {
    let board = []
    function verificar() {
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (board[i][j] == 1) {
                    board[i][j] = 2
                    for (let fila_columna = 0; fila_columna < size; fila_columna++) {//revisa fila y columna
                        if (board[fila_columna][j] == 1 || board[i][fila_columna] == 1) { board[i][j] = 1; return false; }
                    }
                    //revisa diagonales
                    for (let h = i, v = j; h < size && v < size;) {//diagonal 1
                        if (board[h][v] == 1) { board[i][j] = 1; return false; }
                        v++
                        h++
                    }
                    for (let h = i, v = j; h >= 0 && v >= 0;) {//diagonal 1
                        if (board[h][v] == 1) { board[i][j] = 1; return false; }
                        h--
                        v--
                    }
                    for (let h = i, v = j; h < size && v >= 0;) {//diagonal 2
                        if (board[h][v] == 1) { board[i][j] = 1; return false; }
                        v--
                        h++
                    }
                    for (let h = i, v = j; v < size && h >= 0;) {//diagonal 2
                        if (board[h][v] == 1) { board[i][j] = 1; return false; }
                        v++
                        h--
                    }

                    board[i][j] = 1
                }
            }
        }
        return true;
    }

    function intentarColocar(y) {
        if (y == size) {
            y = 0
        }
        if(y==-1){
            y=size-1
        }
         if (y == [ini[1]]) {
            for (let i = 0; i < size; i++) {
                board[i] = [];
                for (let j = 0; j < size; j++) {
                    board[i][j] = 0
                }
            }
            return board;
        }
        
            //console.log("columan: "+y)
            let bandera = false;
            let exc = size
            for (let i = 0; i < size; i++) {
             if(board[i][y]==1){
                exc = i;
                board[i][y]=0
                colocados--;
             }
            }
            for(let i=0;i<size;i++){
                if(i!=exc){
                    board[i][y] = 1
                    if(verificar()){
                        bandera = true;
                        colocados++
                       // console.log(board)
                    }else{
                        board[i][y] = 0
                    }
                }
            }
            if(bandera){
                //console.log("puestas "+colocados)
                if(colocados==size){
                    return board
                }else{
                    intentarColocar(y+1)
                }
            }else{
                intentarColocar(y-1)
            }

        
    }
   
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = 0
        }
    }
    board[ini[0]][ini[1]] = 1
    let colocados = 1;
    intentarColocar(ini[1] + 1)
    return board;


}


queenProblem(4, [2, 0])