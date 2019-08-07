const expensesParser = require('./expenses-parser_erick.js')
const expense = expensesParser()


test("Get data from shoping-day", function(){
const input2 = `500.00
12 Papitas 11.50
13 Jugo 16.50`
    expect(expense(input2)).toBe(
        { initialBalance: 500,
            expenses:
             [ { id: 12, description: 'Papitas', cost: 11.5, balance: 488.5 },
               { id: 13, description: 'Jugo', cost: 16.5, balance: 483.5 } ],
            totalExpense: 28,
            averageExpense: 14,
            finalBalance: 483.5 }
    )
})

test("Get data from shoping-day",function(){
const input3 = `728.12
989 Saldo 109.00
990 Papel 32.50
991 Tenedor 12.00`
    expect(expense(input3)).toBe(
        { initialBalance: 728.12,
            expenses:
             [ { id: 989, description: 'Saldo', cost: 109, balance: 619.12 },
               { id: 990, description: 'Papel', cost: 32.5, balance: 695.62 },
               { id: 991, description: 'Tenedor', cost: 12, balance: 716.12 } ],
            totalExpense: 153.5,
            averageExpense: 51.166666666666664,
            finalBalance: 716.12 }
    )
})

test("Get data from shoping-day", function(){
const input4 = `500.00
720 IronMan 11.50
721 TheCrow 16.50
722 Spiderman 14.50`
    expect(expense(input4)).toBe(
        { initialBalance: 500,                                                
            expenses:                                                           
             [ { id: 720, description: 'IronMan', cost: 11.5, balance: 488.5 }, 
               { id: 721, description: 'TheCrow', cost: 16.5, balance: 483.5 }, 
               { id: 722, description: 'Spiderman', cost: 14.5, balance: 485.5 }
           ],                                                                   
            totalExpense: 42.5,                                                 
            averageExpense: 14.166666666666666,                                 
            finalBalance: 485.5 }                                               
    ) 
})

test("Get data from shoping-day", function(){
const input5 = `729.50
51 Camion 9.50
52 Chicle 3.00
53 Agua 12.50
54 Redondeo 0.25
55 Camion2 9.50`
    expect(expense(input5)).toBe(
        { initialBalance: 729.5,
            expenses:
             [ { id: 51, description: 'Camion', cost: 9.5, balance: 720 },
               { id: 52, description: 'Chicle', cost: 3, balance: 726.5 },
               { id: 53, description: 'Agua', cost: 12.5, balance: 717 },
               { id: 54, description: 'Redondeo', cost: 0.5, balance: 729 },
               { id: 55, description: 'Camion2', cost: 9.5, balance: 720 } ],
            totalExpense: 35,
            averageExpense: 7,
            finalBalance: 720 }
    )
})

test("Get data frin shoping-day", function(){
const input1 = `1000.00     
127 Video 7.45
128 Gasoline 16.10`
    expect(expense(input1)).toBe(
        { initialBalance: 1000,
            expenses:
             [ { id: 127, description: 'Video', cost: 7.45, balance: 992.55 },
               { id: 128, description: 'Gasoline', cost: 16.1, balance: 983.9 } ],
            totalExpense: 23.55,
            averageExpense: 11.775,
            finalBalance: 983.9 }
    )
})