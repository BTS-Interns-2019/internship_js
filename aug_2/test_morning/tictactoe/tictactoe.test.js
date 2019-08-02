
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

  test('Winner is player 1', () => {
    xmasList(kids, toys).forEach((kid, i) => {
      expect(kid.name).toEqual(expectedResult[i].name);
    });
  });

  test('Assign 2 toys and 1 coal', () => {
    expect(xmasList(kids, toys)).toEqual(expectedResult);
  })
})