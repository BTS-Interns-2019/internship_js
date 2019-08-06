/**
 * Verifica que los parametros sean correctos llama las funciones necesarias para realizar el proyecto
 * @param {number}  size    tamaño del tablero
 * @param {array}   xy      coordenada donde debe hubicar una reina
 * @return {array}          arreglo bidimensional con representacion de "0" como casillas vacias y "1" casillas donde se hubica una reina
 */
function queenProblem(size, xy) {
    if(!xy)xy=[0,1]; //si no tiene coordenadas de entrada se toman como coordenada para una reina las coordenadas "[0,1]"
    if(xy[0] < 0 || xy[1] < 0 || xy[0] >= size || xy[1] >= size) return "Coordenadas fuera del talbero" //si las coordenadas dadas como parámetros exceden el tamaño(menores a 0 o mayores a la coordenada máxima) del tablero entonces se envía un mensaje de error
    return(print_board(place_next_queen(size, size, xy),size)) //retorna el tablero resultante con una reina en cada fila y columna, quedando una especificamente en las coordenadas dadas
}
    var print_board = function (columns, size) {
        if(columns==null){
            arr = Array(size);
            for (let i = 0; i < size; i++) {
                arr[i] = Array(size);          
                arr[i].fill(0);
            }
            return arr;
        }else{ 
            const board=[];
            let n = columns.length, row = 0, col = 0
            while (row < n) {
                const arrRow=[];
                while (col < n) {
                    arrRow.push(columns[row] === col ? 1 : 0)
                    col++
                }    
                board.push(arrRow);
                col = 0
                row++
            }
            return board;
        }
    }

    var has_conflict = function (columns, xy) {
      let len = columns.length, last = columns[len - 1], previous = len - 2;
      let x=xy[0], y=xy[1];
      while (previous >= 0) {
        if (columns[previous] === last) return true
        if (last - (len - 1) === columns[previous] - previous) return true
        if (last + (len - 1) === columns[previous] + previous) return true
        previous--
        }
        if (columns[x] !== undefined){
             if (columns[x] !== y){ 
                 return true
             }
        }
        return false
    }

    var place_next_queen = function (size, queens, xy, columns) {
      if (queens === 0) return columns
      columns = columns || []
      for (var column = 0; column < size; column++) {
        columns.push(column)
        if (!has_conflict(columns, xy) &&
            place_next_queen(size, queens - 1, xy, columns)) {
          return columns
        }
        columns.pop(column);
      }
      return null;
    }
print = queenProblem(8,[0,0]);

for (i = 0; i < print.length; i ++){
    console.log(print[i]);
}

//console.log(typeof(queenProblem));




module.exports=queenProblem;