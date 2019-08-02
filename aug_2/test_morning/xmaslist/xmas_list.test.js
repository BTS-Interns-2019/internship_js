// Luis Carlos Gallegos Rodriguez
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

const toys2 = [
  {
    description: 'Car',
    quantity: 2,
  }
];

const toys3 = [
  {
    description: 'Car',
    quantity: 1,
  },
  {
    description: 'Barbie',
    quantity: 3,
  },
];

const toys4 = [
  {
    description: 'Car',
    quantity: 1,
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

  const expectedResult2 = [
    {
      name: 'Cristian Fernandez',
      age: 12,
      score: 100,
      gift: 'Barbie',
    },
    {
      name: 'Sergio Piña',
      age: 4,
      score: 50,
      gift: 'Barbie',
    },
    {
      name: 'Carlos Munguia',
      age: 6,
      score: 92,
      gift: 'Car',
    }
  ];

  const expectedResult3 = [
    {
      name: 'Cristian Fernandez',
      age: 12,
      score: 100,
      gift: 'coal',
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
    expect(xmasList(kids, toys2)).toEqual(expectedResult);
  })

  test('Sobran juguetes Assign 3 toys and 0 coal', () => {
    expect(xmasList(kids, toys3)).toEqual(expectedResult2);
  })

  test('Faltan juguetes Assign 1 toys and 2 coal', () => {
    expect(xmasList(kids, toys4)).toEqual(expectedResult3);
  })
})