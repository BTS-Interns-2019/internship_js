function queenProblem(size, coordinates) {
    return(print_board(place_next_queen(size, size)))


}
    var iterations = 0

    var print_board = function (columns) {
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

    var has_conflict = function (columns) {
      var len = columns.length, last = columns[len - 1], previous = len - 2

      while (previous >= 0) {
        if (columns[previous] === last) return true
        if (last - (len - 1) === columns[previous] - previous) return true
        if (last + (len - 1) === columns[previous] + previous) return true
        previous--
      }

      return false
    }

    var place_next_queen = function (total, queens, columns) {
      if (queens === 0) return columns
      columns = columns || []

      for (var column = 0; column < total; column++) {
        columns.push(column)
        iterations++
        if (!has_conflict(columns) &&
            place_next_queen(total, queens - 1, columns)) {
          return columns
        }
        columns.pop(column)
      }

      return null
    }

    
    console.log('\niterations: ', iterations)




module.exports=queenProblem;