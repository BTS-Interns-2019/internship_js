const input = "1000.00\n\n127 Video 7.45\n128 Gasoline 16.10";

function expensesParser(string) {
    let noLine;
    let noLineClean;
    let expensesArr=[];

    let expenses_container = {
        initialBalance: 0,
        expenses: [],
        totalExpense: 0,
        averageExpense: 0,
        finalBalance: 0
    };
    noLine = string.replace(/\n/g, " ").split(" ");
    noLineClean= noLine.filter(Boolean);
    for (let i = 1; i <noLineClean.length ; i++) {
        expensesArr[i-1]=noLineClean[i];
        arr= new Object(expensesArr);
    }

    expenses_container.initialBalance= +noLineClean[0];
    for (let i = 0; i <expensesArr.length ; i+=3) {
        let expense={
            id:0,
            description:"",
            cost:0,
            balance:0,
        }
        console.log("inside",expensesArr[i]);
        expense.id=+expensesArr[i];
        expense.description=expensesArr[i+1];
        expense.cost=+expensesArr[i+2];
        expenses_container.expenses.push(expense);
    }
    let  balance=expenses_container.initialBalance.toPrecision(2);
    let totalExpenses=0;
    let averageExpenses= 0;
    for (let i = 0; i <expenses_container.expenses.length ; i++) {

        expenses_container.expenses[i].balance=((balance) -= (expenses_container.expenses[i].cost))
        totalExpenses-= expenses_container.expenses[i].cost;
        averageExpenses+= expenses_container.expenses[i].cost


    }
    expenses_container.totalExpense= Math.abs(totalExpenses);
    expenses_container.averageExpense= averageExpenses/expenses_container.expenses.length;
    expenses_container.finalBalance= balance;
    // console.log(expenses_container);
    return expenses_container
}

console.log(expensesParser(input));

module.exports = expensesParser;


