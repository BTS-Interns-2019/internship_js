
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
  const samplePlay2= []

  test('Winner is player 1', () => {
    expect(ticTacToe(samplePlay).winner).toBe('Player 1')
  });

  test('Last play was 5', () => {
    expect(ticTacToe(samplePlay).lastPlay).toBe(5)
  });

  test('Final status of the board', () => {
    expect(ticTacToe(samplePlay).board).toEqual(expectedResult.board)
  })
})


test("Winner is player 2", ()=>{
  expect(ticTacToe(samplePlay2).winner).toEqual('Player2');
});