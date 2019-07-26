const expenses=require('./expenses-parser_emmanuel.js');

//primer test
let result = {
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
  totalExpense: 23.550000000000068,
  averageExpense: 11.775000000000034,
  finalBalance: 976.4499999999999
};
let input = '1000.00\n127 Video 7.45\n128 Gasoline 16.10';


test('ejemplo del md', function(){
  expect(expenses(input)).toEqual(result);
})

//segundo test con el resultado del primero
let input2='1000.00\n127 Video 7.45\n\n\n\n128 Gasoline 16.10'
test('el mismo del md pero con lineas en blanco', function(){
  expect(expenses(input2)).toEqual(result);
})

//tercer test
let result3={
  "averageExpense": 200.99666666666667,
  "expenses": [
    {
      "balance": 992.55,
      "cost": 7.45,
      "description": "Video",
      "id": 127,
      "balance": 800.01,
      "cost": 99.99,
      "description": "video",
      "id": 1
    },
    {
      "balance": 976.4499999999999,
      "cost": 16.1,
      "description": "Gasoline",
      "id": 128,
      "balance": 797.01,
      "cost": 3,
      "description": "tachas",
      "id": 2
    },
    {
      "balance": 297.01,
      "cost": 500,
      "description": "perico",
      "id": 3
    },
  ],
  "finalBalance": 297.01,
  "initialBalance": 1000,
  "totalExpense": 602.99
}

let input3='900.00\n1 video 99.99\n2 tachas 3.00\n3 perico 500.00\n';

test('Ahora con tres gastos y salto de linea al final', function(){
  expect(expenses(input3)).toEqual(result3);
})

//cuarto con un solo gasto
let result4={
  "averageExpense": 99999.99,
  "expenses": [
     {
       "balance": 0.00999999999476131, 
       "cost": 99999.99, "description": 
       "tacos_de_pastor", "id": 234343
      }
    ],
  "finalBalance": 0.00999999999476131, 
  "initialBalance": 1000, 
  "totalExpense": 99999.99
}

let input4='100000.00\n234343 tacos_de_pastor 99999.99\n';

test('con una sola entrada', function(){
  expect(expenses(input4)).toEqual(result4);
})