(function() {

function catrina(celdas, tablero) {
  const results = tablero.catrina();
  results.toKill.forEach(cell => {
    const x = parseInt(cell.split(',')[0]);
    const y = parseInt(cell.split(',')[1]);
    celdas[y][x].classList.remove('live');
});
  results.toGiveLife.forEach(cell => {
    const x = parseInt(cell.split(',')[0]);
    const y = parseInt(cell.split(',')[1]);
    celdas[y][x].classList.add('live');
  });
}
const board = new Board(400, 500);
const grid = document.getElementById('grid');
const cells = [];
for (let y = 0; y < 400; y++) {
  const row = [];
  for (let x = 0; x < 500; x++) {
    const div = document.createElement('div');
    div.setAttribute('y', y);
    div.setAttribute('x', x);
    row.push(grid.appendChild(div));
  }
  cells.push(row);
}
grid.addEventListener('click', (evt) => {
  const x = parseInt(evt.target.getAttribute('x'));
  const y = parseInt(evt.target.getAttribute('y'));
  if (board.isAlive(x,y)) {
    board.kill(x,y);
    evt.target.classList.remove('live');
  } else {
    board.giveLife(x,y);
    evt.target.classList.add('live');
  }
});
const btnCatrina = document.getElementById('btn-catrina');
const btnStart = document.getElementById('btn-start');
const inputRange = document.getElementById('btn-range');
let flag = false;
btnCatrina.addEventListener('click', (evt) => {
  catrina(cells, board);
});

btnStart.addEventListener('click', (evt) => {
  if (flag) {
    btnStart.innerHTML = 'Start';
    flag = false;
  } else {
    btnStart.innerHTML = 'Stop';
    flag = true;
    
    cicloDeCatrina(getVelocity()).then((val) => {
      console.log(".then del ciclo de catrina");
    });
  }
});
function getVelocity(){
  return(101-inputRange.value)*100;
}
function cicloDeCatrina(velocity){
  return new Promise((resolve, reject) => {
    if(flag){
      catrina(cells, board)
      setTimeout(() => { cicloDeCatrina(getVelocity()) }, velocity);
    }
    else resolve("okay");
  });
}

})();
