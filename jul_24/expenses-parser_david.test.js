const expensesParser = require('./expenses-parser_david.js')

const result = {
    initialBalance: 1000.00,
    expenses: [
      {
        id: 127,
        description: 'Video',
        cost: 7.45,
        balance: 992.55
      },
      {
        id: 128,
        description: 'Gasoline',
        cost: 16.10,
        balance: 976.45
      }
    ],
    totalExpense: 23.55,
    averageExpense: 11.775,
    finalBalance: 976.45
  };
  
  test('example', () => {
    input = "1000.00 127 Video 7.45 128 Gasoline 16.10";
    expect(expensesParser(input)).toEqual(result);
  })
  
const result2 = {};

  test('blank lines', () => {
    const input = "";
    expect(expensesParser(input)).toEqual(result2);
  })
  