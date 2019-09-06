/*
function Board () {
    this.Boardcolumns = new Array(8);
    colnum = 'A';   
    isoccupied = false;
    pieceOccupying = null;

    for (i = 0; i < Boardcolumns.length; i++){
        columns = new Array(8);
        Boardcolumns[i] = columns;
        
        rownum = 1;
        for (j = 0; j < Boardcolumns[i].length; j++) {
            name = colnum + rownum.toString();
            square =  getBoard (name, isoccupied, pieceOccupying);
            Boardcolumns[i][j] = square;
            
            rownum++;
        }
        colnum = String.fromCharCode(colnum.charCodeAt(0) + 1);
    }
    console.log(Boardcolumns);
}

function getBoard (name, isoccupied, pieceOccupying) {
    this.name = name;
    this.isoccupied = isoccupied;
    this.pieceOccupying = pieceOccupying;

    this.getName = function () {
        return this.name;
    }

    this.getoccupied = function () {
        return this.getoccupied;
    }

    this.getpieceoccupying = function () {
        return this.getpiecegetoccupying;
    }

    this.setname = function (name) {
         this.name = name;
    }

    this.setoccupied = function (name) {
        this.name = name;
    }

    this.setpieceoccupying = function (name) {
        this.name = name;
    }

    return this.name;
} */

function Piece (location, color, pieceName){
    this.location = location;
    this.color = color;
    this.pieceName = pieceName;
} 

function Rook (location, color) {
    Piece.call(this, location, color, 'Rook');
}

Rook.prototype = Object.create(Piece.prototype, {
    validMove: {
        value(target) {
            const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const targetColumn = target.substring(0,1);
            const currentColumn = this.location.substring(0,1);
            const targetRow = +target.substring(target.length -1);
            const currentRow = +this.location.substring(target.length -1);

            if (targetRow > 8 || targetRow < 1 || !columns.includes(targetColumn)){
                return false;
            }
            if (targetColumn !== currentColumn && targetRow !== currentRow){
                return false;
            }
            return true;
        },
    },
});

function Horse (location, color) {
    Piece.call(this, location, color, 'Horse')
}

Horse.prototype = Object.create (Piece.prototype, {
    validMove: {
        value(target) {
            const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const targetColumn = target.substring(0,1);
            const currentColumn = this.location.substring(0,1);
            const targetColumnNumber = columns.indexOf(targetColumn) + 1;
            const currentColumnNumber = columns.indexof(currentColumn) + 1;
            const targetRow = +target.substring(target.length - 1);
            const currentRow = +this.location.substring(target.length - 1);

            if (targetRow > 8 || targetRow < 1 || !columns.includes(targteColumn)){
                return false;
            }
            if ((Math.abs(targetRow - currentRow) + Math.abs(targetColumnNumber - currentColumnNumber)) !== 3) {
                return false;
            }
            return true;
        },
    },
});

function Bishop (location, color) {
    Piece.call(this, location, color, 'Bishop');
}

Bishop.prototype = Object.create(Piece.prototype, {
    validMove: {
        value(target) {
            const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const targetColumn = target.substring(0,1);
            const currentColumn = this.location.substring(0,1);
            const targetColorNumber = columns.indexOf(targetColumn) + 1;
            const curreColumnNumber = columns.indexOf(currentColumn) + 1;
            const targetRow = +target.substring(target.length - 1);
            const currentRow = +this.location.substring(target.length - 1);

            if (target > 8 || target < 1 || !columns.includes(targetColumn)){
                return false;
            }
            if (Math.abs(targetRow - currentRow) !== Math.abs(targetColumnNumber - currentColumnNumber)){
                return false;
            }
            return true;
        },
    },
});

function Queen (location, color) {
    Piece.call(this, location, color, 'Queen');
}

Queen.prototype = Object.create(Piece.prototype, {
    validMove: {
        value(target) {
            const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const targetColumn = target.substring(0,1);
            const currentColumn = this.location.substring(0,1);
            const targetColumnNumber = columns.indexOf(targetColumn) + 1;
            const currentColumnNumber = columns.indexOf(currentColumn) + 1;
            const targetRow = +target.substring(target.length - 1);
            const currentRow = +this.location.substring (target.length - 1);

            if (target > 8 || target < 1 || !columns.includes(targetColumn)) {
                return false;
            }
            if (Math.abs(targetRow - currentRow) === Math.abs(targetColumnNumber - currentColumnNumber)){
                return false;
            }
            return true;
        },
    },
});

function King (location, color){
    Piece.call(this, location, color, 'King');
}

