/**
 * Verifica que los parametros sean correctos, llama las funciones necesarias para realizar el proyecto
 * @param {number}  size    tamaño del tablero
 * @param {array}   xy      coordenada donde debe hubicar una reina
 * @return {array}          arreglo bidimensional con representacion de "0" como casillas vacias y "1" casillas donde se hubica una reina
 */
function queenProblem(size, xy) {
    if(!xy)xy=[0,1]; //si no tiene coordenadas de entrada se toman como coordenada para una reina las coordenadas "[0,1]"
    if(xy[0] < 0 || xy[1] < 0 || xy[0] >= size || xy[1] >= size) return "Coordenadas fuera del talbero" //si las coordenadas dadas como parámetros exceden el tamaño(menores a 0 o mayores a la coordenada máxima) del tablero entonces se envía un mensaje de error
    return(print_board(place_next_queen(size, size, xy),size)) //retorna el tablero resultante con una reina en cada fila y columna, quedando una especificamente en las coordenadas dadas
}
    /**
     * Esta función recibe un arreglo con las posiciones de las reinas y "dibuja" el tablero, en caso de recibir un "null" rellena el tablero con ceros
     * @param {array}       columns arreglo unidimensional con las posiciones de cada una de las reinas
     * @param {number}      size    tamaño del tablero
     * @return {array[][]}          tablero dibujado con "0" para casillas vacias y "1" para cada reina
     */
    var print_board = function (columns, size) {
        if(columns==null){      //si el parametro es null rellena de "0"s
            arr = Array(size);
            for (let i = 0; i < size; i++) {
                arr[i] = Array(size);          
                arr[i].fill(0);
            }
            return arr;
        }else{ 
            const board=[]; //tablero
            let n = columns.length, row = 0, col = 0
            while (row < n) {   //agrega filas al tablero
                const arrRow=[];
                while (col < n) {   //agrega celdas a la fila
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
    /**
     * Determina si las posiciones en que están colocadas las reinas son válidas
     * @param {array} columns   arreglo con las reinas colocadas
     * @param {array} xy        coordenadas donde debe haber una reina
     * @return {boolean}        true si hay conflicto (las reinas no están en la posicion correcta), false si están bien colocadas
     */
    var has_conflict = function (columns, xy) {
      let len = columns.length, last = columns[len - 1], previous = len - 2;
      let x=xy[0], y=xy[1];
      while (previous >= 0) {   //evalua la ultima reina colocada con cada una de las anteriores
        //evalua que esten en la misma fila o diagonal
        if (columns[previous] === last) return true 
        if (last - (len - 1) === columns[previous] - previous) return true  
        if (last + (len - 1) === columns[previous] + previous) return true
        previous--
        }
        if (columns[x] !== undefined){ //si llego a la columna donde se determino la coordenada exacta se evalua si dicha reina está en esa coordenada
             if (columns[x] !== y){ 
                 return true
             }
        }
        return false
    }
    /**
     * Función que prueba las combinaciones posibles hasta encontrar una correcta
     * @param {number} size     tamaño del tablero
     * @param {number} queens   reinas que faltan por colocar
     * @param {array} xy        coordenadas donde debe haber una reina
     * @param {array} columns   reinas colocadas actualmente
     * @returns                 arreglo con las posiciones donde se deben de colocar las reinas o null encaso de no haber una combinación válida
     */
    var place_next_queen = function (size, queens, xy, columns) {
      if (queens === 0) return columns  //colocadas todas las reinas
      columns = columns || []       //si no ha declarado el arreglo lo crea
      for (var column = 0; column < size; column++) { //evalua cada una de las celdas de la columna
        columns.push(column)
        if (!has_conflict(columns, xy) &&
            place_next_queen(size, queens - 1, xy, columns)) { //en caso de estar colocada bien hasta la actual coloca la siguiente con esta misma función
          return columns
        }
        columns.pop(column);
      }
      return null;
    }
print = queenProblem(8,[0,0]);
// imprime la matriz resultado
for (i = 0; i < print.length; i ++){
    console.log(print[i]);
}

//console.log(typeof(queenProblem));




module.exports=queenProblem;