// Funciones para la logica
function Board(width, height) {
  const board = new Array(width);
  for (let i = 0; i < width; i += 1) {
    board[i] = new Array(height);
    for (let j = 0; j < height; j += 1) {
      board[i][j] = 0;
    }
  }
  return board;
}
const width = 500;
const height = 400;

const board = Board(width, height);
const arrCells = [];

class Cell {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    arrCells.push(this);
  }

  posCell() {
    board[this.posX][this.posY] = 1;
  }

  dieCell() {
    board[this.posX][this.posY] = 0;
  }
}

function getNeighbors(i, j) {
  let neighborsCount = 0;
  if (i < width - 1) { if (board[i + 1][j] === 1) { neighborsCount += 1; } }

  if (i > 0) {
    if (board[i - 1][j] === 1) { neighborsCount += 1; }
    if (j < height - 1) { if (board[i - 1][j + 1] === 1) { neighborsCount += 1; } }
  }

  if (j < height - 1) { if (board[i][j + 1] === 1) { neighborsCount += 1; } }

  if (j > 0) {
    if (board[i][j - 1] === 1) { neighborsCount += 1; }
    if (i < width - 1) { if (board[i + 1][j - 1] === 1) { neighborsCount += 1; } }
  }

  if (i > 0 && j > 0) { if (board[i - 1][j - 1] === 1) { neighborsCount += 1; } }
  if (i < width - 1 && j < height - 1) { if (board[i + 1][j + 1] === 1) { neighborsCount += 1; } }

  return neighborsCount;
}

function runBoard() {
  const arrDie = [];
  const arrBorn = [];

  for (let i = 0; i < width; i += 1) {
    for (let j = 0; j < height; j += 1) {
      if (board[i][j] === 1) {
        const neighborsCount = getNeighbors(i, j);
        if (neighborsCount <= 1 || neighborsCount > 3) {
          arrDie.push(`${i},${j}`);
        }
      } else {
        const neighborsCount = getNeighbors(i, j);
        if (neighborsCount === 3) {
          arrBorn.push(`${i},${j}`);
        }
      }
    }
  }

  for (let i = 0; i < arrDie.length; i += 1) {
    const xy = arrDie[i].split(',');
    for (let j = 0; j < arrCells.length; j += 1) {
      if (arrCells[j].posX == xy[0] && arrCells[j].posY == xy[1]) {
        arrCells[j].dieCell();
        arrCells.splice(j, 1);
      }
    }
  }

  for (let i = 0; i < arrBorn.length; i += 1) {
    const xy = arrBorn[i].split(',');
    const cellNew = new Cell(parseInt(xy[0], 10), parseInt(xy[1], 10));
    cellNew.posCell();
  }
}

function printBoard() {
  for (let i = 0; i < height; i += 1) {
    let currentRow = '';
    for (let j = 0; j < width; j += 1) {
      if (board[i][j] === 1) {
        currentRow += '■ ';
      } else {
        currentRow += '  ';
      }
    }
    console.log(currentRow);
  }
}

// Funciones para el grid

const grid = document.getElementById('grid');

function printGrid(x, y) {
  const cellsActual = grid.outerHTML;
  const inGrid = cellsActual.substring(15, cellsActual.length - 6);
  const newCell = `<div class="cells" id="cellX${x}Y${y}"></div>`;
  grid.innerHTML = inGrid + newCell;
  const cellCreated = document.getElementById(`cellX${x}Y${y}`);
  cellCreated.style.gridArea = `${x} / ${y} / ${x + 1} / ${y + 1}`;
  cellCreated.style.background = 'white';
}

function clearGrid() {
  grid.innerHTML = '';
}

function board2HTML() {
  clearGrid();
  for (let i = 0; i < arrCells.length; i += 1) {
    console.log(arrCells[i]);
    printGrid(arrCells[i].posX, arrCells[i].posY);
  }
}

grid.addEventListener('mousedown', (ev) => {
  const posX = ev.pageY; const posY = ev.pageX;
  const totalX = grid.scrollWidth; const totalY = grid.scrollHeight;
  const unitX = parseInt(totalX / 500, 10); const unitY = parseInt(totalY / 400, 10);
  const elementX = parseInt(posX / unitX, 10) + 1; const elementY = parseInt(posY / unitY, 10) + 1;
  printGrid(elementX, elementY);
});

const run = document.getElementById('run');

run.addEventListener('click', () => {
  let cellsDefined = document.getElementsByClassName('cells');
  cellsDefined = Array.from(cellsDefined);
  for (let i = 0; i < cellsDefined.length; i += 1) {
    const cell = document.getElementById(cellsDefined[i].id);
    const coord = cell.style.gridArea.split(' / ');
    const cellPos = new Cell(parseInt(coord[0], 10), parseInt(coord[1], 10));
    cellPos.posCell();
  }
  runBoard();
});

const sel = document.getElementById('pat');

sel.addEventListener('change', () => {
  const selected = sel.options[sel.selectedIndex];
  switch (selected.value) {
    case 'sp': {
      printGrid(106, 106);
      printGrid(107, 105);
      printGrid(107, 106);
      printGrid(107, 107);
      printGrid(108, 105);
      printGrid(108, 107);
      printGrid(109, 106);
      break;
    }

    default: {
      break;
    }
  }
});
