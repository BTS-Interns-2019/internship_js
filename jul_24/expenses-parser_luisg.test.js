const expensesParser = require('./expenses-parser.js');

test('Prueba 1', function () {
    expect(expensesParser("1000.00\n \n127 Video 7.45\n 128 Gasoline 16.10")).toStrictEqual({
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
      });
})

test('Prueba 2', function () {
    expect(expensesParser("2000.00\n \n127 Video 7.45\n 128 Gasoline 16.10")).toStrictEqual({
        initialBalance: 2000.00,
        expenses: [
          {
            id: 127,
            description: 'Video',
            cost: 7.45,
            balance: 1992.55
          },
          {
            id: 128,
            description: 'Gasoline',
            cost: 16.10,
            balance: 1976.45
          }
        ],
        totalExpense: 23.55,
        averageExpense: 11.775,
        finalBalance: 1976.45
      });
})

test('Prueba 3', function () {
    expect(expensesParser("1000.00\n \n127 Video 17.45\n 128 Gasoline 16.10")).toStrictEqual({
        initialBalance: 1000.00,
        expenses: [
          {
            id: 127,
            description: 'Video',
            cost: 17.45,
            balance: 982.55
          },
          {
            id: 128,
            description: 'Gasoline',
            cost: 16.10,
            balance: 966.45
          }
        ],
        totalExpense: 33.55,
        averageExpense: 16.775,
        finalBalance: 966.45
      });
})

test('Prueba 4', function () {
    expect(expensesParser("0.00\n \n127 Video 7.45\n 128 Gasoline 16.10")).toStrictEqual({
        initialBalance: 0.00,
        expenses: [
          {
            id: 127,
            description: 'Video',
            cost: 7.45,
            balance: -7.45
          },
          {
            id: 128,
            description: 'Gasoline',
            cost: 16.10,
            balance: -23.55
          }
        ],
        totalExpense: 23.55,
        averageExpense: 11.775,
        finalBalance: -23.55
      });
})