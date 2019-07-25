function expensesParser (inp){
      aux = inp.split("\n");
      lol=aux.join();
      lal=lol.split(" ");
      var obj = {};
      Object.defineProperty(obj, 'initialBalance', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(obj, 'totalexpenses', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(obj, 'averageExpense', {value:0, writable: true, enumerable: true} );
      Object.defineProperty(obj,'finalBalance', {value:0, writable: true, enumerable: true});  
      
      var expenses = {};
      Object.defineProperty(expenses, 'id', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(expenses, 'description', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(expenses, 'cost', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(expenses, 'balance', {value: 0, writable: true, enumerable: true});

      var expenses1 = {};
      Object.defineProperty(expenses1, 'id', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(expenses1, 'description', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(expenses1, 'cost', {value: 0, writable: true, enumerable: true});
      Object.defineProperty(expenses1, 'balance', {value: 0, writable: true, enumerable: true});

      obj.initialBalance = parseInt(lal.slice(0,1));
      obj.totalexpenses =  parseFloat(lal.slice(3,4)) + parseFloat(lal.slice(6,7));
      obj.averageExpense = (parseFloat(lal.slice(3,4)) + parseFloat(lal.slice(6,7)))/2;
      obj.finalBalance = parseFloat(lal.slice(0,1)) - parseFloat(lal.slice (3,4)) - parseFloat(lal.slice(6,7));
      expenses.id = parseInt(lal.slice(1,2));
      expenses.description = lal.slice(2,3).toString();
      expenses.cost = parseFloat(lal.slice(3,4)); 
      expenses.balance = parseFloat(lal.slice(0,1)) - parseFloat(lal.slice(3,4));

      expenses1.id = parseInt(lal.slice(4,5));
      expenses1.description = lal.slice(5,6).toString();
      expenses1.cost = parseFloat(lal.slice(6,7));
      expenses1.balance = parseFloat(lal.slice(0,1)) - parseFloat(lal.slice(6,7));

      var Output = [];
      Output.push (obj);
      Output.push (expenses);
      Output.push (expenses1);
      
      console.log(JSON.stringify (Output, null, 2));
    
      for (n in Output){
      console.log(Output[n]);
      }        
        return Output;
    }
    
module.exports = expensesParser;

const input = "1000.00\n 127 video 7.45\n 128 Gasoline 16.10"
expensesParser (input);

