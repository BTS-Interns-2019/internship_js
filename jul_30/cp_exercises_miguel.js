/* Using some, every, find and/or findIndex, write functions that accomplish the following:
    login, return true or false if a user is allowed to login

function login(name, password) {
    var users = [{name:"", password:""}]

    return true|false
}*/
module.exports = {
    login,
    onlyEven,
    google,
    evenIndex
}
users = [
    {
        name: "usuario1",
        password: "usuario1"
    },{
        name: "usuario2",
        password: "usuario2"
    },{
        name: "usuario3",
        password: "usuario3"
    },{
        name: "usuario",
        password: "contraseña"
    },{
        name: "yo",
        password: "notu"
    }
];
function login(arr, name, password){
    if(Array.isArray(arr)==true){
        let resultado = arr.find(user=>user.name === name );
        if(resultado!=undefined){
            if(resultado.name == name && resultado.password == password){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }else{
        return false;
    }
}
/*
    Given an array, returns an array with even elements if all are even or false if at least one is odd 
    onlyEven(arr){return []|false}
 */
function onlyEven(arr){
    if(Array.isArray(arr)==true){
        if(arr.length<1){
            return false;
        }else{
            let condicion = arr.every(num=> num%2 ==0);
            if(condicion === true){
                return arr;
            }else{
                return condicion;
            }
        }
    }else{
        return false;
    }
}
/*  Given a string, returns an object with the required params and returning values of the following 
functions ["find","findIndex","every","some","values","entries","keys"] 
function google(str){
        return {
            name:"some",
            description:"",
            params:[{name:"item", description:""}],
            returning:'boolean'
        }
    }*/
/* Las cadenas de entradas seran "find", "findIndex", "every", "some", "values", "entries", "keys" 
Va a existir un arreglo con la definicion de los objetos definido ya, y lo que se debe de hacer es que
lo que mas coincida con la entrada es la definicion que retorna*/
queries = [
    {
        name:"find",
        description:"Retorna el primer elemento de un arreglo que cumpla con cierta condicion",
        params:[
            {
                callback:[
                    {
                        name:"element", 
                        description:"Valor actual",
                        type:"necesario"
                    },{
                        name:"index",
                        description:"Indice del valor actual",
                        type:"opcional"
                    },{
                        name:"array",
                        description:"Arreglo que esta manejando el metodo",
                        type:"opcional"
                    }
                ]
            },{
                name:"thisArg",
                description:"Parametro de invocacion del callback",
                type:"opcional"
            }
        ],
        returning: "Valor del primer elemento en el arreglo que satisfaga con la condicion de la funcion, de otro modo undefined"
    },{
        name:"findIndex",
        description:"Retorna el indice del primer elemento de un arreglo que cumpla con cierta condicion",
        params:[
            {
                callback:[
                    {
                        name:"element", 
                        description:"Valor actual",
                        type:"necesario"
                    },{
                        name:"index",
                        description:"Indice del valor actual",
                        type:"opcional"
                    },{
                        name:"array",
                        description:"Arreglo que esta manejando el metodo",
                        type:"opcional"
                    }
                ]
            },{
                name:"thisArg",
                description:"Parametro de invocacion del callback",
                type:"opcional"
            }
        ],
        returning: "Entero de la posicion del arreglo donde se encuentra el elemento, si no lo encuentra imprime -1"
    },{
        name:"every",
        description:"Retorna verdadero si todos los elementos de un arreglo cumplen con cierta condicion",
        params:[
            {
                callback:[
                    {
                        name:"element", 
                        description:"Valor actual",
                        type:"necesario"
                    },{
                        name:"index",
                        description:"Indice del valor actual",
                        type:"opcional"
                    },{
                        name:"array",
                        description:"Arreglo que esta manejando el metodo",
                        type:"opcional"
                    }
                ]
            },{
                name:"thisArg",
                description:"Parametro de invocacion del callback",
                type:"opcional"
            }
        ],
        returning: "Booleano"
    },{
        name:"some",
        description:"Retorna verdadero si alguno de los elementos de un arreglo cumplen con cierta condicion",
        params:[
            {
                callback:[
                    {
                        name:"element", 
                        description:"Valor actual",
                        type:"necesario"
                    },{
                        name:"index",
                        description:"Indice del valor actual",
                        type:"opcional"
                    },{
                        name:"array",
                        description:"Arreglo que esta manejando el metodo",
                        type:"opcional"
                    }
                ]
            },{
                name:"thisArg",
                description:"Parametro de invocacion del callback",
                type:"opcional"
            }
        ],
        returning: "Booleano"
    },{
        name:"values",
        description:"Retorna los valores de cada elemento",
        returning: "Arreglo iterador"
    },{
        name:"entries",
        description:"Retorna un objeto iterador con la clave y el valor de cada elemento",
        returning: "Arreglo iterador"
    },{
        name:"keys",
        description:"Retorna las claves de cada elemento",
        returning: "Arreglo iteador"
    }
];
function google(arr,str){ 
    if(Array.isArray(arr)==true){
        //console.log(arr.length);
        if(arr.length>0){
            //console.log("a");
            let res = [];
            //console.log("n="+arr.find(query=>query.name === str ));
            if(arr.find(query=>query.name === str )==undefined){
                return [];
            }else{
                res = arr.find(query=>query.name === str );
                return res;
            }
        }else{
            return [];
        }
    }else{
        return [];
    }
}
console.log(google(queries,"values"));
//console.log(google("Hola mundo"));  
/*Given an array of numbers, returns a new array of just the index of even numbers*/
function evenIndex(arr){
    if(Array.isArray(arr)==true){
        const evenones = arr.filter(num=>num%2==0);
        let res = [];
        for(let i=0; i<evenones.length;i++){
            res[i] = arr.findIndex(num=>num == evenones[i]);
        }
        return res;
    }else{
        return [];
    }
    
}
//console.log(evenIndex([1,2,3,4,5,6,7,8,9]));  
//console.log(evenIndex([2,4,6,8,10,12,14,16])); 
//console.log(evenIndex([1,3,5,7,9,11,13,15])); 
//console.log(evenIndex([2,204,192,115,84,44,52,16])); 
