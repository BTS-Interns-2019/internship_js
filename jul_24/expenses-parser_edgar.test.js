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





test('ejemplo valores iniciales', function(){

  expect(expenses(input)).toEqual(result);

})



let input2='1000.00\n127 Video 7.45\n\n\n\n128 Gasoline 16.10'

test('test 2 con saltos de linea doble mismos valores iniciales', function(){

  expect(expenses(input2)).toEqual(result);

})




let result3={

  "averageExpense": 76.667,

  "expenses": [

    {

      "balance": 390,

      "cost": 10,

      "description": "Video"

    },

    {

      "balance": 330,

      "cost": 60,

      "description": "agua",

      "id": 12,

    },

    {

      "balance": 230,

      "cost": 100,

      "description": "despensa",

      "id": 20

    },

  ],

  "finalBalance": 230,

  "initialBalance": 400,

  "totalExpense": 270,

}


let input3='000.00\n12 video 99.99\n20 agua 60.00\n3 despensa 100.00\n';



test('test con 3 gastos mostrados y un salto de linea', function(){

  expect(expenses(input3)).toEqual(result3);

})




let result4={

  "averageExpense": 60,

  "expenses": [

     {

       "balance": 40, 

       "cost": 60, 
       
       "description": "refresco", 
       
       "id": 25

      }

    ],

  "finalBalance": 40, 

  "initialBalance": 100, 

  "totalExpense": 60

}



let input4='100\n25 refresco 60\n';



test('test numero 4 con una sola entrada al objeto', function(){

  expect(expenses(input4)).toEqual(result4);

})

const expenses=require('./expenses-parser_edgar.js');