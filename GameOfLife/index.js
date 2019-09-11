function Canvas(canvas, width, height, resolution) {
  this.canvas = canvas;
  this.width = width;
  this.height = height;
  this.resolution = resolution;
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.context = this.canvas.getContext('2d');
}
const btnClear = document.getElementById('clear');
const canvas = document.querySelector('canvas');
const world = new Canvas(canvas, 500, 400, 10);

const cols = world.width / world.resolution;
const rows = world.height / world.resolution;

//Create the grid
function canvasGrid (){
  return  new Array(cols).fill(null)
  .map(() => new Array(rows).fill(null));
}
//Fill the grid whit random cell
function randPopulation() {
  const blank = canvasGrid();
  for (let col = 0; col < blank.length; col++) {
    for (let row = 0; row < blank[col].length; row++) {
      blank[col][row] = Math.floor(Math.random()*2)
    }
    
  }

  return blank;
}

//Paint the canvas
function render(context, grid, resolution) {
// console.log(grid);

  for (let col = 0; col < grid.length; col += 1) {
    for (let row = 0; row < grid[col].length; row += 1) {
      const cell = grid[col][row];
      context.beginPath();
      context.rect(col * resolution, row * resolution, resolution, resolution);
      context.fillStyle = cell ? 'black' : 'white';
      context.fill();
      context.stroke();
    }
  }
}

//Creates a copy of the previous gen, and return a new Gen with the changes
function newGen(grid) {
  
  const newGen = Array.of(grid);
  for (let col = 0; col < grid.length; col += 1) {
    for (let row = 0; row < grid[col].length; row += 1) {
      const cell = [col][row];
      let numNeigh = 0;
      for (let i = -1; i < 2; i += 1) {
        for (let j = -1; j < 2; j += 1) {
          if (j === 0 && i === 0) {
            continue;
          }
          cornerX = col + i;
          cornerY = row + j;
          if (cornerX >= 0 && cornerY >= 0 && cornerX < rows && cornerY < cols) {
            const currentNeigh = grid[col + i][row + j];
            numNeigh += currentNeigh;
          }
        }
      }
      if (cell === 1 && numNeigh < 2) {
        newGen[col][row] === 0;
      } else if (cell === 1 && numNeigh > 3) {
        newGen[col][row] === 0;
      } else if (cell === 0 && numNeigh === 3) {
        newGen[col][row] === 1;
      }
    }
  }
  // render(world.context, newGen, world.resolution);
  // console.log(newGen);
  
  return newGen;
}
let pop = randPopulation();
console.log(pop);

render(world.context, pop, world.resolution);
// newGen(pop);
refresh();
function refresh() {  
grid = newGen(pop);
  render(world.context, grid, world.resolution);
  setTimeout(refresh, 300);
}
// setTimeout(refresh, 300);
// world.update(world.canvasGrid);
// window.setInterval(world.update(world.canvasGrid), 300);
// randomCells(world);

function clean(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      grid= [col][row]= 0;
    }
    
  }
}

function getPos(canvas) {
  // let posCanvas = 

}

btnClear.addEventListener(('mousedown'), (ev)=> {
  clean(newGen());
});


