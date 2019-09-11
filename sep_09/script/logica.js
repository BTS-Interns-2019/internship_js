//Se crea la cuadricula con los objetos
function board(){
    let board = [];
    for(let i = 0; i<500 ; i+=1){
        board[i] = [];
        for( let j = 0; j < 400 ; j+=1){
            board[i][j] = new celula;
        }
    }
    this.board = board;
}



function celula(){
    this.estado = Math.round(Math.random()) // Los objetos son creados Random solo para uso de pruebas;
}

// Se crea la cuadricula y la cuadricula auxiliar
tablero = new board;
next = new board;

console.log(tablero.board[0][0].estado)


// Se verifican los vecinos y cambia su estado
 for (let i = 0; i < 500; i++) {
    for (let j = 0; j < 400; j++) {
       let state = tablero.board[i][j].estado;

       let sum = 0;
       let neighbors = countNeighbors(tablero.board, i, j);

       if (state == 0 && neighbors == 3) {
         next.board[i][j].estado = 1;
       } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
         next.board[i][j].estado = 0;
       } else {
         next.board[i][j].estado = state;
       }

     }
   }

   
   tablero.board = next.board;




     function countNeighbors(grid, x, y) {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          let col = (x + i + 500) % 500;
          let row = (y + j + 400) % 400;
          sum += tablero.board[col][row].estado;
        }
      }
      sum -= tablero.board[x][y].estado;
      // console.log(sum)
      return sum;
    }



  (function(){

    const grid = document.getElementById('elmaster');
    const cells = [];    
    for(let i = 0; i < 200000 ; i++){
      var div = document.createElement("div");
      grid.appendChild(div);
      console.log('new div');
    }



    // function board(){
    //     const grid = document.getElementById('elmaster');
    //     let board = [];
    //     for(let i = 0; i<200000 ; i+=1){
    //       board[i] = new celula;
    //       var div = document.createElement("div");
    //       div.setAttribute('id', i)
    //       if(board[i].estado == 1) div.style.background='black';
    //       grid.appendChild(div);
    //     }
    //     this.board = board;
    // }
  
    // board();

    


})()
