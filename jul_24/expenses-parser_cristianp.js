//const input = "1000.00";
function expensesParser(obj){
    data = data.replace("\n", "");
    data = data.replace("  ", " ");
    data = data.split(" ") 
    var div = (data.length-1) / 3;  
    var obj = new Object;
    obj.initialBalance = data[0];
    var arr = [];
    var resta = data[0]
    for(let i = 0; i < data.length-1; i++){
        for(let x = 0; x < div; x ++){
            var ob = {
                id: "",
                description: "", 
                balance: "",
            }; 
            if(i == 0){
                i++;
            }
            ob.id = data[i], i++;
            ob.description = data[i], i++;
            ob.cost = data[i];
            resta -= data[i];
            ob.balance = resta, i++;
            arr.push(ob)
        }
    }
    obj.expenses = arr;
    obj.totalExpense = data[0] - resta;
    obj.averageExpense = (data[0] - resta) / div;
    obj.finalBalance = resta;
    return obj;
}
console.log(gastosParser("1000 127 video 7.45 128 gasoline 16.10 129 agua 15"));

module.exports = gastosParser;
