function expensesParser(input) {
    input = input.replace(/\n/g," ");
    console.log(input);
    
    input = input.split(" ");
    let unidades = 0;
    let initialBalance = input[0];
    console.log(initialBalance);
    let totalExpense = 0;
    let idYeso = {id:0,description:"nada",cost:2,balance:2};
    var objetoRes = {initialBalance:initialBalance,expenses:[],totalExpense:0,averageExpense:0.000,finalBalance:initialBalance};
    
    
    
    let pos = 0;
    for (let i = 1; i < input.length; i++) {
        
            //console.log("aqui");
            for (key in idYeso) {
                if( key === "id" ){idYeso[key] = input[1+pos];}
                if( key === "description" ){idYeso[key] = input[2+pos];}
                if( key === "cost" ){
                    idYeso[key] = input[3+pos];
                    
                    totalExpense += parseFloat(input[3+pos]);
                    
                    console.log(totalExpense);
                    
                }
                if( key === "balance" ){idYeso[key] = (objetoRes["finalBalance"]-=input[3+pos]).toFixed(2)}
                //console.log(key);
                //console.log(idYeso[key]);   
                totalExpense = parseFloat(totalExpense);
            }
            pos+=3;
            i+=3;
        
        objetoRes["expenses"].push(idYeso);
        unidades++;
        console.log(totalExpense);
        objetoRes["totalExpense"] = totalExpense;
        objetoRes["averageExpense"] = totalExpense / unidades
        console.log(objetoRes);
        
        
        
        
    }

    
    //console.log(objetoRes);
    return objetoRes; 
    
}

console.log(expensesParser(`1000.00
127 Video 7.45
128 Gasoline 16.10`));
module.exports = expensesParser;

// {
//     initialBalance: 1000.00,
//     expenses: [
//       {
//         id: 127
//         description: 'Video',
//         cost: 7.45,
//         balance: 992.55
//       },
//       {
//         id: 128
//         description: 'Gasoline',
//         cost: 16.10,
//         balance: 976.45
//       }
//     ],
//     totalExpense: 23.55,
//     averageExpense: 11.775,
//     finalBalance: 976.45
//   }