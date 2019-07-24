function expensesParser(input){
  var result = new Object();
  var lines = input.split("\n");
  var initialBalance = {'initialBalance':lines[0]};
  
  var finalBalance = lines[0];
  var totalExpense = 0;
  var averageExpense = 0;
  
  var expenses = [];
  var exp_uni = [];

  for(var i=1; i<lines.length; i++){
    exp_uni = lines[i].split(" ");
    
    finalBalance = finalBalance - parseFloat(exp_uni[2]);
    totalExpense = totalExpense + parseFloat(exp_uni[2]);
    
    objId = {'id':exp_uni[0]};
    objDes = {'description':exp_uni[1]};
    objCost = {'cost':parseFloat(exp_uni[2])};
    objBalance = {'balance':finalBalance};

    objExp = Object.assign({}, objId, objDes, objCost, objBalance);
    expenses.push(objExp);
  }

  averageExpense = totalExpense / (lines.length-1);
  var expensObj = {'expenses':expenses};
  
  var totalExObj = {'totalExpense':totalExpense};
  var avExObj = {'averageExpense':averageExpense};
  var finBalObj = {'finalBalance':finalBalance};

  result = Object.assign({},initialBalance, expensObj, totalExObj, avExObj, finBalObj);
  return result;
}

module.exports = expensesParser;
