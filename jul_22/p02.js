function sumar(a,b){
    return a+b;
}

var primero=1;
var segundo=2;
var ciclo=5;
for(segundo;segundo<ciclo;segundo++){
    if(typeof primero === 'number'){
        if(typeof segundo === 'number'){
            console.log(sumar(primero,segundo));
        }
    }
}