// # Using `some`, `every`, `find` and/or `findIndex`, write functions that accomplish the following:

// * login, return true or false if a user is allowed to login

// console.log(login('David', 'contraseña'));

function login(nombre, contraseña) {
    var users = [{name:"David", password:"contraseña"}, {name:"Martin", password:"123"}, {name:"Silva", password:"gatito"}];
    return users.some(usuario => usuario.name === nombre && usuario.password === contraseña);
}

// * Given an array, returns an array with *even* elements if all are *even* or false if at least one is odd

// array = [2,4,6,8,10];
// // array = [1,3,5,7,9];
// // array = [1,2,3,4,5];
// console.log(onlyEven(array));

function onlyEven(array) {
    result = array.every(element => element%2 == 0);
    return result ? array :false;
}

// * Given a string, returns an object with the required params and returning values of the following `functions ["find","findIndex","every","some","values","entries","keys"]`

// console.log(google("values"));

function google(str){
    metodos = [
        {name:"find",
        description:"The find method executes the callback function once for each index of the array until it finds one where callback returns a true value.",
        params:[{name:"element", description:"The current element being processed in the array."}, {name:"index", description:"The index of the current element being processed in the array."}, {name:"array", description:"The array find was called upon."}],
        returning:"The value of the first element in the array that satisfies the provided testing function."},

        {name:"findIndex",
        description:"The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.",
        params:[{name:"element", description:"The current element being processed in the array."}, {name:"index", description:"The index of the current element being processed in the array."}, {name:"array", description:"The array find was called upon."}],
        returning:"The first index of the element in the array; -1 if not found."},

        {name:"every",
        description:"The every() method tests whether all elements in the array pass the test implemented by the provided function.",
        params:[{name:"element", description:"The current element being processed in the array."}, {name:"index", description:"The index of the current element being processed in the array."}, {name:"array", description:"The array find was called upon."}],
        returning:"true if the callback function returns a truthy value for every array element. Otherwise, false."},

        {name:"some",
        description:"The some() method tests whether at least one element in the array passes the test implemented by the provided function.",
        params:[{name:"element", description:"The current element being processed in the array."}, {name:"index", description:"The index of the current element being processed in the array."}, {name:"array", description:"The array find was called upon."}],
        returning:"true if the callback function returns a truthy value for at least one element in the array. "},

        {name:"values",
        description:"The values() method returns a new Array Iterator object that contains the values for each index in the array.",
        returning:"A new Array iterator object."},

        {name:"entries",
        description:"The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
        returning:"A new Array iterator object."},

        {name:"keys",
        description:"The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
        returning:"A new Array iterator object."} ]

    return metodos.find(metodo => metodo.name === str); 
}

// * Given an array of numbers, returns a new array of just the index of *even* numbers

// array = [2,4,6,8,10];
// array = [1,3,5,7,9];
// array = [1,2,3,4,5];
// console.log(evenIndex(array));

function evenIndex(array) {
    even = array.filter(element => element%2 == 0);
    // console.log(even); // Arreglo con solo elementos pares
    index = [];
    for (i = 0; i < even.length; i++) {
        index[i] = array.findIndex(element => element == even[i]);
    }
    return index;
}

module.exports = {
    login,
    onlyEven,
    google,
    evenIndex
};