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

const board = Board(500, 400);
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
  if (i < 19) { if (board[i + 1][j] === 1) { neighborsCount += 1; } }

  if (i > 0) {
    if (board[i - 1][j] === 1) { neighborsCount += 1; }
    if (j < 15) { if (board[i - 1][j + 1] === 1) { neighborsCount += 1; } }
  }

  if (j < 15) { if (board[i][j + 1] === 1) { neighborsCount += 1; } }

  if (j > 0) {
    if (board[i][j - 1] === 1) { neighborsCount += 1; }
    if (i < 19) { if (board[i + 1][j - 1] === 1) { neighborsCount += 1; } }
  }

  if (i > 0 && j > 0) { if (board[i - 1][j - 1] === 1) { neighborsCount += 1; } }
  if (i < 19 && j < 15) { if (board[i + 1][j + 1] === 1) { neighborsCount += 1; } }

  return neighborsCount;
}

function runBoard() {
  const arrDie = [];
  const arrBorn = [];

  for (let i = 0; i < 20; i += 1) {
    for (let j = 0; j < 16; j += 1) {
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
    const cellNew = new Cell(xy[0], xy[1]);
    cellNew.posCell();
  }
}

function printBoard() {
  for (let i = 0; i < 20; i += 1) {
    let currentRow = '';
    for (let j = 0; j < 30; j += 1) {
      if (board[i][j] === 1) {
        currentRow += '■ ';
      } else {
        currentRow += '  ';
      }
    }
    console.log(currentRow);
  }
}
const grid = document.getElementById('grid');

function printHTML() {
  grid.innerHTML = '';
  for (let i = 0; i < 500; i += 1) {
    for (let j = 0; j < 400; j += 1) {
      if (board[i][j] === 1) {
        const newElement = `<div id="cellX${i}Y${j}" class="cells"></div>`;
        grid.innerHTML += newElement;
        const actualCell = document.getElementById(`cellX${i}Y${j}`);
        actualCell.style.gridArea = `${i + 1} / ${j + 1} / ${i + 2} / ${j + 2}`;
      }
    }
  }
}

/* 

grid.addEventListener('mousedown', (ev) => {
  const posX = ev.pageX; const posY = ev.pageY;
  alert(posX + ', ' + posY);
  const totalX = grid.style.width; const totalY = grid.style.height;
  alert(totalX + ', ' + totalY);
  const unitX = parseInt(totalX / 500, 10); const unitY = parseInt(totalY / 400, 10);
  const elementX = parseInt(posX / unitX, 10); const elementY = parseInt(posY / unitY, 10);
  // alert(`newCell in: ${elementX},${elementY}`);
});*/

/* let insertion = '';
for (let i = 0; i < 200000; i += 1) {
  insertion += `<div id = "cell${i}" class = "cells"></div>`;
}
grid.innerHTML = insertion; 

function who(evt) {
  const touch = document.getElementById(this.id);
  touch.style.background = white;
}*/

let cell = new Cell(106, 106);
cell.posCell();
cell = new Cell(107, 105);
cell.posCell();
cell = new Cell(107, 106);
cell.posCell();
cell = new Cell(107, 107);
cell.posCell();
cell = new Cell(108, 105);
cell.posCell();
cell = new Cell(108, 107);
cell.posCell();
cell = new Cell(109, 106);
cell.posCell();

for (let i = 0; i < 20; i += 1) {
  console.log(`Iteration ${i}`);
  printHTML();
  runBoard();
}

console.log(grid.childElementCount);
