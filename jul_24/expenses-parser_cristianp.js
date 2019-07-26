//const input = "1000.00";
function expensesParser(dato){
    dato = dato.replace(/\n/g, " ");
    dato = dato.replace("  ", " ");
    dato = dato.split(" ");
    arreglo = dato.filter(Boolean);
    //console.log(arreglo);
    var dividido = (arreglo.length-1) / 3;  
    var objeto = new Object;
    objeto.initialBalance = +arreglo[0];
    var arr = [];
    var res = +arreglo[0];
    for(let i = 0; i < arreglo.length; i++){
        for(let x = 0; x < dividido; x ++){
            var ob = {
                id: null,
                description: "", 
                balance: null,
            }; 
            if(i == 0){
                i++;
            }
            ob.id = +arreglo[i];
            i++;
            ob.description = arreglo[i];
            i++;
            ob.cost = +arreglo[i];
            res -= +arreglo[i];
            ob.balance = res;
            i++;
            arr.push(ob)
        }
    }
    objeto.expenses = arr;
    objeto.totalExpense = +(+arreglo[0] - res).toFixed(2);
    objeto.averageExpense = +((+arreglo[0] - res) / dividido).toFixed(3);
    objeto.finalBalance = res;
    return objeto;
}
/*console.log(expensesParser(`1000.00
127 Video 7.45
128 Gasoline 16.10`));//*/


/*console.log(expensesParser(`1000.00

127 Video 7.45

128 Gasoline 16.10`));//*/

module.exports = expensesParser;
