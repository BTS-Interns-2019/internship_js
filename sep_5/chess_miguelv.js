module.exports = {moveWhite, moveBlack}

var posboard=[];
/*  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////// FUNCIONES /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
/* MOVER PIEZA EN EL TABLERO */
async function moveWhite(starting,target){
    try{
        return new Promise(async(resolve, reject)=>{
            let color="white";
            let board=await createBoard();
            let positionBoard;
            if(posboard.length<1){
                positionBoard=await startPositions();
            }else{
                positionBoard=posboard;
            }
            let valp = await validPiece(positionBoard,board,starting);
            if(valp){
                let piece=valp;
                if(validColor(piece,color)){
                    let type = piece.charAt(1);
                    let validpiece;
                    switch(type){
                        case 'K':
                            validpiece=new King(starting,color);
                            break;
                        case 'Q':
                            validpiece=new Queen(starting,color);
                            break;
                        case 'B':
                            validpiece=new Bishop(starting,color);
                            break;
                        case 'H':
                            validpiece=new Horse(starting,color);
                            break;
                        case 'R':
                            validpiece=new Rook(starting,color);
                            break;
                        case 'P':
                            validpiece=new Pawn(starting,color);
                            break;
                    }
                    let validmove=validpiece.validMove(target);
                    if(validmove){
                        posboard=movePiece(validpiece,positionBoard,board,starting,target);
                        resolve(validpiece);
                    }else{
                        reject(`The piece ${validpiece.key} cannot be moved to ${target}`);
                    }
                }else{
                    reject( `The piece at ${starting} is not ${color}`);
                }
            }else{
                reject(`There is no piece in the selected ${starting} cell`);
            }
        })
    }catch(e){
        console.log(e);
    }
}
async function moveBlack(starting,target){
    try{
        return new Promise(async(resolve, reject)=>{
            let color="black";
            let board=await createBoard();
            let positionBoard;
            if(posboard.length<1){
                positionBoard=await startPositions();
            }else{
                positionBoard=posboard;
            }
            let valp = await validPiece(positionBoard,board,starting);
            if(valp){
                let piece=valp;
                if(validColor(piece,color)){
                    let type = piece.charAt(1);
                    let validpiece;
                    switch(type){
                        case 'K':
                            validpiece=new King(starting,color);
                            break;
                        case 'Q':
                            validpiece=new Queen(starting,color);
                            break;
                        case 'B':
                            validpiece=new Bishop(starting,color);
                            break;
                        case 'H':
                            validpiece=new Horse(starting,color);
                            break;
                        case 'R':
                            validpiece=new Rook(starting,color);
                            break;
                        case 'P':
                            validpiece=new Pawn(starting,color);
                            break;
                    }
                    let validmove=validpiece.validMove(target);
                    if(validmove){
                        posboard=movePiece(validpiece,positionBoard,board,starting,target);
                        resolve(validpiece);
                    }else{
                        reject(`The piece ${validpiece.key} cannot be moved to ${target}`);
                    }
                }else{
                    reject( `The piece at ${starting} is not ${color}`);
                }
            }else{
                reject(`There is no piece in the selected ${starting} cell`);
            }
        })
    }catch(e){
        console.log(e);
    }
}
/* CREACION DEL TABLERO DE 8X8 */
function createBoard(){
    let board = [];
    for(let i=0, k=8; i<8; i++, k--) {
        board[i]=[];
        for(let j=0; j<8; j++) {
            board[i][j] = String.fromCharCode(64+(j+1))+k;
        }
    }
    return board;
}
/* CREACION DEL TABLERO DE 8X8 POR PIEZAS */
function startPositions(){
    let piecesboard = [];
    for(let i=0; i<8; i++) {
        piecesboard[i]=[];
        for(let j=0; j<8; j++) {
            if(i===0){
                piecesboard[i][0] = "bR";
                piecesboard[i][7] = "bR";
                piecesboard[i][1] = "bH";
                piecesboard[i][6] = "bH";
                piecesboard[i][2] = "bB";
                piecesboard[i][5] = "bB";
                piecesboard[i][3] = "bQ";
                piecesboard[i][4] = "bK";
                j=8;
            }else if(i===7){
                piecesboard[i][0] = "wR";
                piecesboard[i][7] = "wR";
                piecesboard[i][1] = "wH";
                piecesboard[i][6] = "wH";
                piecesboard[i][2] = "wB";
                piecesboard[i][5] = "wB";
                piecesboard[i][3] = "wQ";
                piecesboard[i][4] = "wK";
                j=8;
            }else if(i===1){
                piecesboard[i][j] = "bP";
            }else if(i===6){
                piecesboard[i][j] = "wP";
            }else{
                piecesboard[i][j] = "--";
            }
        }
    }
    return piecesboard;
}
/* MOVER PIEZA */
function movePiece(piece,pos,board,initial,target){
    for(let i=0, k=8; i<8; i++, k--) {
        for(let j=0; j<8; j++) {
            if(board[i][j]===target){
                piece.currentLocation=target;
                pos[i][j] = piece.color.charAt(0)+(""+piece.name.charAt(0)).toUpperCase();
            }else if(board[i][j]===initial){
                pos[i][j] = "--";
            }
        }
    }
    return pos;
}
/* REVISAR SI LA PIEZA EXISTE EN LA POSICION */
function validPiece(pos, board, piecepos){
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(board[i][j]===piecepos){
                if(pos[i][j]!=="--"){
                    return pos[i][j];
                }
            }
        }
    }
    return false;
}
/* REVISAR SI LA PIEZA CUMPLE CON EL COLOR */
function validColor(piece, color){
    let char=piece.charAt(0);
    let piececolor="";
    if(char==='w'){
        piececolor="white";
    }else if(char==='b'){
        piececolor="black";
    }
    if(piececolor===color){
        return true;
    }else{
        return false;
    }
}
/* MOVIMIENTOS DEL PEON */
function pawnPositions(initialLocation, color){
    if(initialLocation.length!== 2)return [];
    let capturePos = initialLocation.split("");
    let letter = capturePos[0];
    let number = parseInt(capturePos[1]);
    let long = createBoard().length;
    if(number==long || number==1)return [];
    if(number==2 && color=="white"){
        return [letter+""+(number+1),letter+""+(number+2)];
    }else if(color=="white"){
        return [letter+""+(number+1)];
    }else if(number==(long-1) && color=="black"){
        return [letter+""+(number-1),letter+""+(number-2)];
    }else if(color=="black"){
        return [letter+""+(number-1)];
    }else{
        return [];
    }
}
/* MOVIMIENTOS DE LA TORRE*/
function rookPositions(initialLocation){
    if(initialLocation.length!== 2)return [];
    validOnes=[];
    let capturePos = initialLocation.split("");
    let letter = capturePos[0];
    let number = parseInt(capturePos[1]);
    let board = createBoard();
    let long = board.length;
    if(number>long)return [];
    if(/[^A-H]/.test(letter))return[];
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(board[i][j]!==initialLocation){
                let char = board[i][j].charAt(0);
                let num = parseInt(board[i][j].charAt(1));
                if(char==letter){
                    validOnes.push(board[i][j])
                }else if(num===number){
                    validOnes.push(board[i][j])
                }
            }
        }
    }
    return validOnes;
}
/* MOVIMIENTOS DEL ALFIL */
function bishopPositions(initialLocation){
    if(initialLocation.length!== 2)return [];
    validOnes=[];
    let capturePos = initialLocation.split("");
    let letter = capturePos[0];
    let number = parseInt(capturePos[1]);
    let board = createBoard();
    let long = board.length;
    if(number>long)return [];
    if(/[^A-H]/.test(letter))return[];
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(board[i][j]!==initialLocation){
                let char = board[i][j].charAt(0);
                let num = parseInt(board[i][j].charAt(1));
                let ncres = letter.charCodeAt(0)-char.charCodeAt(0);
                let nnres = number - num;
                let pcres = char.charCodeAt(0)-letter.charCodeAt(0);
                let pnres = num - number;
                if(ncres===nnres){
                    validOnes.push(board[i][j])
                }else if(ncres===pnres){
                    validOnes.push(board[i][j])
                }else if(pcres===nnres){
                    validOnes.push(board[i][j])
                }else if(pcres==pnres){
                    validOnes.push(board[i][j])
                }
            }
        }
    }
    return validOnes;
}
/* MOVIMIENTOS DEL REY */
function kingPositions(initialLocation){
    if(initialLocation.length!== 2)return [];
    validOnes=[];
    let capturePos = initialLocation.split("");
    let letter = capturePos[0];
    let number = parseInt(capturePos[1]);
    let board = createBoard();
    let long = board.length;
    if(number>long)return [];
    if(/[^A-H]/.test(letter))return[];
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            if(board[i][j]===initialLocation){
                if(i-1>0){
                    validOnes.push(board[i-1][j]);
                    if(j-1>0){
                        validOnes.push(board[i-1][j-1]);
                    }
                    if(j+1<8){
                        validOnes.push(board[i-1][j+1]);
                    }
                }
                if(j-1>0){
                    validOnes.push(board[i][j-1]);
                }
                if(j+1<8){
                    validOnes.push(board[i][j+1]);
                }
                if(i+1<8){
                    validOnes.push(board[i+1][j]);
                    if(j-1>0){
                        validOnes.push(board[i+1][j-1]);
                    }
                    if(j+1<8){
                        validOnes.push(board[i+1][j+1]);
                    }
                }
            }
        }
    }
    return validOnes;
}
/* MOVIMIENTOS DEL CABALLO */
function horsePosition(initialLocation){
    if(initialLocation.length!== 2)return [];
    validOnes=[];
    let capturePos = initialLocation.split("");
    let letter = capturePos[0];
    let number = parseInt(capturePos[1]);
    let board = createBoard();
    let long = board.length;
    if(number>long)return [];
    if(/[^A-H]/.test(letter))return[];
    for(let i=0; i<8; i++){
        for(let j=0; j<8; j++){
            let cellx = [j + 2, j - 2, j + 1, j - 1].filter(function(cellPosition) {
                return (cellPosition > 0 && cellPosition < 9);
            });
            let celly = [i + 2, i - 2, i + 1, i - 1].filter(function(cellPosition) {
                return (cellPosition > 0 && cellPosition < 9);
            });
            for (let k = 0; k < cellx.length; k++) {
                for (let l = 0; l < celly.length; l++) {
                    if (Math.abs(cellX - cellx[k]) + Math.abs(cellY - celly[l]) === 3) {
                        if (!validOnes.includes([cellx[k], celly[l]])) {
                            validOnes.push(board[k][l]);
                        } 
                    }
                }
            }
        }
    }
    return validOnes;
}
/*  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////// PROTOTIPOS /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
*/
/* PROTOTIPO DE PIEZA -- PADRE */
function Piece(name, location, color){
    this.name=name;
    this.currentLocation=location;
    this.color=color;
    this.validMove=function (target){
        let isValid = this.validPositions.find((cv)=>{
            return cv===target;
        })
        if(typeof isValid === "undefined"){
            return false;
        }else{
            return true;
        }
    }
}

