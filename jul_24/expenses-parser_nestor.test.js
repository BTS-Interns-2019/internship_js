const expensesParser = require('./expenses-parser_nestor.js');
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
        balance: 976.4499999999999
      }
    ],
    totalExpense: 23.55,
    averageExpense: 11.775,
    finalBalance: 976.4499999999999
  };
test('example', () => {
    const input = `1000.00
  127 Video 7.45
  128 Gasoline 16.10`;
    expect(expensesParser(input)).toEqual(result);
  })

  test('blank lines', () => {
    const input = `1000.00
  
  127 Video 7.45
  
  128 Gasoline 16.10
  `;
    expect(expensesParser(input)).toEqual(result);
  })
  test('blank lines', () => {
    const input = `      1000.00
  
  127   
  Video 7.45
  
  128   Gasoline 16.10
  `;
    expect(expensesParser(input)).toEqual(result);
  })
  test('blank lines', () => {
    const input = `     1000.00
  
  127     Video 7.45
  


  128 Gasoline     16.10
  `;
    expect(expensesParser(input)).toEqual(result);
  })