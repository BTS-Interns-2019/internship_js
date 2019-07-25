//const input = "1000.00";
function gastosParser(dato){
    dato = dato.replace("\n", "");
    dato = dato.replace("  ", " ");
    dato = dato.split(" ") 
    var dividido = (dato.length-1) / 3;  
    var objeto = new Object;
    objeto.initialBalance = dato[0];
    var arr = [];
    var res = dato[0]
    for(let i = 0; i < dato.length-1; i++){
        for(let x = 0; x < dividido; x ++){
            var ob = {
                id: "",
                description: "", 
                balance: "",
            }; 
            if(i == 0){
                i++;
            }
            ob.id = dato[i], i++;
            ob.description = dato[i], i++;
            ob.cost = dato[i];
            res -= dato[i];
            ob.balance = res, i++;
            arr.push(ob)
        }
    }
    objeto.expenses = arr;
    objeto.totalExpense = dato[0] - res;
    objeto.averageExpense = (dato[0] - res) / dividido;
    objeto.finalBalance = res;
    return objeto;
}
console.log(gastosParser("1000 127 video 7.45 128 gasoline 16.10 129 agua 15"));

module.exports = gastosParser;
