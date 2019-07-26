// const input1 = `1000.00     
// 127 Video 7.45
// 128 Gasoline 16.10`

// const input2 = `500.00
// 12 Papitas 11.50
// 13 Jugo 16.50`

// const input3 = `728.12
// 989 Saldo 109.00
// 990 Papel 32.50
// 991 Tenedor 12.00`

// const input4 = `500.00
// 720 IronMan 11.50
// 721 TheCrow 16.50
// 722 Spiderman 14.50`

// const input5 = `729.50
// 51 Camion 9.50
// 52 Chicle 3.00
// 53 Agua 12.50
// 54 Redondeo 0.50
// 55 Camion2 9.50`

function expensesParser(input){
  let Elements = input.split("\n")  // length = 2
  const iBalance = +Elements.shift()
  let totalExpense = 0;
  let averageExpense = 0;
  
  const obj = {}
  obj.initialBalance = iBalance

  const expense = []

  for(let i = 0; i < Elements.length; i++){
    expense.push({})
    let splitElms = Elements[i].split(" ")
    expense[i].id = +splitElms[0];
    expense[i].description = splitElms[1];
    expense[i].cost = +splitElms[2];
    expense[i].balance = +iBalance - splitElms[2]
  }
  obj.expenses = expense
  for(let i = 0; i < expense.length; i++){
    totalExpense += obj.expenses[i].cost
    averageExpense += totalExpense / i
  }
  obj.totalExpense = totalExpense
  obj.averageExpense = totalExpense / expense.length
  obj.finalBalance = obj.expenses[expense.length-1].balance
  return obj
}
  console.log(expensesParser(input1));

module.exports = expensesParser;
