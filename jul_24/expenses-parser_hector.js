function expensesParser(expenses) {
  // converts to array using newline characters
  // gets rid of empty strings
  // trims the whitespace of each string
  expenses = expenses.split('\n')
    .map(elem => elem.trim())
    .filter(elem => elem);

  let resultObj = {};
  let expensesArray = [];
  let totalExpense = 0;

  for (let line of expenses) {
    if (expenses.indexOf(line) === 0) {
      resultObj.initialBalance = Number.parseFloat(line);
    } else {
      const individualExpenseData = line.split(' ');
      totalExpense += Number.parseFloat(individualExpenseData[2]);

      let expenseObj = {
        id: Number.parseInt(individualExpenseData[0]),
        description: individualExpenseData[1],
        cost: Number.parseFloat(individualExpenseData[2]),
        balance: resultObj.initialBalance - totalExpense,
      };

      expensesArray.push(expenseObj);
    }
  }

  resultObj.expenses = expensesArray;
  resultObj.totalExpense = totalExpense;
  resultObj.averageExpense = totalExpense / expensesArray.length;
  resultObj.finalBalance = resultObj.initialBalance - totalExpense;

  return resultObj;
}

module.exports = expensesParser;