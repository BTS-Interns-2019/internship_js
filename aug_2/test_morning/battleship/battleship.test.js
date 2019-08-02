//Emmanuel Rubio Navarro
const isBoardReady = require('./battleship')

describe('Battleship board tester', () => {

  test('Not all the boats are in place', () => {
    expect(
      isBoardReady(
        [
          ['F1', 'F5']
        ]
      )
    ).toBe(false)
  });

  test('All the boats are correctly placed', () => {
    expect(
      isBoardReady(
        [
          ['B8', 'C8'],
          ['C4', '4F'],
          ['2B', 'D2'],
          ['H5', 'H1'],
          ['J8', 'J6'],
        ]
      )
    ).toBe(true)
  });

  test('Final status of the board', () => {
    expect(ticTacToe(samplePlay).board).toEqual(expectedResult.board)
  })
})