const { Board } = require('./chess_emmanuelr');
test('Mover un peon', async () => {
    const tablero = new Board();
    expect(await tablero.moveBlack('7A','5A')).toEqual(JSON.parse('{"color": "black", "location": "5A", "pieceName": "pawn"}'));
})
test('Mover mal un peon', async () => {
    const tablero = new Board();
    let message;
    try{
        message = await tablero.moveBlack('7A','5B');
    }catch (e){
        message = e;
    }
    expect(message).toBe('The piece pawn cannot be moved to 5B');
})

test('mover un monton de piecitas', async () => {
    const tablero = new Board();
    await tablero.moveBlack('7A','5A');
    await tablero.moveBlack('5A','4A');
    await tablero.moveBlack('8A','5A');
    await tablero.moveBlack('7B','5B');
    await tablero.moveBlack('8B','6C');
    await tablero.moveBlack('8C','7B');
    await tablero.moveBlack('7D','5D');
    await tablero.moveBlack('8D','7D');
    await tablero.moveBlack('8E','8D');
    await tablero.moveBlack('7D','3H');
    expect(tablero.getBoard()).toEqual(JSON.parse('[["", "", "", "bK", "", "bB", "bH", "bR"], ["", "bB", "bP", "", "bP", "bP", "bP", "bP"], ["", "", "bH", "", "", "", "", ""], ["bR", "bP", "", "bP", "", "", "", ""], ["bP", "", "", "", "", "", "", ""], ["", "", "", "", "", "", "", "bQ"], ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"], ["wR", "wH", "wB", "wQ", "wK", "wB", "wH", "wR"]]'));
})
