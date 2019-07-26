const expensesParser = require("./expenses-parser_cristianp.js");

test("Primera prueba", function(){
    expect(expensesParser(`3000.00
    1 agua 10
    2 coca 30
    3 galletas 13
    4 pan 15
    5 sopas 50`)).toEqual({
        initialBalance: 3000.00,
        expenses: [
          {
            id: 1,
            description: 'agua',
            cost: 10,
            balance: 2990.00
          },
          {
            id: 2,
            description: 'coca',
            cost: 30,
            balance: 2960.00
          },
          {
            id: 3,
            description: 'galletas',
            cost: 13,
            balance: 2947.00
          },
          {
            id: 4,
            description: 'pan',
            cost: 15,
            balance: 2932.00
          },
          {
            id: 5,
            description: 'sopas',
            cost: 50,
            balance: 2882.00
          }
        ],
        totalExpense: 118,
        averageExpense: 23.6,
        finalBalance: 2882.00
      })
});

test("Segunda prueba", function(){
    expect(expensesParser(`3000.00
    1 agua 100    
    2 coca 300      
    3 galletas 130   
    4 pan 150
    5 sopas 500`)).toEqual({
        initialBalance: 3000.00,
        expenses: [
          {
            id: 1,
            description: 'agua',
            cost: 100,
            balance: 2900.00
          },
          {
            id: 2,
            description: 'coca',
            cost: 300,
            balance: 2600.00
          },
          {
            id: 3,
            description: 'galletas',
            cost: 130,
            balance: 2470.00
          },
          {
            id: 4,
            description: 'pan',
            cost: 150,
            balance: 2320.00
          },
          {
            id: 5,
            description: 'sopas',
            cost: 500,
            balance: 1820.00
          }
        ],
        totalExpense: 1180,
        averageExpense: 236,
        finalBalance: 1820.00
      })
});

test("Tercera prueba", function(){
    expect(expensesParser(`100.00
    123 xbox 100
    124 play 5`)).toEqual({
        initialBalance: 100.00,
        expenses: [
          {
            id: 123,
            description: 'xbox',
            cost: 100,
            balance: 0.00
          },
          {
            id: 124,
            description: 'play',
            cost: 5,
            balance: -5.00
          }
        ],
        totalExpense: 105,
        averageExpense: 52.5,
        finalBalance: -5
      })
});

test("Cuarta prueba", function(){
    expect(expensesParser(`6554.00
    129 ropero 1000
    130 mesa 500`)).toEqual({
        initialBalance: 6554.00,
        expenses: [
          {
            id: 129,
            description: 'ropero',
            cost: 1000,
            balance: 5554.00
          },
          {
            id: 130,
            description: 'mesa',
            cost: 500,
            balance: 5054.00
          }
        ],
        totalExpense: 1500,
        averageExpense: 750,
        finalBalance: 5054.00
      })
});