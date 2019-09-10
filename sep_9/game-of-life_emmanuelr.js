function Board(width, height){
  this.width = width;
  this.height = height;
  this.cells = {};
}
Board.prototype = {
  giveLife(x,y){
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) console.log("geveLife fuera de rango");
    if(this.cells[`${x},${y}`] === undefined){
      this.cells[`${x},${y}`] = {
        alive: true,
        neighbours: 0,
      }
    } else this.cells[`${x},${y}`].alive = true;
    this.addNeighbour(x-1, y-1);
    this.addNeighbour(x,   y-1);
    this.addNeighbour(x+1, y-1);
    this.addNeighbour(x-1,   y);
    this.addNeighbour(x+1,   y);
    this.addNeighbour(x-1, y+1);
    this.addNeighbour(x,   y+1);
    this.addNeighbour(x+1, y+1);
  },
  addNeighbour(x,y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) console.log("addNeighbour fuera de rango");
    if(this.cells[`${x},${y}`] === undefined){
      this.cells[`${x},${y}`] = {
        alive: false,
        neighbours: 1,
      }
    } else this.cells[`${x},${y}`].neighbours += 1;
  },
  kill(x,y){
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) console.log("kill fuera de rango")
    this.cells[`${x},${y}`].alive = false;
    this.removeNeighbour(x-1, y-1);
    this.removeNeighbour(x,   y-1);
    this.removeNeighbour(x+1, y-1);
    this.removeNeighbour(x-1,   y);
    this.removeNeighbour(x+1,   y);
    this.removeNeighbour(x-1, y+1);
    this.removeNeighbour(x,   y+1);
    this.removeNeighbour(x+1, y+1);
  },
  removeNeighbour(x,y) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) console.log("removeNeighbour fuera de rango");
    if(this.cells[`${x},${y}`] === undefined) console.log('cell undefined');
    this.cells[`${x},${y}`].neighbours -= 1;
  },
  catrina(){
    const toKill = [];
    const toGiveLife = [];
    const toRemove = [];
    for (const cell in this.cells) {
      const tempNeighbours = this.cells[cell].neighbours;
      if (this.cells[cell].alive) {
        if (tempNeighbours <= 1 || tempNeighbours >= 4) {
          toKill.push(cell);
        }
      } else {
          if (tempNeighbours === 3) {
          toGiveLife.push(cell);
        } else if(tempNeighbours <= 0) {
          toRemove.push(cell);
        }
      }
    }
    toKill.forEach(cell => this.kill(+cell.split(',')[0], +cell.split(',')[1]));
    toGiveLife.forEach(cell => this.giveLife(+cell.split(',')[0], +cell.split(',')[1]));
    // toRemove.forEach(cell => (delete this.cells[cell]));
  },
  isAlive(x,y){
    if(this.cells[`${x},${y}`] === undefined) return false;
    return this.cells[`${x},${y}`].alive;     
  }
}
