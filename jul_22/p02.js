function sumar(a,b){
    return a+b;
}
try{
    var primero=1;
    var segundo='t';
    for(segundo;segundo<ciclo;segundo++){
        if(typeof primero === 'number'){
            if(typeof segundo === 'number'){
                console.log(sumar(primero,segundo));
            }
        }
    }
}catch(e){
    console.error(e);
}
