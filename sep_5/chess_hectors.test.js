const { Board, Piece, Rook, Horse, Bishop, Queen, King, Pawn } = require('./chess_hectors');

describe('Board Tests', () => {
  const board = new Board();

  test('Board can move a piece', async () => {
    const start = 'C1'; // first white bishop
    const target = 'G5';
    const testBishop = {
      location: 'G5',
      color: 'w',
      pieceName: 'Bishop',
    };

    await expect(board.moveWhite(start, target)).resolves.toEqual(testBishop);
  });

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
  });

  describe('Horse Tests', () => {
    test('Horse has Piece as prototype', () => {
      expect(Piece.prototype.isPrototypeOf(Horse.prototype)).toBe(true);
    });

    test('Horse can move to the target location', () => {
      const horse = new Horse('D4', 'w');

      expect(horse.validMove('C2')).toBe(true);
    });
  });

  describe('Bishop Tests', () => {
    test('Bishop has Piece as prototype', () => {
      expect(Piece.prototype.isPrototypeOf(Bishop.prototype)).toBe(true);
    });

    test('Bishop can move to the target location', () => {
      const bishop = new Bishop('D4', 'w');

      expect(bishop.validMove('A1')).toBe(true);
    });
  });

  describe('Queen Tests', () => {
    test('Queen has Piece as prototype', () => {
      expect(Piece.prototype.isPrototypeOf(Queen.prototype)).toBe(true);
    });

    test('Queen can move to the target location', () => {
      const queen = new Queen('E8', 'w');

      expect(queen.validMove('E1')).toBe(true);
    });
  });

  describe('King Tests', () => {
    test('King has Piece as prototype', () => {
      expect(Piece.prototype.isPrototypeOf(King.prototype)).toBe(true);
    });

    test('King can move to the target location', () => {
      const king = new King('E7', 'w');

      expect(king.validMove('F7')).toBe(true);
    });
  });
});
