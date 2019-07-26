const expensesParser = require('./expenses-parser_hector.js');

const test1 = `
  10000
  125 Car 860


          320 Movies 150
`;
const test2 = `
          2500
  
  
8 Pet 120


          420 Date 750
`;
const test3 = `
  500
  17 Restaurant 180
  22 Movie 120
35 School 370
`;
const test4 = `
  10
  1 Phone 9
`;

const expect1 = {
  initialBalance: 10000,
  expenses: [
    {
      id: 125,
      description: 'Car',
      cost: 860,
      balance: 9140
    },
    {
      id: 320,
      description: 'Movies',
      cost: 150,
      balance: 8990
    }
  ],
  totalExpense: 1010,
  averageExpense: 505,
  finalBalance: 8990
};

const expect2 = {
  initialBalance: 2500,
  expenses: [
    {
      id: 8,
      description: 'Pet',
      cost: 120,
      balance: 2380
    },
    {
      id: 420,
      description: 'Date',
      cost: 750,
      balance: 1630
    }
  ],
  totalExpense: 870,
  averageExpense: 435,
  finalBalance: 1630
};

const expect3 = {
  initialBalance: 500,
  expenses: [
    {
      id: 17,
      description: 'Restaurant',
      cost: 180,
      balance: 320
    },
    {
      id: 22,
      description: 'Movie',
      cost: 120,
      balance: 200
    },
    {
      id: 35,
      description: 'School',
      cost: 370,
      balance: -170
    }
  ],
  totalExpense: 670,
  averageExpense: 223.33333333333334,
  finalBalance: -170
};

const expect4 = {
  initialBalance: 10,
  expenses: [
    {
      id: 1,
      description: 'Phone',
      cost: 9,
      balance: 1
    }
  ],
  totalExpense: 9,
  averageExpense: 9,
  finalBalance: 1
};

test('Expenses with 10000 initial balance and Car and Movie costs', () => {
  expect(expensesParser(test1)).toEqual(expect1);
});

test('Expenses with 2500 initial balance and Pet and Date costs', () => {
  expect(expensesParser(test2)).toEqual(expect2);
});

test('Expenses with 500 initial balance and Restaurant, Movie, School costs', () => {
  expect(expensesParser(test3)).toEqual(expect3);
});

test('Expenses with 10 initial balance and Phone costs', () => {
  expect(expensesParser(test4)).toEqual(expect4);
});