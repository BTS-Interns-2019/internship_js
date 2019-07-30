const {google,
 login,
 onlyEven,
 whereAreThey} = require ("./cp_exercices_cristianp.js");

test("buscar en google.", function(){
    expect(google("find")).toEqual({
        name:"find",
        description:"método devuelve el valor del primer elemento en"+
        " la matriz que satisface la función de prueba proporcionada. De undefinedlo contrario se devuelve.",
        params:[{name:"element", description:"El elemento actual que se procesa en la matriz."},
        {name:"index", description:"El índice del elemento actual que se procesa en la matriz."},
        {name:"array", description:"La matriz findfue invocada."}],
        returning:'Object'
    });
})

test("login 1", function(){
    expect(login("cristian", "1234")).toBe(true);
})

test("login 2", function(){
    expect(login("caps", "987654")).toBe(true);
})
var numero = [2,8,8,6,4,2,6,4,8];
test("onlyEven arreglo", function(){
    expect(onlyEven(numero)).toEqual([2, 8, 8, 6, 4, 2, 6, 4, 8]);
})

test("onlyEven false", function(){
    expect(onlyEven([2,3,4])).toBe(false);
})


var numeros = [2,3,8,8,6,4];
test("whereAreThey posciciones", function(){
    expect(whereAreThey(numeros)).toEqual(["0", "2", "3", "4", "5"]);
})