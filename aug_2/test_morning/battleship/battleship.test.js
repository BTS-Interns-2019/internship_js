// Hector Soto Garcia
const isBoardReady = require('./battleship')

describe('Battleship board tester', () => {

  test('There isn\'t a boat placed diagonally', () => {
    expect(
      isBoardReady([
        ['A2', 'A4'],
        ['B5', 'C6'],
        ['F1', 'F5']
      ])
    ).toBe(false);
  });

  test('There isn\'t a boat outside of the board', () => {
    expect(
      isBoardReady([
        ['A2', 'A4'],
        ['L8', 'L9'],
        ['F1', 'F5']
      ])
    ).toBe(false);
  });

  test('There isn\'t a boat placed next to another', () => {
    expect(
      isBoardReady([
        ['A2', 'A4'],
        ['A5', 'L6'],
        ['F1', 'F5']
      ])
    ).toBe(false);
  });

  test('There isn\'t a boat on top of another', () => {
    expect(
      isBoardReady([
        ['A2', 'A4'],
        ['A2', 'B2'],
        ['F1', 'F5']
      ])
    ).toBe(false);
  });

  test('There isn\'t a boat with wrong coordinates', () => {
    expect(
      isBoardReady([
        ['A2', 'A4'],
        ['A2', 'BB'],
        ['F1', 'F5']
      ])
    ).toBe(false);
  });

  test('There isn\'t an illegitimate boat in the array passed', () => {
    expect(
      isBoardReady([
        ['A2', 'A4'],
        ['A2', 'B7'],
        ['F1', 'F5']
      ])
    ).toBe(false);
  });

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
})