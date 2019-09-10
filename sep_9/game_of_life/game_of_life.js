/**
 * Grid Constructor and Prototype
 * @param {*} canvasElement 
 * @param {*} columns 
 * @param {*} rows 
 */
function Grid(canvasElement, columns, rows) {
  this.canvas = canvasElement;
  this.canvasWidth = canvasElement.offsetWidth;
  this.canvasHeight = canvasElement.offsetHeight;

  this.canvas.setAttribute('width', this.canvasWidth);
  this.canvas.setAttribute('height', this.canvasHeight);

  this.columns = columns;
  this.rows = rows;

  this.context = canvasElement.getContext('2d');
  this.cellSize = this.canvasWidth / columns; // we want 500 cells in a row
}

Grid.prototype = {
  draw(cellsArray) {
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);

    for (let i = 0; i < this.rows; i += 1) {
      for (let j = 0; j < this.columns; j += 1) {
        const cell = cellsArray[i][j];

        const width = this.cellSize;
        const y = i * width;
        const x = j * width;

        if (cell) {
          this.context.fillRect(x, y, width, width);
        }
      }
    }
  },
};

/**
 * Game of Life constructor
 * @param {*} canvasElement 
 * @param {*} columns 
 * @param {*} rows 
 * @param {*} aliveCells 
 */
function GameOfLife(canvasElement, columns, rows) {
  this.grid = new Grid(canvasElement, columns, rows);
  this.currentGeneration = this.makeCellsArray();
  this.populateFirstGeneration();

  this.grid.draw(this.currentGeneration);
}

GameOfLife.prototype = {
  makeCellsArray() {
    const arr = new Array(this.grid.rows);

    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = new Array(this.grid.columns);
    }

    return arr;
  },
  populateFirstGeneration() {
    // i => rows
    // j => columns
    for (let i = 0; i < this.grid.rows; i += 1) {
      for (let j = 0; j < this.grid.columns; j += 1) {
        // this.currentGeneration[i][j] = Math.round(Math.random(2));
        this.currentGeneration[i][j] = 0;
      }
    }
  },
  getNeighbours(x, y) {
    let sum = 0;
    // i => rows
    // j => columns
    for (let i = -1; i < 2; i += 1) {
      for (let j = -1; j < 2; j += 1) {
        // wrap to the other side of the array if in one of the edges
        const row = (y + i + this.grid.rows) % this.grid.rows;
        const column = (x + j + this.grid.columns) % this.grid.columns;

        sum += this.currentGeneration[row][column];
      }
    }
    // discard the current cell count
    sum -= 1;

    return sum;
  },
  step() {
    const nextGeneration = this.makeCellsArray();

    for (let i = 0; i < this.grid.rows; i += 1) {
      for (let j = 0; j < this.grid.columns; j += 1) {
        // Count live neighbours
        const cell = this.currentGeneration[i][j];
        const neighbours = this.getNeighbours(j, i);

        // Count live neighbours
        if (cell === 0 && neighbours === 3) {
          nextGeneration[i][j] = 1;
        } else if (
          // Kill underpopulated or overpopulated cells
          cell === 1
          && (neighbours < 2 || neighbours > 3)
        ) {
          nextGeneration[i][j] = 0;
        } else {
          // Cell did not revive nor did it die
          nextGeneration[i][j] = cell;
        }
      }
    }

    this.grid.draw(nextGeneration);
    this.currentGeneration = nextGeneration;
  },
};

const startButton = document.querySelector('#start-button');
const nextButton = document.querySelector('#next-button');
const stopButton = document.querySelector('#stop-button');
const rangeSlider = document.querySelector('#speed-meter');
let speed = 2000 / rangeSlider.value;

const canvasElement = document.querySelector('#canvas');
const gameOfLife = new GameOfLife(canvasElement, 10, 10);

let interval;

window.addEventListener('resize', () => {
  gameOfLife.grid.draw(gameOfLife.currentGeneration);
});

canvasElement.addEventListener('click', (event) => {
  const x = Math.floor(event.offsetX / gameOfLife.grid.cellSize);
  const y = Math.floor(event.offsetY / gameOfLife.grid.cellSize);

  gameOfLife.currentGeneration[y][x] = 1;
  gameOfLife.grid.draw(gameOfLife.currentGeneration);
});

// TODO: FIX THE SPEED METER
rangeSlider.addEventListener('input', (event) => {
  const speedEquivalent = event.target.value;
  speed = Math.floor(speed / speedEquivalent);
});

startButton.addEventListener('click', (event) => {
  event.target.setAttribute('disabled', true);
  nextButton.setAttribute('disabled', true);
  interval = setInterval(() => {
    gameOfLife.step();
  }, 50);
});

nextButton.addEventListener('click', () => {
  gameOfLife.step();
});

stopButton.addEventListener('click', () => {
  if (interval) {
    startButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
    clearInterval(interval);
  }
});
