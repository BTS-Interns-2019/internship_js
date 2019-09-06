const letras = {A: 0, B:1, C:2, D:3, E:4, F:5, G:6, H:7};
const arrLetras = ['A','B','C','D','E','F','G','H'];
function Board(){
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
Board.prototype = {
  move(source, target, color) {
    return new Promise((resolve,reject) =>{
      if (!this.board[source]) return reject (`There is no piece in the selected ${source} cell`);
      if (this.board[source].color !== color) return reject (`The piece at ${source} is not ${color}`);
      const targetXY = target.split('');
      if (targetXY[0] < 1 || targetXY[0] > 8 || (letras[targetXY[1]]===undefined)) return reject (`The piece ${this.board[source].pieceName} cannot be moved to ${target}`);
      if (source===target || !this.board[source].validMove(target)) return reject (`The piece ${this.board[source].pieceName} cannot be moved to ${target}`);
      this.board[source].location=target;
      this.board[target] = this.board[source];
      this.board[source] = undefined;
      return resolve (this.board[target]);
    });
  },
  moveWhite(source, target) { return this.move(source, target, 'white') },
  moveBlack(source, target) { return this.move(source, target, 'black') },
  getBoard(){
    const output = [];
    for (let i = 8; i > 0; i -= 1) {
      output.push(arrLetras.map((letra => {
        const piece = this.board[(i)+letra];
        if (piece === undefined) return '';
        return piece.color.substring(0,1)+piece.pieceName.substring(0,1).toUpperCase();
      })));
    }
    return output;
  },
}

function Piece(location, pieceName, color) {
  this.location = location;
  this.pieceName = pieceName;
  this.color = color;
}

function Pawn(location, color) {
  Piece.call(this, location, 'pawn', color);
}
function Rook(location, color) {
  Piece.call(this, location, 'rook', color);
}
function Horse(location, color) {
  Piece.call(this, location, 'horse', color);
}
function Queen(location, color) {
  Piece.call(this, location, 'queen', color);
}
function King(location, color) {
  Piece.call(this, location, 'king', color);
}
function Bishop(location, color) {
  Piece.call(this, location, 'boshop', color);
}

Pawn.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const targetXY = target.split('');
      const targetCoordinates = [targetXY[0] - 1, letras[targetXY[1]]];
      const sourceXY = this.location.split('');
      const sourceCoordinates = [sourceXY[0] - 1, letras[sourceXY[1]]];
      const avanceNumero = targetCoordinates[0] - sourceCoordinates[0];
      const avanceLetra = targetCoordinates[1]-sourceCoordinates[1];
      if (Math.abs(avanceLetra) > 1) return false;
      if (this.color === 'white') {
        if (avanceNumero > 2 || avanceNumero <= 0) return false;
        if (avanceNumero === 2 && ((sourceCoordinates[0] > 1 || avanceLetra !== 0))) return false
      } else if (this.color === 'black') {
        if (avanceNumero < -2 || avanceNumero >= 0) return false;
        if (avanceNumero === -2 && ((sourceCoordinates[0] < 6 || avanceLetra !== 0))) return false
      }
      return true;
    },
    writable: false,
  }
});
Rook.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const targetXY = target.split('');
      const targetCoordinates = [targetXY[0] - 1, letras[targetXY[1]]];
      const sourceXY = this.location.split('');
      const sourceCoordinates = [sourceXY[0] - 1, letras[sourceXY[1]]];
      const avanceNumero = targetCoordinates[0] - sourceCoordinates[0];
      const avanceLetra = targetCoordinates[1]-sourceCoordinates[1];
      if(avanceNumero !== 0 && avanceLetra !== 0) return false;
      return true;
    },
    writable: false,
  }
})
Bishop.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const targetXY = target.split('');
      const targetCoordinates = [targetXY[0] - 1, letras[targetXY[1]]];
      const sourceXY = this.location.split('');
      const sourceCoordinates = [sourceXY[0] - 1, letras[sourceXY[1]]];
      const avanceNumero = targetCoordinates[0] - sourceCoordinates[0];
      const avanceLetra = targetCoordinates[1]-sourceCoordinates[1];
      if(Math.abs(avanceNumero) !== Math.abs(avanceLetra)) return false;
      return true;
    },
    writable: false,
  }
})
Horse.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const targetXY = target.split('');
      const targetCoordinates = [targetXY[0] - 1, letras[targetXY[1]]];
      const sourceXY = this.location.split('');
      const sourceCoordinates = [sourceXY[0] - 1, letras[sourceXY[1]]];
      const avanceNumero = targetCoordinates[0] - sourceCoordinates[0];
      const avanceLetra = targetCoordinates[1]-sourceCoordinates[1];
      if(Math.abs(avanceNumero) > 2 || avanceNumero === 0) return false;
      // if(Math.abs(avanceLetra) > 2 || avanceLetra === 0) return false;
      if(Math.abs(avanceLetra) + Math.abs(avanceNumero) !== 3) return false;
      return true;
    },
    writable: false,
  }
})
King.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const targetXY = target.split('');
      const targetCoordinates = [targetXY[0] - 1, letras[targetXY[1]]];
      const sourceXY = this.location.split('');
      const sourceCoordinates = [sourceXY[0] - 1, letras[sourceXY[1]]];
      const avanceNumero = targetCoordinates[0] - sourceCoordinates[0];
      const avanceLetra = targetCoordinates[1]-sourceCoordinates[1];
      if(Math.abs(avanceLetra) > 1 || Math.abs(avanceNumero) > 1) return false;
      return true;
    },
    writable: false,
  }
})
Queen.prototype = Object.create(Piece.prototype, {
  validMove: {
    value(target) {
      const targetXY = target.split('');
      const targetCoordinates = [targetXY[0] - 1, letras[targetXY[1]]];
      const sourceXY = this.location.split('');
      const sourceCoordinates = [sourceXY[0] - 1, letras[sourceXY[1]]];
      const avanceNumero = targetCoordinates[0] - sourceCoordinates[0];
      const avanceLetra = targetCoordinates[1]-sourceCoordinates[1];
      if(avanceNumero === 0 && avanceLetra !== 0) return true;
      if(avanceNumero !== 0 && avanceLetra === 0) return true;
      if(Math.abs(avanceNumero) === Math.abs(avanceLetra)) return true;
      return false;
    },
    writable: false,
  }
})
x = async function (){
  console.log(await tablero.moveBlack('7A','5B'))
} 
x()
module.exports = { Board };
