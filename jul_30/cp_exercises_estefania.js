//login
function login(nombre, contraseña) {
    var users = [{name:"user1", password:"A9876%"}, {name:"user2", password:"C1234$"}, {name:"user3", password:"D%$5678"}]
    var result = users.some(user => user.name === nombre && user.password === contraseña) 
    // console.log(result)
    if (result) {
        return true
    } else {
        return false
    }
}
//console.log(login("user1", "A9876%"))


//onlyEven
function onlyEven(arr){
    var result = arr.every(element => element %2 ===0)
    if(result) {
        return arr
    } else {
        return false
    }
}
// console.log(onlyEven([12, 5, 8, 130, 44]))
// console.log(onlyEven([2, 4, 6, 8]))


//google
function google(str){
    var data = [{
        name:"some",
        description:"The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value. ",
        params:[{name:"item", description:"The index of the current element being processed in the array."}, 
        {name:"element", description:"The current element being processed in the array."},
        {name:"array", description:"The array some() was called upon."}],
        returning:'boolean'
    }, 
    {
        name:"find",
        description:"The find() method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.",
        params:[{name:"item", description:"The index of the current element being processed in the array."}, 
        {name:"element", description:"The current element being processed in the array."},
        {name:"array", description:"The array find was called upon."}],
        returning:'value'
    },
    {
        name:"findIndex",
        description:"The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.",
        params:[{name:"item", description:"The index of the current element being processed in the array."}, 
        {name:"element", description:"The current element being processed in the array."},
        {name:"array", description:"The array findIndex was called upon."}],
        returning:'boolean'
    },
    {
        name:"every",
        description:"The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. ",
        params:[{name:"item", description:"The index of the current element being processed in the array."}, 
        {name:"element", description:"The current element being processed in the array."},
        {name:"array", description:"The array every was called upon."}],
        returning:'boolean'
    },
    {
        name:"values",
        description:"The values() method returns a new Array Iterator object that contains the values for each index in the array.",
        params:[{name:"", description:""}],
        returning:'new array'
    },
    {
        name:"entries",
        description:"The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
        params:[{name:"", description:""}],
        returning:'new array'
    },
    {
        name:"keys",
        description:"The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
        params:[{name:"", description:""}],
        returning:'new array'
    }];

    var result = data.find(d => d.name === str)
    return result
}
console.log(google('findInde'))


//onlyEvenIndex
function onlyEvenIndex(arr){
    var result = arr.some(element => element %2 ===0)
    if(result==true) {
        return arr
    } else {
        return false
    }
}
// console.log(onlyEvenIndex([12, 5, 8, 130, 44]))

module.exports={
    login,
    onlyEven,
    google,
    onlyEvenIndex,
  };