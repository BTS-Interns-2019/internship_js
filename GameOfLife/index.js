function Canvas(canvas, width, height, resolution) {
  this.canvas = canvas;
  this.width = width;
  this.height = height;
  this.resolution = resolution;
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  this.cols = this.width / this.resolution ;
  this.rows = this.height / this.resolution;
  this.context = this.canvas.getContext('2d');
  this.canvasGrid = new Array(this.cols).fill(null)
    .map(() => new Array(this.rows).fill(null).map(() => 
      Math.floor(Math.random() * 2)));
}
function render(context, grid, resolution) {
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
};

update = function (grid) {
  this.render();
  window.setInterval(this.update, 300)
 }

function newGen(grid, cols , rows) {
  const newGen = grid.map( (arr) => [...arr]);
  for (let col = 0; col < grid.length; col += 1) {
    for (let row = 0; row < grid[col].length; row +=1) {
      const cell = [col][row];
      let numNeigh =0;
      for (let i = -1; i < 2; i += 1) {
        for (let j = -1; j < 2; j += 1) {
          cornerX = col+i;
          cornerY = col + j;         
          if (cornerX >= 0 && cornerY >=0 && cornerX < rows && cornerY <cols) {
            const currentNeigh = grid[col+ i][row+ j];
            numNeigh += currentNeigh;
          }
        }  
      }
      //The rulez
      if (cell === 1 && numNeigh <2) {
        newGen[col][row] === 0;
      } else if (cell === 1 && numNeigh >3) {
        newGen[col][row] === 0;
      }else if (cell === 0 && numNeigh === 3) {
        newGen[col][row] === 1;
      }
    }
  }
return newGen;
}
const canvas = document.querySelector('canvas');
const world = new Canvas(canvas, 500, 400, 10);
render(world.context,world.canvasGrid, world.resolution);
update();
// world.update(world.canvasGrid);
// window.setInterval(world.update(world.canvasGrid), 300);
// randomCells(world);

function Cell(size, posx, posY) {
  this.size = size;
  this.posY = posY;
  this.posx = posx;
}
