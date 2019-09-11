const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let resolution = 10;
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
canvas.setAttribute('width', canvas.width);
canvas.setAttribute('height', canvas.height);

let COLS = canvas.width / resolution;
let ROWS = canvas.height / resolution;

window.onload = function (){
  paint = draw ();
};

canvas.onclick = function(e){
    canvasposit = canvas.getBoundingClientRect();
    if (paint[Math.floor((e.clientX-canvasposit.left)/10)][Math.floor((e.clientY-canvasposit.top)/10)] === 1){
          paint[Math.floor((e.clientX-canvasposit.left)/10)][Math.floor((e.clientY-canvasposit.top)/10)] = 0;
          paintuniverseblank(paint);
        } else {
        paint[Math.floor((e.clientX-canvasposit.left)/10)][Math.floor((e.clientY-canvasposit.top)/10)] = 1;
        paintuniverse(paint);
        }
        
}

function buildGrid() {
  return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null)
      .map(() => Math.floor(Math.random() * 2)));
      
}


function update() {
  paint = nextGen(paint);
  render(paint);
  interval = setTimeout(update, speeds);
}

function randoms(){
  grid = nextGen(grid);
  render(grid);
  interval = setTimeout(randoms, speeds);
}

function next () {
  paint = nextGen(paint);
  render(paint);
}

function nextGen(grid) {
  const nextGen = grid.map(arr => [...arr]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];
      let numNeighbours = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }
          const x_cell = col + i;
          const y_cell = row + j;

          if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS && y_cell < ROWS) {
            const currentNeighbour = grid[col + i][row + j];
            numNeighbours += currentNeighbour;
          }
        }
      }

      // rules
      if (cell === 1 && numNeighbours < 2 || numNeighbours > 3) {
        nextGen[col][row] = 0;
      } else if (cell === 1 && numNeighbours === 2 || numNeighbours === 3) {
        nextGen[col][row] = 1;
      } else {
        nextGen[col][row] = cell;
      }
    }
  }
  return nextGen;
}

function draw () {
    for (var x=0; x<=canvas.width; x=x+10){
        ctx.moveTo(x,0);
        ctx.lineTo(x,canvas.height);
    }
    for (var y=0; y<=canvas.height; y=y+10){
        ctx.moveTo(0,y);
        ctx.lineTo(canvas.width,y);
    }
    ctx.strokeStyle = "black";
    ctx.stroke();

    return new Array(COLS).fill(null)
    .map(() => new Array(ROWS).fill(null));
}

function render(grid) {
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      ctx.beginPath();
      ctx.rect(col * resolution, row * resolution, resolution, resolution);
      ctx.fillStyle = cell ? 'black' : 'white';
      ctx.fill();
      ctx.stroke();
    }
  }
} ;

function paintuniverseblank (paint) {
    ctx.fillStyle ="#fff"
    paint.forEach( (row, rowIndex) =>
        row.forEach( (cell, colIndex) => {
            if(cell == 0) {
                ctx.fillRect(rowIndex*10,colIndex*10,10,10);
            }
        })
    ) 
    return paint;
};

function paintuniverse (paint) {
    ctx.fillStyle ="#000"
    paint.forEach( (row, rowIndex) =>
        row.forEach( (cell, colIndex) => {
            if(cell == 1) {
                ctx.fillRect(rowIndex*10,colIndex*10,10,10);
            }
        })
    ) 
    return paint;
};

function clean () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);   
    paint = draw ();
   ctx.fillStyle ="#fff"
    paint.forEach( (row, rowIndex) =>
        row.forEach( (cell, colIndex) => {
          if (cell === null){
                ctx.fillRect(rowIndex*10,colIndex*10,10,10);
          }
        })
    ) 
    draw ();
}

let grid = [];
let interval;
let speed;
let speeds;

document.getElementById('start').addEventListener('click', ()=> {
   setTimeout(update, speeds)
});

document.getElementById('random').addEventListener('click', ()=> {
    grid = buildGrid();
    setTimeout(randoms, speeds);
});

document.getElementById('next').addEventListener('click', ()=> {
     next ();
});

document.getElementById('clear').addEventListener('click', ()=> {
  clean ();
});

document.getElementById('stop').addEventListener('click', ()=> {
  clearTimeout(interval);
});

document.getElementById('speeder').addEventListener('input', (ev) => {
    speed = ev.target.value;
    speeds = Math.floor(speed * 100);
    document.getElementById('value').innerHTML=document.getElementById('speeder').value;
});



