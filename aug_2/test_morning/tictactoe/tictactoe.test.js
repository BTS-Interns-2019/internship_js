
const ticTacToe = require('./tictactoe')

describe('Tic Tac Toe', () => {
  const expectedResult = {
    winner: 'Player 1',
    lastPlay: 5,
    board: [
      'XO ',
      'XO ',
      'X  '
    ]
  };
  const resultado = {
    winner: 'Player 2',
    lastPlay: 6,
    board: [
      'OXX',
      ' OX',
      '  O'
    ]
  };

  const samplePlay = [
    '1,1',
    '1,2',
    '2,1',
    '2,2',
    '3,1',
    '3,2'
  ]
  const juego = [
    '1,3',
    '2,2',
    '1,2',
    '1,1',
    '2,3',
    '3,3'
  ]

  test('Winner is player 1', () => {
    expect(ticTacToe(samplePlay).winner).toBe('Player 1')
  });

  test('Last play was 5', () => {
    expect(ticTacToe(samplePlay).lastPlay).toBe(5)
  });

  test('Final status of the board', () => {
    expect(ticTacToe(samplePlay).board).toEqual(expectedResult.board)
  })
  test('Winner is player 2', () => {
    expect(ticTacToe(juego).winner).toBe('Player 2')
  });
  test('Final status of the 2 game', () => {
    expect(ticTacToe(juego)).toEqual(resultado)
  })
})