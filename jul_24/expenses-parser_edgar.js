function expensesParser (inp){
      lol = inp.split("\n");
      lal = lol.filter(Boolean);
      
      const inicialprep= parseFloat(lal[0].trim());
      totalprep = inicialprep;
      
      const expen = [];

      input = lal.slice(1);
      

      input.forEach(element => {
          const expense = element.split(" ");
          totalprep = totalprep - parseFloat(expense [2]);

      expen.push({
          id: expense[0].trim(),
          description: expense[1].trim(),
          cost: parseFloat(expense[2].trim()),
          balance: parseFloat(totalprep)
      });

    });

      const totalexp = parseFloat(inicialprep, 2) - parseFloat(totalprep, 2);
      const average = parseFloat(totalexp / input.length);

      const Output = { 
            inicialBalance: inicialprep,
            expenses: expen,
            totalExpense: totalexp,
            averageExpense: average,
            finalBalance: totalprep
         };

    return JSON.stringify(Output, null, 2);     
    return Output;   
}

 
module.exports = expensesParser;

console.log (expensesParser(`1000.00
127 video 7.45
128 Gasoline 16.10`));


