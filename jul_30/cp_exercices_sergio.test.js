const {login,onlyEven,google} = require("./cp_exercices_sergio.js");


test('find usuario y contraseña son iguales entonces es true', () => {
    expect(login('urbanus','arabia')).toBe(true);
})

test('Asegurando que todos sean pares o nones even or odd', () => {
    expect(onlyEven([8,12,88,66,34,77,4,57])).toBe(false);
})
test('Asegurando que todos sean paresy devuelva el array', () => {
    expect(onlyEven([8,12,88,66,34,100,22])).toStrictEqual([8,12,88,66,34,100,22]);
})

test("Probando fucnion google enviando 'find' esperando un objeto", () => {
    expect(google('find')).toStrictEqual({
        name:"find",
        description:"el primer objeto que cumple la condicion, en otro caso desvuelve undefined",
        params:[
            {name:"element", 
            description:"El elemento actual que se está procesando en el array."
            },
            {name:"index",
            description:"El índice del elemento actual que se está procesando en el array."
            },
            {name:"array",
            description:"El array desde el que se llama al método find."
            }],
        returning:'El valor del primer elemento del array que cumple la función de prueba proporcionada; de lo contrario, devuelve undefined.'
    });
})


test("probando 'findIndex' esperando un bojeto con la informacion",() =>{
    expect(google('findIndex')).toStrictEqual({
        name:"findIndex",
        description:"El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.",
        params:[
            {name:"element", 
            description:"El elemento actual siendo procesado en el array."
            },
            {name:"index",
             description:"El índice del elemento actual que está siendo procesado en el array."
            },
            {name:"array",
            description:"El array findIndex de donde fue llamado."
        }],
        returning:'Un índice en el array si un elemento pasa la prueba; en caso contrario, -1.'
    });
})
