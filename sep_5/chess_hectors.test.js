const { Board, Rook, Horse, Bishop, Queen, King, Pawn } = require('./chess_hectors');
const { Piece } = require('./piece_hectors');

describe('Board Tests', () => {
  const board = new Board();

  test('Rejects with error when the specified start has no piece', async () => {
    const start = 'D9';

    await expect(board.moveWhite(start)).rejects.toThrow(`There is no piece in the selected ${start} cell`);
  });

  test('Rejects with error when the specified start has a piece of different color', async () => {
    const start = 'B2';
    const color = 'white';

    await expect(board.moveBlack(start)).rejects.toThrow(`The piece at ${start} is not ${color}`)
  });

  test('Board is printed out as an array', () => {
    expect(Array.isArray(board.getBoard())).toBe(true);
  });
});

describe('Pieces Tests', () => {
  describe('Pawn Tests', () => {
    test('Pawn has Piece as prototype', () => {
      expect(Piece.prototype.isPrototypeOf(Pawn.prototype)).toBe(true);
    });

    test('Pawn can move to the target location', () => {
      const pawn = new Pawn('B2', 'w');

      expect(pawn.validMove('B3')).toBe(true);
    });
  });

  describe('Rook Tests', () => {
    test('Rook has Piece as prototype', () => {
      expect(Piece.prototype.isPrototypeOf(Rook.prototype)).toBe(true);
    });

    test('Rook can move to the target location', () => {
      const rook = new Rook('C4', 'w');

      expect(rook.validMove('E4')).toBe(true);
    });
  })
});
