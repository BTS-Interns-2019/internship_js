const {login, onlyEven, google } = require('./cp_exercices_nestor');
// var users = [
//     {name:"marlon", password:"supercombo"},
//     {name:"migue", password:"danceboy"},
//     {name:"urbano", password:"urbanos"},
//     {name:"sergio", password:"comebolas"},
//     {name:"nestor", password:"theone"},
//     {name:"cristian", password:"brocoli"}
// ]
var some = {
    name:"some",
    description:" method tests whether at least one element in the array passes the test implemented by the provided function.",
    params:[{name:"item", description:"arr.some(callback(element[, index[, array]])[, thisArg])"}],
    returning:'boolean'
};
var find =  {
    name:"find",
    description:"method returns the value of the first element in the array that satisfies the provided testing function",
    params:[{name:"item", description:"arr.find(callback(element[, index[, array]])[, thisArg])"}],
    returning:' first element : undefined'
};
var findIndex = {
    name:"findIndex",
    description:"method returns the index of the first element in the array that satisfies the provided testing function. ",
    params:[{name:"item", description:"arr.findIndex(callback(element[, index[, array]])[, thisArg])"}],
    returning:'index : -1'
};
var every = {
    name:"every",
    description:"method tests whether all elements in the array pass the test implemented by the provided function.",
    params:[{name:"item", description:"arr.every(callback(element[, index[, array]])[, thisArg])"}],
    returning:'boolean'
};
var values = {
    name:"values",
    description:"method returns a new Array Iterator object that contains the values for each index in the array.",
    params:[{name:"item", description:"arr.values()"}],
    returning:'value'
};
var entries =  {
    name:"entries",
    description:"method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
    params:[{name:"item", description:"array.entries()"}],
    returning:'key and value'
};
var keys = {
    name:"keys",
    description:" method returns a new Array Iterator object that contains the keys for each index in the array.",
    params:[{name:"item", description:"arr.keys()"}],
    returning:'key'
};
test("name: migue, pasword: danceboy", function(){
    expect(login("migue", "danceboy")).toBe(true);
});
test("name: migue1, pasword: danc2eboy", function(){
    expect(login("migue1", "danc2eboy")).toBe(false);
});
test("[1, 2, 3, 5]", function(){
    expect(onlyEven([1, 2, 3, 5])).toBe(false);
});
test("[10, 8, 6, 18]", function(){
    expect(onlyEven([10, 8, 6, 18])).toStrictEqual([10, 8, 6, 18]);
});




test("some", function(){
    expect(google("some")).toStrictEqual(some);
});
test("find", function(){
    expect(google("find")).toStrictEqual(find);
});
test("findIndex", function(){
    expect(google("findIndex")).toStrictEqual(findIndex);
});
test("every", function(){
    expect(google("every")).toStrictEqual(every);
});
test("values", function(){
    expect(google("values")).toStrictEqual(values);
});
test("entries", function(){
    expect(google("entries")).toStrictEqual(entries);
});
test("keys", function(){
    expect(google("keys")).toStrictEqual(keys);
});

