function login(username, password) {
    let users = [
        {name: "urbano", password: "urbanoG25"},
        {name: "telelsforo", password: "cirilico"},
        {name: "joselit025", password: "jos4526"}
    ];
    if (users.find((user, i, arr) => {
        return user.name === username && user.password === password
    })) {
        return true
    } else {
        return false
    }
}

console.log(login("", ""))


let arrNumbers = [1, 3, 5, 7, 8, 10]
let even = [2, 4, 6, 8, 10]

function onlyEven(arr) {
    if (Array.isArray(arr)) {
        let condition = arr.every((numeros, i, arr) => {
            if (numeros % 2 == 0) {
                return arr
            } else {
                return false
            }
        });
        if (condition) {
            return arr
        } else {
            return false
        }
    } else {
        throw new Error("Solo se pueden ingresar arreglos")
    }
}

console.log(onlyEven(arrNumbers))

//Google

function google(str) {
    let dbMethods = [
        {
            name:"find",
            description: "This method returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned",
            params: [{
                callback: {
                    element: "The current element being processed in the array.",
                    index: "The index of the current element being processed in the array.",
                    array: "(optional) The array find was called upon."
                },
                thisArg: "Optional object to use as this when executing callback."
            }],
            returning: 'The value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.'
},
    {
        name: "findIndex",
            description:"The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.",
            params: [
            {
                callback: {
                    element: "The current element being processed in the array.",
                    index: "The index of the current element being processed in the array.",
                    array: "(optional) The array findIndex was called upon."
                },
                thisArg: "Optional object to use as this when executing callback."
            }
        ],
            returning: 'The index of the first element in the array that passes the test. Otherwise, -1'
    }
,
    {
        name: "every",
            description:"The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. ",
            params: [
            {
                callback: {
                    element: "The current element being processed in the array.",
                    index: "(optional) The index of the current element being processed in the array.",
                    array: "(optional) The array every was called upon."

                },
                thisArg: "(optional) A value to use as this when executing callback."
            }
        ],
            returning: 'true if the callback function returns a truthy value for every array element. Otherwise, false.'
    }
,
    {
        name: "some",
            description: "The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.",
            params: [
            {
                callback: {
                    element: "The current element being processed in the array.",
                    index: "(optional) The index of the current element being processed in the array.",
                    array: "(optional) The array some() was called upon.",
                },
                thisArg: "A value to use as this when executing callback."
            }
        ],
            returning:'true if the callback function returns a truthy value for at least one element in the array. Otherwise, false.'
    }
,
    // {
    //     name: "",
    //         description
    // :
    //     "",
    //         params
    // :
    //     [],
    //         returning
    // :
    //     ''
    // }
    {
        name: "values",
            description: "The values() method returns a new Array Iterator object that contains the values for each index in the array.",
            params: [],
            returning: 'A new Array iterator object.'
    },
    {
        name: "entries",
            description:"The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.",
            params: [],
            returning: 'A new Array iterator object.'
    },
    {
        name:"keys",
            description: "The keys() method returns a new Array Iterator object that contains the keys for each index in the array.",
            params: [],
            returning: 'A new Array iterator object.'
    }
];
    let result;

    result=dbMethods.find((methods,i,arr)=>{if (methods.name===str){ return methods}  })
    if (result){
        return result
    }else {
        return "No se encontro el metodo buscado";
    }
}
console.log(google("entries"))

module.exports = {login, onlyEven, google};