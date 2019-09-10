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

        if (cell.isAlive()) {
          this.context.fillRect(x, y, width, width);
        }
      }
    }
  },
};

/**
 * Cell Constructor and Prototype
 * @param {*} x 
 * @param {*} y 
 * @param {*} alive 
 */
function Cell(x, y, alive) {
  this.x = x;
  this.y = y;
  this.alive = alive;
}

Cell.prototype = Object.defineProperties({}, {
  isAlive: {
    value() {
      return this.alive;
    },
  },
});

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
    for (let i = 0; i < this.grid.rows; i += 1) {
      for (let j = 0; j < this.grid.columns; j += 1) {
        let alive = false;
        if (Math.round(Math.random(2))) {
          alive = true;
        }
        this.currentGeneration[i][j] = new Cell(j, i, alive);
      }
    }
  },
  getNeighbours(x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i += 1) {
      for (let j = -1; i < 2; j += 1) {
        if (
          typeof this.currentGeneration[i + y][j + x] !== 'undefined' // check there is a cell
          && this.currentGeneration[i + y][j + x].isAlive() // check that cell is alive
        ) {
          sum += 1;
        }
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
        // edges of grid
        if (i === 0 || i === (this.grid.rows - 1) || j === 0 || j === (this.grid.columns - 1)) {
          nextGeneration[i][j] = this.currentGeneration[i][j];
        } else {
          // Count live neighbours
          const cell = this.currentGeneration[i][j];
          const neighbours = this.getNeighbours(cell.x, cell.y);
            
          // Count live neighbours
          if (!cell.isAlive() && neighbours === 3) {
            nextGeneration[i][j] = new Cell(i, j, true);
          } else if (
            // Kill underpopulated or overpopulated cells
            cell.isAlive()
            && (neighbours < 2 || neighbours > 3)
          ) {
            nextGeneration[i][j] = new Cell(i, j, false);
          } else {
            // Cell did not revive nor did it die
            nextGeneration[i][j] = cell;
          }
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
const gameOfLife = new GameOfLife(canvasElement, 500, 400);

let interval;

window.addEventListener('resize', () => {
  gameOfLife.grid.draw(gameOfLife.currentGeneration);
});

canvasElement.addEventListener('click', (event) => {
  const x = Math.floor(event.offsetX / gameOfLife.grid.cellSize);
  const y = Math.floor(event.offsetY / gameOfLife.grid.cellSize);

  gameOfLife.currentGeneration[y][x] = new Cell(x, y, true);
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
  }, speed);
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
