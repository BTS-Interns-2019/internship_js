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
    evenArray
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
    if(arr.isArray==true){
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
//console.log(login(users,"usuario1","usuario1"));
//console.log(login(users,"leviatan","dorado"));
//console.log(login(users,"usuario","contraseña"));
//console.log(login(users,"usuario2","contraseña"));
/*
    Given an array, returns an array with even elements if all are even or false if at least one is odd 
    onlyEven(arr){return []|false}
 */
function onlyEven(arr){
    let condicion = arr.every(num=> num%2 ==0);
    if(condicion === true){
        return arr;
    }else{
        return condicion;
    }

}
//console.log(onlyEven([1,2,3,4,5,6,7,8]));
//console.log(onlyEven([2,4,6,8,10,12,14,16]));
//console.log(onlyEven([1,3,5,7,9,11,13,15]));
//console.log(onlyEven([2,204,192,115,84,44,52,16]));
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
function google(str){ 
    let res = [];
    //find regresa su objeto
    //findIndex regresa su objeto
    //every regresa su objeto
    //some regresa su objeto
    //values regresa su objeto
    //entries regresa su objeto
    //keys regresa su objeto
    return res;
}
//console.log(google("Hola mundo"));  
/*Given an array of numbers, returns a new array of just the index of even numbers*/
function evenArray(arr){
    const evenones = arr.filter(num=>num%2==0);
    let res = [];
    for(let i=0; i<evenones.length;i++){
        res[i] = arr.findIndex(num=>num == evenones[i]);
    }
    return res;
}
//console.log(evenArray([1,2,3,4,5,6,7,8,9]));  
//console.log(evenArray([2,4,6,8,10,12,14,16])); 
//console.log(evenArray([1,3,5,7,9,11,13,15])); 
//console.log(evenArray([2,204,192,115,84,44,52,16])); 
