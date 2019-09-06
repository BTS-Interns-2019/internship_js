// row = [a,b,c,d,e,f,g,h]
const row = {
  a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8,
};

const column = [1, 2, 3, 4, 5, 6, 7, 8];

function board(){
  this.board = {};
  this.board['1A'] = new Rook('1A', 'white');
  this.board['1B'] = new Horse('1B', 'white');
  this.board['1C'] = new Bishop('1C', 'white');
  this.board['1D'] = new Queen('1D', 'white');
  this.board['1E'] = new King('1E', 'white');
  this.board['1F'] = new Bishop('1F', 'white');
  this.board['1G'] = new Horse('1G', 'white');
  this.board['1H'] = new Rook('1H', 'white');
  this.board['2A'] = new Pawn('2A', 'white');
  this.board['2B'] = new Pawn('2B', 'white');
  this.board['2C'] = new Pawn('2C', 'white');
  this.board['2D'] = new Pawn('2D', 'white');
  this.board['2E'] = new Pawn('2E', 'white');
  this.board['2F'] = new Pawn('2F', 'white');
  this.board['2G'] = new Pawn('2G', 'white');
  this.board['2H'] = new Pawn('2H', 'white');
  
  this.board['8A'] = new Rook('8A', 'black');
  this.board['8B'] = new Horse('8B', 'black');
  this.board['8C'] = new Bishop('8C', 'black');
  this.board['8D'] = new Queen('8D', 'black');
  this.board['8E'] = new King('8E', 'black');
  this.board['8F'] = new Bishop('8F', 'black');
  this.board['8G'] = new Horse('8G', 'black');
  this.board['8H'] = new Rook('8H', 'black');
  this.board['7A'] = new Pawn('7A', 'black');
  this.board['7B'] = new Pawn('7B', 'black');
  this.board['7C'] = new Pawn('7C', 'black');
  this.board['7D'] = new Pawn('7D', 'black');
  this.board['7E'] = new Pawn('7E', 'black');
  this.board['7F'] = new Pawn('7F', 'black');
  this.board['7G'] = new Pawn('7G', 'black');
  this.board['7H'] = new Pawn('7H', 'black');

}

// function Piece(location, color, pieceName) {
//   this.location = location;
//   this.color = color;
//   this.pieceName = pieceName;
//   this.validMove = () => {};
// }

function Piece(location, color, pieceName) {
  this.location = location;
  this.color = color;
  this.pieceName = pieceName;
}

function Queen(location, color){
  Piece.call(this, location, color, 'Queen');
}

function King(location, color){
  Piece.call(this, location, color, 'King');
}

function Bishop(location, color){
  Piece.call(this, location, color, 'Bishop');
}
function Pawn(location, color){
  Piece.call(this, location, color, 'Pawn');
}

function Rook(location, color){
  Piece.call(this, location, color, 'Rook');
}

function Horse(location, color){
  Piece.call(this, location, color, 'Horse');
}