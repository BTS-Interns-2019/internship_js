const expensesParser = require("./expenses-parser_miguel.js");

const input1=`500.00

35 Internet 23.10

36 Food 27.75`;
const input2=`1000.00
22 Electricity 8.25
10 Gasoline 6.40`;
const input3=`800.00
15 Telephone 12.12
62 Electricity 14.40
31 Water 10.02
40 Gasoline 22.10`;
const input4=`1000.00


16 Telephone 18.64

63 Electricity 35.12
32 Water 22.73

41 Gasoline 33.33

22 Internet 28.16
12 Food 42.42`;
const result1={
    initialBalance: 500.00,
    expenses: [
        {
            id: 35,
            description: 'Internet',
            cost: 23.10,
            balance: 476.90
        },
        {
            id: 36,
            description: 'Food',
            cost: 27.75,
            balance: 449.15
        }
    ],
    totalExpense: 50.85,
    averageExpense: 25.425,
    finalBalance: 449.15
};
const result2={
    initialBalance: 1000.00,
    expenses: [
        {
            id: 22,
            description: 'Electricity',
            cost: 8.25,
            balance: 991.75
        },
        {
            id: 10,
            description: 'Gasoline',
            cost: 6.40,
            balance: 985.35
        }
    ],
    totalExpense: 14.65,
    averageExpense: 7.325,
    finalBalance: 985.35
};
const result3={
    initialBalance: 800.00,
    expenses: [
        {
            id: 15,
            description: 'Telephone',
            cost: 12.12,
            balance: 787.88
        },
        {
            id: 62,
            description: 'Electricity',
            cost: 14.40,
            balance: 773.48
        },
        {
            id: 31,
            description: 'Water',
            cost: 10.02,
            balance: 763.46
        },
        {
            id: 40,
            description: 'Gasoline',
            cost: 22.10,
            balance: 741.36
        }
    ],
    totalExpense: 58.64,
    averageExpense: 29.32,
    finalBalance: 741.36
};
const result4={
    initialBalance: 1000.00,
    expenses: [
        {
            id: 16,
            description: 'Telephone',
            cost: 18.64,
            balance: 981.36
        },
        {
            id: 63,
            description: 'Electricity',
            cost: 35.12,
            balance: 946.24
        },
        {
            id: 32,
            description: 'Water',
            cost: 22.73,
            balance: 923.51
        },
        {
            id: 41,
            description: 'Gasoline',
            cost: 33.33,
            balance: 890.18
        },
        {
            id: 22,
            description: 'Internet',
            cost: 28.16,
            balance: 862.02
        },
        {
            id: 12,
            description: 'Food',
            cost: 42.42,
            balance: 819.60
        }
    ],
    totalExpense: 180.39999999999998,
    averageExpense: 90.19999999999999,
    finalBalance: 819.60
};
//PRUEBAS

test("Prueba 1",function(){
    expect(expensesParser(input1)).toStrictEqual(result1);
})
test("Prueba 2",function(){
    expect(expensesParser(input2)).toStrictEqual(result2);
})
test("Prueba 3",function(){
    expect(expensesParser(input3)).toStrictEqual(result3);
})
test("Prueba 4",function(){
    expect(expensesParser(input4)).toStrictEqual(result4);
})