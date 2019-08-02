//Marlon Esteban Torres Huerta

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

  const samplePlay = [
    '1,1',
    '1,2',
    '2,1',
    '2,2',
    '3,1',
    '3,2'
  ]

  const expectedResult2 = {
    winner: 'Player 2',
    lastPlay: 6,
    board: [
      'XOX',
      'OXO',
      'XOX'
    ]
  }

  const samplePlay2 = [
    '1,2',
    '1,1',
    '2,2',
    '2,1',
    '3,2',
    '3,1'
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

  test('Winner is player 1', () => {
    expect(ticTacToe(samplePlay2).winner).toBe('Player 1')
  });

  test('Last play was 5', () => {
    expect(ticTacToe(samplePlay2).lastPlay).toBe(5)
  });
})