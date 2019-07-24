function expensesParser(input){    
    input=input.split("\n");
    input=input.filter(Boolean);
    let total=parseFloat(input[0]);    
    const totalInicial=total;
    const gastos=[];
    input=input.slice(1);
    input.forEach(element => {
        const tres=element.split(" ");
        tres[0]=parseInt(tres[0]);
        tres[2]=parseFloat(tres[2])
        total=total-tres[2];
        gastos.push({
            "id" : tres[0],
            "description" : tres[1],
            "cost" : tres[2],
            "balance" : total,
        });
    });
    const totalGastos=totalInicial-total;
    const promedio=totalGastos/input.length;
    
    const salida={"initialBalance ": 1000.00,
        "expenses" : gastos,
        "totalExpense" : totalGastos,
        "averageExpense" : promedio,
        "finalBalance" : total
    }

    return salida;
}
//const input = '1000.00\n127 Video 7.45\n\n\n128 Gasoline 16.10';


module.exports = expensesParser;