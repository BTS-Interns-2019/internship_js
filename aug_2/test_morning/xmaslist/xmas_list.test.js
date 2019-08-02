//Ricardo Martin del campo Loza
const xmasList = require('./xmas_list')

const kids =`Cristian Fernandez, 12, 100
Sergio Piña , 4 , 50
Carlos Munguia, 6, 92
`;

const toys = [
  {
    description: 'Car',
    quantity: 2,
  }
];

describe('Xmas List', () => {
  const expectedResult = [
    {
      name: 'Cristian Fernandez',
      age: 12,
      score: 100,
      gift: 'Car',
    },
    {
      name: 'Sergio Piña',
      age: 4,
      score: 50,
      gift: 'coal',
    },
    {
      name: 'Carlos Munguia',
      age: 6,
      score: 92,
      gift: 'Car',
    }
  ];

  test('Result is in the same order', () => {
    xmasList(kids, toys).forEach((kid, i) => {
      expect(kid.name).toEqual(expectedResult[i].name);
    });
  });

  test('Assign 2 toys and 1 coal', () => {
    expect(xmasList(kids, toys)).toEqual(expectedResult);
  })
})