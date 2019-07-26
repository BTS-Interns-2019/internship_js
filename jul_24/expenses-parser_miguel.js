module.exports = expensesParser;

function expensesParser(word){
    let res;
    let temp = [];
    let auxw = word;
    /* Solo asigna valor para dividir el balance del resto */
    for(let t in auxw){
        if(auxw.charAt(t) == '\n'){
            auxw = auxw.replace(auxw.charAt(t),'^');
            break;
        }
    }
    //console.log("aux = "+auxw);
    let palabras = auxw.split('^');
    balance = palabras[0];
    valor = palabras[1];
    while(valor.charAt(0) == '\n'){
        valor = valor.substring(1,valor.length);
    }
    //console.log("balance = "+balance);
    //console.log("valor = "+valor);
    for(let s = 0, s1 = -1, s2 = 1;s<valor.length; s++, s1++, s2++){
        //console.log("v = "+valor.charAt(s)+" v-1 = "+valor.charAt(s1)+" v+1 = "+valor.charAt(s2));
        if(valor.charAt(s) == '\n' && valor.charAt(s+1) != '\n'){
            valor = valor.replace(valor.charAt(s),'^');
        } 
    }
    //console.log("valor = "+valor);
    valores = valor.split("^");
    let costos = 0;
    let b = parseInt(balance);
    let bal = parseFloat(balance);
    let list=[];
    for(let i = 0; i<valores.length;i++){
        let elementos = valores[i].split(" ");
        let id = elementos[0];
        let idn = parseInt(id);
        let descripcion = elementos[1];
        let costo = elementos[2];
        let cost = parseFloat(costo);
        costos = costos + cost;
        bal = bal - cost;
        temp[i]={id:idn,description:descripcion,cost:cost,balance:bal};
        list.push(temp[i]);
    }
    res={initialBalance: b,
    expenses: list,
    totalExpense: costos,
    averageExpense: costos/2,
    finalBalance: bal
    }
    return res;
}
/*
const input = `1000.00
127 Video 7.45
128 Gasoline 16.10`
const blanc = `1000.00

127 Video 7.45

128 Gasoline 16.10`
;
console.log(expensesParser(input));
console.log(expensesParser(blanc));*/
//First balance: 992.55
//Second balance: 976.44999999
/*Despues de los corchetes
    totalExpense: 23.55, Suma de costos
    averageExpense: 11.775, Promedio de costo
    finalBalance:  976.44999999*/