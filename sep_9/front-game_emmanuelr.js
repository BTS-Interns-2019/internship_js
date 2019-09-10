(function() {
function change(x,y){
  if (board.isAlive(x,y)) {
    board.kill(x,y);
    evt.target.classList.remove('live');
  } else {
    board.giveLife(x,y);
    evt.target.classList.add('live');
  }
}
const board = new Board(500, 400);
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
  change(x,y);
});

console.log('fin');

})();