King.prototype = Object.create(Piece.prototype, {
    validMove: {
        value(target){
            const columns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
            const targetColumn = target.substring(0,1);
            const currentColumn = this.location.substring(0,1);
            const targetColumnNumber = columns.indexOf(targetColumn) + 1;
            const currentColumnNumber = columns.indexOf(currentColumn) + 1;
            const targetRow = target.substring(target.length - 1);
            const currentRow = this.location.substring(target.length - 1);

            if (target > 8 || target < 1 || !columns.includes(targetColumn)){
                return false;
            }
            if (targetColumn === currentColumn && (Math.abs(targetRow - currentRow) === 1)){
                return true;
            }
            if (targetRow === currentRow && (Math.abs(targetColumnNumber - currentColumnNumber)) === 1){
                return true;
            }
            if (Math.abs(targetRow - currentRow) === 1 && Math.abs(targetColumnNumber - currentColumnNumber) === 1){
                return true;
            }
            return false;
        },
    },
});

function Pawn (location, color) {
    Piece.call(this, location, color, 'Pawn');
}

Pawn.prototype = Object.create(Piece.prototype, {
    validMove: {
        value(target) {
            const targetRow = target.substring (target.length - 1);
            const currentRow = this.location.substring(target.length - 1);

            if (targetRow > 8 || targetRow < 1){
                return false;
            }
            if ((targetRow - currentRow) !== 1){
                return false;
            }
            if (this.color === 'b' && targetRow >= currentRow){
                return false;
            }
            if (this.color === 'w' && targetRow <= currentRow){
                return false;
            }
            return true;
        },
    },
});


function Board () {
    const wR1 = new Rook ('A1', 'w');
    const wH1 = new Horse ('B1', 'w');
    const wB1 = new Bishop ('C1', 'w');
    const wK = new King ('D1', 'w');
    const wQ = new Queen ('E1', 'w');
    const wB2 = new Bishop ('F1', 'w');
    const wH2 = new Horse ('G1', 'w');
    const wR2 = new Rook ('H1', 'w');
    const wP1 = new Pawn ('A2', 'w');
    const wP2 = new Pawn ('B2', 'w');
    const wP3 = new Pawn ('C2', 'w');
    const wP4 = new Pawn ('D2', 'w');
    const wP5 = new Pawn ('E2', 'w');
    const wP6 = new Pawn ('F2', 'w');
    const wP7 = new Pawn ('G2', 'w');
    const wP8 = new Pawn ('H2', 'w');

    const bR1 = new Rook ('A8', 'b');
    const bH1 = new Horse ('B8', 'b');
    const bB1 = new Bishop ('C8', 'b');
    const bK = new King ('D8', 'b');
    const bQ = new Queen ('E8', 'b');
    const bB2 = new Bishop ('F8', 'b');
    const bH2 = new Horse ('G8', 'b');
    const bR2 = new Rook ('H8', 'b');
    const bP1 = new Pawn ('A7', 'b');
    const bP2 = new Pawn ('B7', 'b');
    const bP3 = new Pawn ('C7', 'b');
    const bP4 = new Pawn ('D7', 'b');
    const bP5 = new Pawn ('E7', 'b');
    const bP6 = new Pawn ('F7', 'b');
    const bP7 = new Pawn ('G7', 'b');
    const bP8 = new Pawn ('H7', 'b');

    this.pieces = [
        wR1,
        wH1,
        wB1,
        wQ,
        wK,
        wB2,
        wH2,
        wR2,
        wP1,
        wP2,
        wP3,
        wP4,
        wP5,
        wP6,
        wP7,
        wP8,

        bR1,
        bH1,
        bB1,
        bQ,
        bK,
        bB2,
        bH2,
        bR2,
        bP1,
        bP2,
        bP3,
        bP4,
        bP5,
        bP6,
        bP7,
        bP8,
    ]
};

    Board.prototype = {
        movePiece(start, target, color){
            return new Promise ((resolve, reject) => {
                const piece = this.pieces.find(p => p.location === start.toUpperCase());

                if (!piece){
                    reject(new Error('There is no piece in the selected'+start+' cell'));
                }
                if (piece){
                    if (piece.color === color){
                        if (piece.validMove(target)){
                            piece.location = target.toUpperCase();
                            resolve(piece);
                        } else {
                            reject (new Error ('The piece'+piece.name+' cannot be moved to'+target));
                        }
                    } else {
                        reject (new Error ('The piece at'+start+' is not white'));
                    }
                }
            });
        },
        moveWhite(start, target) {
            return this.movePiece(start, target, 'w');
        },
        moveBlack(start, target) {
            return this.movePiece(start, target, 'b');
        },
        getBoard () {
            const board = new Array (8);
            rownum = '1';
            for (i = 0; i < board.length; i++){
                    const row = new Array (8);
                    board[i] = row;
                    colnum = 'A';
                for (j = 0; j < row.length; j++){
                   const currentPosition = colnum + rownum.toString();
                   const piece = this.pieces.find(p => p.location === currentPosition);
                   
                   if (piece){
                       board[i][j] = piece.color + piece.pieceName.slice(0,1);
                   } else {
                       board[i][j] = ' ';
                   }
                  colnum = String.fromCharCode(colnum.charCodeAt(0) + 1); 
                }
                
                rownum ++; 
            }
            return board;
       },
    };
const board = new Board();
console.log(board.getBoard())

