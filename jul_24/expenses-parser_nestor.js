function expensesParser(data){
    data = data.trim()//
    data = data.replace(/\n/g," ");
    console.log(data);
    data = data.replace(/   /g,"  ");
    console.log(data);
    data = data.replace(/  /g," ");   
    data = data.split(" ");
    data = data.filter(Boolean);   
    var div = (data.length-1) / 3;  
    var obj = new Object;
    obj.initialBalance = parseFloat(data[0]);
    var arr = [];
    var resta = data[0]
    for(let i = 0; i < data.length-1; i++){
        for(let x = 0; x < div; x ++){
            var ob = {
                id: 0,
                description: "",
                cost: 0, 
                balance: 0,
            }; 
            if(i == 0){
                i++;
            }
            ob.id = +data[i], i++;
            ob.description = data[i], i++;
            ob.cost = +data[i];
            resta -= +data[i];
            ob.balance = resta, i++;
            arr.push(ob)
        }
    }
    obj.expenses = arr;
    obj.totalExpense = +(data[0] - resta).toFixed(2);
    obj.averageExpense = +((data[0] - resta) / div).toFixed(3);
    obj.finalBalance = resta;
    return obj;
}
// console.log(expensesParser(`1000.00
// 127 Video 7.45
// 128 Gasoline 16.10`));
console.log(expensesParser(`1000.00

127 Video 7.45

128 Gasoline 16.10
`));
console.log(expensesParser(`1000.00
127 Video 7.45
128 Gasoline 16.10`));


module.exports = expensesParser;