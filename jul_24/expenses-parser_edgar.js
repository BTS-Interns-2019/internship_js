function expensesParser (inp){
      lol = inp.split("\n");
      lal = lol.filter(Boolean);
      
      const inicialprep= parseFloat(lal[0]);
      totalprep = inicialprep;
      
      const expen = [];

      input = lal.slice(1);
      

      input.forEach(element => {
          const expense = element.split(" ");
          totalprep = totalprep - parseFloat(expense [2]);

      expen.push({
          id: expense[0],
          description: expense[1],
          cost: parseFloat(expense[2]),
          balance: parseFloat(totalprep)
      });

    });

      const totalexp = inicialprep - totalprep;
      const average = totalexp / input.length;

      const Output = { inicialBalance: inicialprep,
            expenses: expen,
            totalExpense: totalexp,
            averageExpense: average,
            finalBalance: totalprep };

    return JSON.stringify(Output, null, 2);     
    //return Output;   
}


    
module.exports = expensesParser;

console.log (expensesParser(`1000.00
127 video 7.45
128 Gasoline 16.10`));


