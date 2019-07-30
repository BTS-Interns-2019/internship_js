function login(name, password) {
    var users = [{name:"cristian", password:"1234"},
                {name:"caps", password:"987654"},
                {name:"urbanos", password:"gordito69"}];
    var x = users.find( (users) => {return users.name === name && users.password === password} );
    return (x)? true:false;
}
console.log(login("cristian", "1234"));

function onlyEven(arra){
    let a = arra.every( (numeros, i, arr) => { if(numeros%2==0){return arr}else{false} } );
    if(a){
        return arra;
    }else {
        return false;
    }
}


var numero = [2,3,8,8,6,4];
console.log(onlyEven(numero));

function whereAreThey(arra){
    var arrais = [];
    for (const key in arra) {
        let a = arra[key];
        if(a%2==0){
            arrais.push(key)
        }
    }
    /*arrais = arra.forEach((element, i) => {
        if(element%2==0){
            return i;
        }
    });//*/
    /*arrais = arra.filter((num)=> num%2==0 );
    return arrais;//*/
    return arrais;
}
console.log(whereAreThey(numero));

let e = ["find","findIndex","every","some","values","entries","keys"]
function google(str){
    obj = [{
        name:"some",
        description:"método que prueba si al menos un" +
        " elemento de la matriz pasa la prueba implementada" +
        " por la función proporcionada. Devuelve un valor booleano. ",
        params:[{name:"element", description:"El elemento actual que se procesa en la matriz."},
        {name:"index ", description:"El índice del elemento actual que se procesa en la matriz."},
        {name:"array", description:"La matriz some()fue invocada."}],
        returning:'boolean'
    },
    {
        name:"find",
        description:"método devuelve el valor del primer elemento en"+
        " la matriz que satisface la función de prueba proporcionada. De undefinedlo contrario se devuelve.",
        params:[{name:"element", description:"El elemento actual que se procesa en la matriz."},
        {name:"index", description:"El índice del elemento actual que se procesa en la matriz."},
        {name:"array", description:"La matriz findfue invocada."}],
        returning:'Object'
    },
    {
        name:"findIndex",
        description:"método devuelve el índice del primer elemento en la matriz que satisface la función de prueba proporcionada . De lo contrario, devuelve -1, lo que indica que ningún elemento pasó la prueba.",
        params:[{name:"element", description:"El elemento actual que se procesa en la matriz."},
        {name:"index", description:"El índice del elemento actual que se procesa en la matriz."},
        {name:"array", description:"La matriz findIndexfue invocada."}],
        returning:'boolean'
    },
    {
        name:"every",
        description:"método prueba si todos los elementos de la matriz pasan la prueba implementada por la función proporcionada. Devuelve un valor booleano.",
        params:[{name:"element", description:"El elemento actual que se procesa en la matriz."},
        {name:"index", description:"El índice del elemento actual que se procesa en la matriz."},
        {name:"array", description:"La matriz every invocada."}],
        returning:'boolean'
    },
    {
        name:"values",
        description:"método devuelve un nuevo Array Iteratorobjeto que contiene los valores para cada índice en la matriz.",
        params:[],
        returning:'Un nuevo Arrayobjeto iterador.'
    },
    {
        name:"entries",
        description:"método devuelve un nuevo Array Iteratorobjeto que contiene los pares clave / valor para cada índice de la matriz.",
        params:[],
        returning:'Un nuevo Arrayobjeto iterador.'
    },
    {
        name:"keys",
        description:"método devuelve un nuevo Array Iteratorobjeto que contiene las claves para cada índice en la matriz.",
        params:[],
        returning:'Un nuevo Arrayobjeto iterador.'
    }];
    var a = obj.find( (elem)=> elem.name===str );
    if(a==undefined){
        return "No se ha encontrad";
    }else{
        return a;
    }
}
console.log(google("find"));

module.exports= {google,login,onlyEven,whereAreThey};