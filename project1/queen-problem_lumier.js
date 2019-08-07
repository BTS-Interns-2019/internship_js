function queenProblem(size, ini) {
    let board = []
    /***
     * verificar
     * recorre el tablero en su posicion actual,
     * si encuentra dos 1 en la misma fila, columna, o diagonal, regresa false
     * si no, regresa true  
     */
    function verificar() {
        for (let i = 0; i < size; i++) { //recorre todas las filas
            for (let j = 0; j < size; j++) { //recorre todas las columnas
                if (board[i][j] == 1) { //si encuentra un uno
                    board[i][j] = 2 //lo pone en 2 temporalmente
                    for (let fila_columna = 0; fila_columna < size; fila_columna++) {//revisa fila y columna
                        if (board[fila_columna][j] == 1 || board[i][fila_columna] == 1) { board[i][j] = 1; return false; }
                    }
                    //revisa diagonales
                    for (let h = i, v = j; h < size && v < size;) {//diagonal 
                        if (board[h][v] == 1) { board[i][j] = 1; return false; }
                        v++
                        h++
                    }
                    for (let h = i, v = j; h >= 0 && v >= 0;) {//diagonal 
                        if (board[h][v] == 1) { board[i][j] = 1; return false; }
                        h--
                        v--
                    }
                    for (let h = i, v = j; h < size && v >= 0;) {//diagonal 
                        if (board[h][v] == 1) { board[i][j] = 1; return false; }
                        v--
                        h++
                    }
                    for (let h = i, v = j; v < size && h >= 0;) {//diagonal 
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

    /***
     * intenta colocar
     * param: y, columna
     * recibe una columa y ve hay una posicion donde pueda agregar un 1,
     * si lo coloca, pasa a intentarcolocar en la siguiente columna,
     * si encuentra una posicion que no cause conflicto se regresa a la columna anterior  
     */
    function intentarColocar(y) {
        if (y == size) {//si la columna recibida es el limite
            y = 0 // la columna va a ser 0
        }
        if(y==-1){//si la columna es -1
            y=size-1 // la columna va a ser la ultima
        }
         if (y == [ini[1]]) {//si la columna es la columna recibida, quiere decir que no tiene solucion 
            for (let i = 0; i < size; i++) {
                board[i] = [];
                for (let j = 0; j < size; j++) {
                    board[i][j] = 0
                }
            }
            return board; // y va a regresar una matriz con ceros
        }
        
            //console.log("columan: "+y)
            //vamos a ver si la columna "y" ya tiene un 1
            // si es asi, se quitara ese 1 y se movera a lugar de la misma columna
            let bandera = false; //
            let exc = size 
            for (let i = 0; i < size; i++) {
             if(board[i][y]==1){//si lo encontramos
                exc = i;//guardamos donde estaba, para no ponerlo donde mismo
                board[i][y]=0//lo quitamos
                colocados--;
             }
            }
            for(let i=0;i<size;i++){//vamos a recorrer toda la columna
                if(i!=exc){//menos de donde acabamos de quitar la reina
                    board[i][y] = 1 //le ponemos el 1
                    if(verificar()){// y vemos que si no hay conflictos
                        bandera = true;
                        colocados++
                        break;
                       // console.log(board)
                    }else{ //si los hay entonces quitamos ese 1 y seguimos iterando
                        board[i][y] = 0
                    }
                }
            }
            //al final de ese for
            if(bandera){//si si encontro donde ponerlo
                //console.log("puestas "+colocados)
                if(colocados==size){//si ya todas las columnas tienen una reina
                    return board//ya termina
                }else{//si no
                    intentarColocar(y+1)//se pasa a la siguiente columna
                }
            }else{//si no encontro donde poner el 1
                intentarColocar(y-1) //mueve la reina de la columna anterior
            }   
    }
   
    //Para empezar llenamos la matriz con ceros
    for (let i = 0; i < size; i++) {
        board[i] = [];
        for (let j = 0; j < size; j++) {
            board[i][j] = 0
        }
    }
    // y 1 en la posicion recibida
    board[ini[0]][ini[1]] = 1
    let colocados = 1;
    intentarColocar(ini[1] + 1)//colocamos en la columna siguiente...
    return board;


}


console.log(queenProblem(4, [2, 0]))