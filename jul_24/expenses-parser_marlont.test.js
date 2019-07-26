test('Probando entrada normal', function(){
    expect(expensesParser('1000.00\n127 Video 7.45\n128 Gasoline 16.10')).toStrictEqual({ initialBalance: '1000.00',
                                                                                 expenses:
                                                                                   [ { id: '127', description: 'Video', cost: 7.45, balance: 992.55 },
                                                                                     { id: '128', description: 'Gasoline', cost: 16.1, balance: 976.4499999999999 } ],
                                                                                 totalExpense: 23.55,
                                                                                 averageExpense: 11.775,
                                                                                 finalBalance: 976.4499999999999 });
})

test('Probando entrada con lineas en blanco', function(){
    expect(expensesParser('1000.00\n\n127 Video 7.45\n\n\n128 Gasoline 16.10')).toStrictEqual({ initialBalance: '1000.00',
                                                                                                expenses:
                                                                                                  [ { id: '127', description: 'Video', cost: 7.45, balance: 992.55 },
                                                                                                    { id: '128', description: 'Gasoline', cost: 16.1, balance: 976.4499999999999 } ],
                                                                                                totalExpense: 23.55,
                                                                                                averageExpense: 11.775,
                                                                                                finalBalance: 976.4499999999999 });
})

test('Probando entrada con datos NaN', function(){
        expect(expensesParser('1000.00\n\n127 Video 7.45\n\n\n128 Gasoline s')).toStrictEqual({ initialBalance: '1000.00',
                                                                                       expenses:
                                                                                         [ { id: '127', description: 'Video', cost: 7.45, balance: 992.55 }],
                                                                                       totalExpense: 7.45,
                                                                                       averageExpense: 7.45,
                                                                                       finalBalance: 992.55 });
})

test('Probando entrada con mas de 3 datos por linea', function(){
    expect(expensesParser('1000.00\n\n127 Video 7.45\n\n\n128 Gasoline 16.10 holamundo')).toStrictEqual({ initialBalance: '1000.00',
                                                                                                  expenses:
                                                                                                    [ { id: '127', description: 'Video', cost: 7.45, balance: 992.55 },
                                                                                                      { id: '128', description: 'Gasoline', cost: 16.1, balance: 976.4499999999999 } ],
                                                                                                  totalExpense: 23.55,
                                                                                                  averageExpense: 11.775,
                                                                                                  finalBalance: 976.4499999999999 });
})





///////////////////////////////////////////////////////////////////////////

const expensesParser = require('./expenses-parser_marlont');

