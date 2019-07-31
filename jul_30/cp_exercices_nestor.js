function login(name, password) {
    var users = [
        {name:"marlon", password:"supercombo"},
        {name:"migue", password:"danceboy"},
        {name:"urbano", password:"urbanos"},
        {name:"sergio", password:"comebolas"},
        {name:"nestor", password:"theone"},
        {name:"cristian", password:"brocoli"}
    ];
    var res = users.find(element => element.name === name && element.password === password);
    return !!res;
}

function onlyEven(arr){
    let res = arr.every((e,) => e % 2 == 0 ? true:false );
    return res? arr : false; 
}
`functions ["find","findIndex","every","some","values","entries","keys"]`
function google(str){
    var obj = [{
        name:"some",
        description:" method tests whether at least one element in the array passes the test implemented by the provided function.",
        params:[{name:"item", description:"arr.some(callback(element[, index[, array]])[, thisArg])"}],
        returning:'boolean'
    },
    {
        name:"find",
        description:"method returns the value of the first element in the array that satisfies the provided testing function",
        params:[{name:"item", description:"arr.find(callback(element[, index[, array]])[, thisArg])"}],
        returning:' first element : undefined'
    },
    {
        name:"findIndex",
        description:"method returns the index of the first element in the array that satisfies the provided testing function. ",
        params:[{name:"item", description:"arr.findIndex(callback(element[, index[, array]])[, thisArg])"}],
        returning:'index : -1'
    },
    {
        name:"every",
        description:"method tests whether all elements in the array pass the test implemented by the provided function.",
        params:[{name:"item", description:"arr.every(callback(element[, index[, array]])[, thisArg])"}],
        returning:'boolean'
    },
    {
        name:"values",
        description:"method returns a new Array Iterator object that contains the values for each index in the array.",
        params:[{name:"item", description:"arr.values()"}],
        returning:'value'
    },
    {
        name:"entries",
        description:"method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
        params:[{name:"item", description:"array.entries()"}],
        returning:'key and value'
    },
    {
        name:"keys",
        description:" method returns a new Array Iterator object that contains the keys for each index in the array.",
        params:[{name:"item", description:"arr.keys()"}],
        returning:'key'
    }];
    var res = obj.find(element => element.name === str)
    return !!res ? res : false;
}
module.exports = {login, onlyEven, google};