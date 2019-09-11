/**
 * TODO:
 * 1. Fix speed selection
 * 2. Fix canvas display
 */

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

  this.columns = columns;
  this.rows = rows;

  this.context = canvasElement.getContext('2d');
  this.cellSize = this.canvasWidth / columns; // we want 500 cells in a row

  this.canvas.setAttribute('width', this.canvasWidth);
  this.canvas.setAttribute('height', this.canvasHeight);
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
          // set the fill color
          this.context.fillStyle = '#334f38';
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
 */
function GameOfLife(canvasElement, columns, rows) {
  this.grid = new Grid(canvasElement, columns, rows);
  this.currentGeneration = this.makeCellsArray();

  this.grid.draw(this.currentGeneration);
}

GameOfLife.prototype = {
  makeCellsArray() {
    const arr = new Array(this.grid.rows);

    for (let i = 0; i < arr.length; i += 1) {
      // automatically fill the array with 0's (dead cells)
      arr[i] = new Array(this.grid.columns).fill(0);
    }

    return arr;
  },
  populateFirstGeneration() {
    // i => rows
    // j => columns
    for (let i = 0; i < this.grid.rows; i += 1) {
      for (let j = 0; j < this.grid.columns; j += 1) {
        this.currentGeneration[i][j] = Math.round(Math.random(2));
      }
    }
  },
  getNeighbours(y, x) {
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
    // discard the current cell count (will decrease the count if the cell is alive)
    sum -= this.currentGeneration[y][x];

    return sum;
  },
  step() {
    const nextGeneration = this.makeCellsArray();

    for (let i = 0; i < this.grid.rows; i += 1) {
      for (let j = 0; j < this.grid.columns; j += 1) {
        // Count live neighbours
        const cell = this.currentGeneration[i][j];
        const neighbours = this.getNeighbours(i, j);

        
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
const populateButton = document.querySelector('#populate-button');
const clearButton = document.querySelector('#clear-button');
const rangeSlider = document.querySelector('#speed-meter');
const canvasElement = document.querySelector('#canvas');
const gameOfLife = new GameOfLife(canvasElement, 500, 400);

let interval;

function startGame(speed) {
  // if the speed is not set
  if (!speed) {
    // set it to 1500 / 1 (default value of speed range)
    speed = 600 / rangeSlider.value;
  }

  if (interval) {
    clearInterval(interval);
  }

  // set the speed according to the input provided by the user
  interval = setInterval(() => {
    gameOfLife.step();
  }, speed);
}

function stopGame() {
  // if there is an interval, it means the game is on, so clear the interval
  if (interval) {
    // remove the disabled attribute to start and next step buttons
    startButton.removeAttribute('disabled');
    nextButton.removeAttribute('disabled');
    populateButton.removeAttribute('disabled');
    clearInterval(interval);
  }
}

function drawGrid() {
  gameOfLife.grid.draw(gameOfLife.currentGeneration);
}

// Window listens to resizing
window.addEventListener('resize', () => {
  drawGrid();
});

// Canvas listens for any click over it
canvasElement.addEventListener('click', (event) => {
  const x = Math.floor(event.offsetX / gameOfLife.grid.cellSize);
  const y = Math.floor(event.offsetY / gameOfLife.grid.cellSize);

  gameOfLife.currentGeneration[y][x] = 1;
  drawGrid();
});

// TODO: FIX THE SPEED METER
// Range listens to any change in speed
rangeSlider.addEventListener('input', (event) => {
  const speedRatio = event.target.value;
  // stop the game a bit
  stopGame();
  // resume it with the new speed
  startGame(Math.floor(600 / speedRatio));
});

// Start button listens to any click to start the game
startButton.addEventListener('click', () => {
  // disable start and next step and populate buttons
  startButton.setAttribute('disabled', true);
  nextButton.setAttribute('disabled', true);
  populateButton.setAttribute('disabled', true);

  startGame();
});

// Next step button listens to any click to proceed to the next step
nextButton.addEventListener('click', () => {
  gameOfLife.step();
});

// Stop button listens to any click to stop the game
stopButton.addEventListener('click', stopGame);

// Populate button listens to any click to populate the grid with cells
populateButton.addEventListener('click', () => {
  // generate the first generation of cells at random
  gameOfLife.populateFirstGeneration();

  // redraw the grid with the new cells
  drawGrid();
});

// Clear button listens to any click to kill all the cells
clearButton.addEventListener('click', () => {
  // set the current generation as empty
  gameOfLife.currentGeneration = gameOfLife.makeCellsArray();

  // draw the grid empty
  drawGrid();

  // if there was a game currently on, shut it down
  stopGame();
});
