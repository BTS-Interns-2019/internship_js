function Board(){
    //Blancas peones
    const bP1 = new Pawn("A2", "B");
    const bP2 = new Pawn("B2", "B");
    const bP3 = new Pawn("C2", "B");
    const bP4 = new Pawn("D2", "B");
    const bP5 = new Pawn("E2", "B");
    const bP6 = new Pawn("F2", "B");
    const bP7 = new Pawn("G2", "B");
    const bP8 = new Pawn("H2", "B");
    //tras
    const bK = new King("E1", "B");
    const bQ = new Queen("D2", "B");
    const board = new Array(8);
    for (let i = 0; i < tablero.length; i++) {
        tablero[i] = new Array(8);
    }
    for (let i = 0; i < tablero.length; i++) {
        for (let a = 0; a < tablero[i].length; a++) {
            tablero[i][a] = 0;
        }
    }
}

const Letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
function Piece(location, color,pieceName){
    this.location = location;
    this.color = color;
    this.pieceName=pieceName;
}

function King(location, color){
    Piece.call(this, location, color, "King");
}
King.prototype = Object.create(Piece.prototype, {
    validMove:{
        value(target){

            const arr = this.location.split('');
            const startColumn = arr[0].toUpperCase();
            const startRow = arr[1];
            const startColumnNumber = Letras.indexOf(startColumn) + 1;

            const arr2 = target.split('');
            const goColumn = arr2[0].toUpperCase();
            const goRow = arr2[1];
            const goColumnNumber =  Letras.indexOf(goColumn) + 1;

            if(!Letras.includes(goColumn) || goRow > 8 || goColumn < 1){
                return false;
            }
            if(startColumn === goColumn && startRow === goRow){
                return false;
            }
            if(startRow === goRow && Math.abs(startColumnNumber - goColumnNumber) ===1){
                return true;
            }
            if(startColumn === goColumn && Math.abs(startRow - goRow) === 1 ){
                return true;
            }
            if(Math.abs(startColumnNumber - goColumnNumber) ===1 && Math.abs(startRow - goRow) === 1){
                return true;
            }
            return false;
        }
    }
});
const rey = new King("g4", "B");
console.log(rey.validMove("g2"));

//reina
function Queen(location, color){
    Piece.call(this, location, color, "Queen");
}
Queen.prototype = Object.create(Piece.prototype,{
    validMove:{
        value(target){
            const arr = this.location.split('');
            const startColumn = arr[0].toUpperCase();
            const startRow = arr[1];
            const startColumnNumber = Letras.indexOf(startColumn) + 1;

            const arr2 = target.split('');
            const goColumn = arr2[0].toUpperCase();
            const goRow = arr2[1];
            const goColumnNumber =  Letras.indexOf(goColumn) + 1;

            if(!Letras.includes(goColumn) || goRow > 8 || goColumn < 1){
                return false;
            }
            if(startColumn === goColumn && startRow === goRow){
                return false;
            }
            if(startColumn === goColumn || startRow === goRow){
                return true;
            }
            if(Math.abs(startColumnNumber - goColumnNumber) === Math.abs(startRow-goRow)){
                return true;
            }
            return false;
        }
    }
});
const reina = new Queen("g4", "B");
// console.log(reina.validMove("h8"));

//Alfil
function Bishop(location, color){
    Piece.call(this, location, color, "Bishop");
}
Bishop.prototype = Object.create(Piece.prototype,{
    validMove:{
        value(target){
            const arr = this.location.split('');
            const startColumn = arr[0].toUpperCase();
            const startRow = arr[1];
            const startColumnNumber = Letras.indexOf(startColumn) + 1;

            const arr2 = target.split('');
            const goColumn = arr2[0].toUpperCase();
            const goRow = arr2[1];
            const goColumnNumber =  Letras.indexOf(goColumn) + 1;

            if(!Letras.includes(goColumn) || goRow > 8 || goColumn < 1){
                return false;
            }
            if(startColumn === goColumn && startRow === goRow){
                return false;
            }
            if(Math.abs(startRow-goRow) !== Math.abs(startColumnNumber - goColumnNumber)){
                return false;
            }
            return true;
        }
    }
});
const alfil = new Bishop("g4", "B");
// console.log(alfil.validMove("e6"));

//Caballo
function Horse(location, color){
    Piece.call(this, location, color, "Horse");
}
Horse.prototype = Object.create(Piece.prototype,{
    validMove:{
        value(target){
            const arr = this.location.split('');
            const startColumn = arr[0].toUpperCase();
            const startRow = arr[1];
            const startColumnNumber = Letras.indexOf(startColumn) + 1;
            
            const arr2 = target.split('');
            const goColumn = arr2[0].toUpperCase();
            const goRow = arr2[1];
            const goColumnNumber =  Letras.indexOf(goColumn) + 1;

            if(!Letras.includes(goColumn) || goRow > 8 || goColumn < 1){
                return false;
            }
            if(Math.abs(startColumnNumber - goColumnNumber) + Math.abs(startRow - goRow) !== 3){
                return false;
            }
            if(startColumn === goColumn && startRow === goRow){
                return false;
            }
            return true;
        }
    }
});
const caballo = new Horse("G4", "W");
// console.log(caballo.validMove("f5"));

//Torre
function Rock(location, color){
    Piece.call(this, location, color, "Rock");
}
Rock.prototype = Object.create(Piece.prototype,{
    validMove:{
        value(target){
            const arr = this.location.split('');
            const startColumn = arr[0].toUpperCase();
            const startRow = arr[1];
            
            const arr2 = target.split('');
            const goColumn = arr2[0].toUpperCase();
            const goRow = arr2[1];
            if(!Letras.includes(goColumn) || goRow > 8 || goColumn < 1){
                return false;
            }
            if(startColumn === goColumn && startRow === goRow){
                return false;
            }
            if(startColumn === goColumn && startRow !== goRow){
                return true;
            }else if(startColumn !== goColumn && startRow === goRow){
                return true;
            }else{    
                return false;
            }
        }
    }
});
const torre = new Rock("B5","B");
// console.log(torre.validMove("C6"));

//Peon
function Pawn(location,color){
    Piece.call(this, location, color, "Pawn");
}
Pawn.prototype = Object.create(Piece.prototype,{
    firstMove:{
        value:true,
        writable:true
    },
    validMove:{
        value(target){
            const arr = this.location.split('');
            const startColumn = arr[0].toUpperCase();
            const startRow = arr[1];
            
            const arr2 = target.split('');
            const goColumn = arr2[0].toUpperCase();
            const goRow = arr2[1];
            if(this.firstMove){
                if(Math.abs(startRow - goRow) > 2 || Math.abs(startRow - goRow) <1){
                    return false;
                }
            } else{
                if(Math.abs(startRow - goRow) >1 || Math.abs(startRow - goRow) <1){
                    console.log("entre");
                    return false;
                }
            }
            if(startColumn === goColumn && startRow === goRow){
                return false;
            }
            if(startColumn !== goColumn || startRow === goRow){
                return false;
            }
            if(!Letras.includes(goColumn) || goRow > 8 || goColumn < 1){
                return false;
            }
            this.firstMove = false;
            //change location
            this.location = target;
            return true;
        }
    }
});

const peon = new Pawn("G4", "W");
// console.log(peon.valideMove("G6"));
// console.log(peon.valideMove("F7"));
module.exports = {
    Piece,
    Pawn,
    Rook,
    Horse,
    Bishop,
    Queen,
    King
  };