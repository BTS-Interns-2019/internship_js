function mapping(location) {
    const letras = {
        A: 0,
        B: 1,
        C: 2,
        D: 3,
        E: 4,
        F: 5,
        G: 6,
        H: 7,
      };
      const toMap = location.split('');
      const result = toMap.map((val, arr, index) => arr[toMap[index]]);
      return result;
}
console.log(mapping('G4'));

function Board(position) {

}
function Piece(location, color, pieceName) {
  this.location = location;
  this.color = color;
  this.pieceName = pieceName;
  this.validMove = {};
}
function Pawn(location, color, pieceName) {
  Piece.apply(this, [location, color, pieceName]);
}

Pawn.prototype = Object.create(Piece,
  this.validMove = {
    get(target) {
      if (this.color === 'w' && this.location[1] - target[1] === 1 && this.location[0] === target[0]) {
        return true;
      } if (this.color === 'b' && this.location[1] - target[1] === -1 && this.location[1] - target[1] === 1 && this.location[0] === target[0]) {
        return false;
      }
    },
  });
const p = new Pawn('g4', 'w', 'Pawn');
console.log(p.pieceName);
console.log(p.color);
