function queenProblem(size, xy) {
    if(!xy)xy=[0,1];
    if(xy[0] < 0 || xy[1] < 0 || xy[0] > size || xy[1] > size) return "Coordenadas fuera del talbero"
    return(print_board(place_next_queen(size, size, xy),size))
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
//console.log(JSON.stringify(queenProblem(4,[0,0])));

//console.log(typeof(queenProblem));




module.exports=queenProblem;