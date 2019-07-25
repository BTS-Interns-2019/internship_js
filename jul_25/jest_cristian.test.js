/*function sum(primero, segundo){
    return primero + segundo;
}

test('Suma de 2 + 2', function(){
    expect(sum(2,2)).toBe(4)
})

test('Suma de 4 + 3', function(){
    expect(sum(4, 3)).toBe(7)
})

test('Suma de 4 + 9', function(){
    expect(sum(4, 9)).toBe(13)
})

test('Suma de 5 + 5', function(){
    expect(sum(5, 5)).toBe(10)
})

test("Suma de 10 + 15", function(){
    expect(sum(10,15)).toBe(25)
})

test('Suma de 7 + 7', function(){
    expect(sum(7, 7)).toBe(14)
})//*/

const averageSpeed = require("./functions_ex_cristianp.js")
var cris = averageSpeed();
test("Añadir suma velocidad 100", function(){
    expect(cris(100)).toBe(100);
})

test("Añadir suma velocidad 50", function(){
    expect(cris(50)).toBe(75);
})
test("Añadir suma velocidad 75", function(){
    expect(cris(75)).toBe(75);
})

var car = averageSpeed();
test("Añadir suma velocidad 50", function(){
    expect(car(50)).toBe(50);
})

test("Añadir suma velocidad 70", function(){
    expect(car(70)).toBe(60);
})
test("Añadir suma velocidad 75", function(){
    expect(car(75)).toBe(65);
})