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

function Piece(location, color, pieceName) {
    this.location = location
    this.color = color;
    this.pieceName = pieceName;
}


function Pawn(location, color) {
    Piece.call(this, location, color, 'Pawn')
    this.validMove = validMove(taget)
} 

function Bishop(location, color) {
    Piece.call(this, location, color, 'Bishop')
    this.validMove = validMove(taget)
} 

function Horse(location, color) {
    Piece.call(this, location, color, 'Horse')
    this.validMove = validMove(taget)
} 

function Rook(location, color) {
    Piece.call(this, location, color, 'Rook')
    this.validMove = validMove(taget)
} 

function Queen(location, color) {
    Piece.call(this, location, color, 'Queen')
    this.validMove = validMove(taget)
}

function King(location, color) {
    Piece.call(this, location, color, 'King')
    this.validMove = validMove(taget)
} 

function startBoard(chessBoard) {
    // empty chess board variable
    var chessBoard = chessBoard;
    // create chess pieces
    var whiteAPawn = new Pawn('white')
}
    
console.log(startBoard(chessBoard))