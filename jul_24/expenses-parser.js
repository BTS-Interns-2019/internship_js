function expensesParser(lista){
    let lineas = lista.trim().split("\n");
    let split = [];
    for(let l of lineas){
        for(let s of l.trim().split(" ")){
            if(s.length>0)
            split.push(s);
        }
    }
 let output = {};
 let balance = split[0];
 output.initialBalance = balance;
 let expenses = [];
 let totalExpense =0;
 let avarageExpense=0;
 for(let i=1;i<split.length;i+=3){
  let expense = {};
  expense.id = split[i];
  expense.description = split[i+1];
  let costo = split[i+2];
  expense.cost = costo;
  balance-=costo;
  totalExpense+=parseFloat(costo);
  expense.balance = balance;
  expenses[expenses.length] = expense; 
 }
 output.expenses = expenses;
 output.finalBalance = balance;
 output.totalExpense = totalExpense;
 let nexpenses = expenses.length;
 if(nexpenses>0){
     avarageExpense = totalExpense/nexpenses;
 }
 output.avarageExpense = avarageExpense;
 return output;
}

console.log(expensesParser("1000.00\n \n127 Video 7.45\n 128 Gasoline 16.10"));
module.exports = expensesParser;