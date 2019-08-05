
function queenProblem(size, coord){
    let tablero = []
    fillBoard()


    return tablero
  function fillBoard(){ 
    for(let x = 0; x < size; x++){
        tablero[x] = []
        for(let y = 0; y < size; y++){
            tablero[x][y] = -1
            if(x === coord[0] && y === coord[1]){
                tablero[x][y] = 1
            }
        }
    }
}
}
console.log(queenProblem(4, [0,0]))


// const queenProblem2 = (size, coor) => {
//     let tablero = []
//     for(let x = 0; x < size; x++){
//         tablero[x] = []
//         for(let y = 0; y < size; y++){
//             tablero[x][y] = -1
//             if(x === coor[0] && y === coor[1]){
//                 tablero[x][y] = 1
//             }
//         }
//     }
//     console.log(tablero)
// }

module.exports = queenProblem;