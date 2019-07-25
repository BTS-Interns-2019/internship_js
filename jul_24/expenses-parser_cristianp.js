//const input = "1000.00";
function expensesParser(obj){
    obj = obj.replace("\n", "");
    obj = obj.replace("  ", " ");
    obj = obj.split(" ") 
    var div = (obj.length-1) / 3;  
    var obj = new Object;
    obj.initialBalance = obj[0];
    var arr = [];
    var resta = obj[0]
    for(let i = 0; i < obj.length-1; i++){
        for(let x = 0; x < div; x ++){
            var ob = {
                id: "",
                description: "", 
                balance: "",
            }; 
            if(i == 0){
                i++;
            }
            ob.id = obj[i], i++;
            ob.description = obj[i], i++;
            ob.cost = obj[i];
            resta -= obj[i];
            ob.balance = resta, i++;
            arr.push(ob)
        }
    }
    obj.expenses = arr;
    obj.totalExpense = obj[0] - resta;
    obj.averageExpense = (obj[0] - resta) / div;
    obj.finalBalance = resta;
    return obj;
}
console.log(gastosParser("1000 127 video 7.45 128 gasoline 16.10 129 agua 15"));

module.exports = gastosParser;