Piece.prototype = {
    validPositions: [],
    name: "",
    currentLocation: "",
    color: ""
}
/* PROTOTIPO DE PIEZA -- PAWN           PEON */
function Pawn(location, color){
    this.key = color.charAt(0)+"P";
    Piece.call(this,"pawn",location,color);
    this.validPositions=pawnPositions(location, color);
}
/* PROTOTIPO DE PIEZA -- BISHOP         ALFIL */
function Bishop(location, color){
    this.key = color.charAt(0)+"B";
    Piece.call(this,"bishop",location,color);
    this.validPositions=bishopPositions(location);
}
/* PROTOTIPO DE PIEZA -- HORSE          CABALLO */
function Horse(location, color){
    this.key = color.charAt(0)+"H";
    Piece.call(this,"horse",location,color);
    this.validPositions=horsePosition(location);
}
/* PROTOTIPO DE PIEZA -- ROOK           TORRE */
function Rook(location, color){
    this.key = color.charAt(0)+"R";
    Piece.call(this,"rook",location,color);
    this.validPositions=rookPositions(location);
}
/* PROTOTIPO DE PIEZA -- QUEEN          REINA */
function Queen(location, color){
    this.key = color.charAt(0)+"Q";
    Piece.call(this,"queen",location,color);
    this.validPositions=rookPositions(location).concat(bishopPositions(location));
}
/* PROTOTIPO DE PIEZA -- KING           REY */
function King(location, color){
    this.key = color.charAt(0)+"K";
    Piece.call(this,"king",location,color);
    this.validPositions=kingPositions(location);
}

/* Proceso 
    a   createBoard() - Crea el tablero
    b   startPositions() - Inicia las posiciones del tablero de piezas blacks arriba, whites abajo
    c   validar si la posicion es valida (validPiece), sino responder "There is no piece in the selected {location} cell"
    d       validar si el color corresponde a la pieza (validColor), sino responder "The piece at {location} is not {expected_color}"
    e           inicializar pieza correspondiente a la posicion ej. new Pawn("E2","white") cuando startPosition posicion es wP
    f           verificar si el movimiento es valido (true), sino responder "The piece {name_of_piece} cannot be moved to {target}"
    g               si paso hacer move piece con los valores de la pieza, posicion en el tablero de piezas, posiciones del tablero de posiciones, ubicacion actual y objetivo
    h   vuelve a #c
*/