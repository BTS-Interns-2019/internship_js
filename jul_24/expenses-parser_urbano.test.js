const expensesParser= require('./expenses-parser_urbano');
const input = `1000.00
127 Video 7.45

128 Gasoline 16.10`;
const output= `{
  initialBalance: 1000.00,
  expenses: [
    {
      id: 127
      description: 'Video',
      cost: 7.45,
      balance: 992.55
    },
    {
      id: 128
      description: 'Gasoline',
      cost: 16.10,
      balance: 976.45
    }
  ],
  totalExpense: 23.55,
  averageExpense: 11.775,
  finalBalance: 976.45
}`;

const input2= `2000
425 Laptop 500.00
426 School 20.00`;
const output2=`{
  initialBalance: 2000.00,
  expenses: [
    {
      id: 425
      description: 'Laptop',
      cost: 500.00,
      balance: 1500
    },
    {
      id: 426
      description: 'School',
      cost: 20.00,
      balance: 1480.00
    }
  ],
  totalExpense: 520.00,
  averageExpense: 260.00,
  finalBalance: 1480.00
}
`
const input3= `4000.00
23 Food 325.50
24 Notebooks 75.50
25 Netflix 149.99
`;
output3=`{
  initialBalance: 4000.00,
  expenses: [
    {
      id: 23
      description: 'Food',
      cost: 325.50,
      balance: 3674.5
    },
    {
      id: 24
      description: 'Notebooks',
      cost: 75.50,
      balance: 3599.00
    }
    {
      id: 25
      description: 'Netflix',
      cost: 149.99,
      balance: 3449.01
    }
  ],
  totalExpense: 550.99,
  averageExpense: 183.8663,
  finalBalance: 3449.01
}
`

input4= `3500.00
33 Clothes 975.75
42 TV 499.99
45 VideoGames 120.00
`;
output2=`{
  initialBalance: 3500.00,
  expenses: [
    {
      id: 33
      description: 'Clothes',
      cost: 975.75,
      balance: 2524.25 
    },
    {
      id: 42
      description: 'TV',
      cost: 499.99,
      balance: 2024.26
    }
    {
      id: 45
      description: 'VideoGames',
      cost: 120.00,
      balance: 1904.26
    }
  ],
  totalExpense: 1595.74,
  averageExpense: 531.91333,
  finalBalance: 1904.26
}`

/////////////////////
//TESTS
test("First test",function () {
    expected(input).toEqual(output);
});
test("Test2", function () {
    expected(input2).toEqual(output2);
});
test("Test3", function () {
    expected(input3).toEqual(output3);
});test("Test2", function () {
    expected(input4).toEqual(output4);
});