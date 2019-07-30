function login(name, password) {
    var users = [{ name: "", password: "" }]
    function valid(user) {
        return user.name == name && user.password == password;
    }
    return users.some(valid)
}

function onlyEven(arr) {
    function isPar(elemento) {
        return elemento % 2 == 0
    }
    return arr.every(isPar) ? arr : false;
}

function google(str) {
    const metodos = [
        {
            name: "find",
            description: "devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada",
            params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
            returning: "value"
        },
        {
            name: "findIndex",
            description: "devuelve el indice del primer elemento del array que cumple la función de prueba proporcionada",
            params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
            returning: "Number"
        },
        {
            name: "every",
            description: "devuelve  true si todos los elementos en el arreglo pasan la condición implementada por la función dada y false si alguno no la cumple",
            params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
            returning: "boolean"
        },
        {
            name: "some",
            description: "devuelve  true si uno de los elementos en el arreglo pasan la condición implementada por la función dada y false si ninguno la cumple",
            params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
            returning: "boolean"
        },
        {
            name: "values",
            description: "devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array",
            params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
            returning: "Array"
        },
        {
            name: "entries",
            description: "devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz",
            params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
            returning: "Array"
        },
        {
            name: "keys",
            description: "devuelve un nuevo objeto Array Iterator que contiene contiene las claves de índice con las que acceder a cada elemento en el array",
            params: [{ name: "callback", description: "funcion a ejecutar" }, { name: "element", description: "elemento del array" }],
            returning: "Array"
        }
    ]
    return metodos.find(function (element) { return element.name == str })
}

function whereAreThey(input) {
    let output = [];
    function isPar(elemento) {
        return elemento % 2 == 0
    }
    while (true) {
        let ind = input.findIndex(isPar);
        if (ind == -1) {
            return output;
        } else {
            output.push(ind);
            input[ind] = 3;
        }
    }
}


module.exports = {
    login,
    onlyEven,
    google,
    whereAreThey
}