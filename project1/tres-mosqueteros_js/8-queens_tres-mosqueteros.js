/**
 * Verifica que los parametros sean correctos, llama las funciones necesarias para realizar el proceso
 * Retorna un arreglo con el tablero final
 * @param {number}  size    tamaño del tablero
 * @param {array}   xy      coordenada donde debe ubicar una reina
 * @return {array}          arreglo bidimensional con representacion de "0" como casillas vacias y "1" casillas donde se hubica una reina
 */
function queenProblem(size, xy) {
    if(!xy)xy=[0,1]; //si no tiene coordenadas de entrada se toman como coordenada para una reina las coordenadas "[0,1]"
    if(xy[0] < 0 || xy[1] < 0 || xy[0] >= size || xy[1] >= size) return "Coordenadas fuera del talbero" //si las coordenadas dadas como parámetros exceden el tamaño(menores a 0 o mayores a la coordenada máxima) del tablero entonces se envía un mensaje de error
    return(print_board(place_next_queen(size, size, xy),size)) //retorna el tablero resultante con una reina en cada fila y columna, quedando una especificamente en las coordenadas dadas
}

module.exports=queenProblem;