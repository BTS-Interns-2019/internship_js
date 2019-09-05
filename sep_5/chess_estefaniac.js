function Piece(type, side) {
   this.type = type;
   this.side = side;
}

function chessBoard() {
    this.boardColumns = new Array(8);
    // chess board square creation and looping variables
    var colNum = "A";
    var rowNum = 1;
    var isOccupied = false;
    var pieceOccupying = null;

    for (i = 0; i < boardColumns.length; i++) {
        // column array
        var columns = new Array(8);
        boardColumns[i] = columns;

        for (j = 0; j < boardColumns[i].length; j++) {
            var name = colNum + rowNum.toString();
            var square = new chessBoardSquare(name, occupied, pieceOccupying);
            board[i][j] = square;
            rowNum++;
        } 
        // column letter increment
        String.fromCharCode(colNum.charCodeAt() + 1);
    } 

    // this.moveWhite = function(startingCell, targetCell) {
    //     return new Promise = ((resolve, reject) => {
    //         resolve(startingCell);
    //         reject()
    //     }
    // }
    // this.moveBlack = function(startingCell, targetCell) {
    //     return new Promise = ((resolve, reject) => {
    //     }
    // }
} 


function Pawn(color) {
    this.location 
    this.color = color;
    this.pieceName = "Pawn";
    // this.validMove = validMove(taget)
} 

// function Bishop(color) {
//     this.location 
//     this.color = color;
//     this.pieceName = "Bishop";
//     this.validMove = validMove(taget)
// } 

// function Horse(color) {
//     this.location 
//     this.color = color;
//     this.pieceName = "Horse";
//     this.validMove = validMove(taget)
// } 

// function Rook(color) {
//     this.location 
//     this.color = color;
//     this.pieceName = "Rook";
//     this.validMove = validMove(taget)
// } 

// function Queen(color) {
//     this.location 
//     this.color = color;
//     this.pieceName = "Queen";
//     this.validMove = validMove(taget)
// }

// function King(color) {
//     this.location 
//     this.color = color;
//     this.pieceName = "King";
//     this.validMove = validMove(taget)
// } 

function startBoard(chessBoard) {
    // empty chess board variable
    var chessBoard = chessBoard;
    // create chess pieces
    var whiteAPawn = new Pawn('white')
}
    
console.log(startBoard(chessBoard))