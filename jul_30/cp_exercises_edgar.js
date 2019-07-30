function login (name, password){
    var users = [
    { name: "edgar", password: "ed12" },
    { name: "david", password: "da125"}, 
    { name: "pedro", password: "gol52"},
    { name: "pablo", password: "123456"},
    { name: "david", password: "1526pp"}
];

if (users.find (usuario=>(usuario.name === name) && (usuario.password === password))){
    return true;
} else {
    return false;
}
}

console.log(login("david", "1526pp"));

function even (cad){
    if (rest = cad.some (elemento=>elemento % 2 != 0) == true){
        return false;
    } else {
        return cad; 
    }

} 

console.log(even([2,4,9,12,14,10]));



function google(str) {
    let FMethods = [
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
    },
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
    
    let rest;

rest = FMethods.find(method => {if(method.name == str){return method}})
if (rest){
    return rest;
} else{
    return "No se halló el metodo especificado";
}
}
console.log(google("findIndex"));


function evenindex (cad){
   function indice (ele){
        if (ele % 2 == 0){
            return ele;
        }
    }

    return cad.every(indice); 


}
console.log(evenindex([2,4,6,8,20,10]));

