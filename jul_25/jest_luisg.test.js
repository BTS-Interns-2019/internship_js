function suma(primero, segundo) {
    return primero + segundo;
}

test('Suma de 2+2', function () {
    expect(suma(2, 2)).toBe(4);
})

test('Suma de 4+3', function () {
    expect(suma(4, 3)).toBe(7);
})

test('Suma de 4+9', function () {
    expect(suma(4, 9)).toBe(13);
})

//3 pruebas mas

test('Suma de 99+0.2', function () {
    expect(suma(99, 0.2)).toBe(99.2);
})

test('Suma de 0+0', function () {
    expect(suma(0, 0)).toBe(0);
})

test('Suma de 1+999', function () {
    expect(suma(1, 999)).toBe(1000);
})

const averageSpeed = require('./functions_ex_luis.js');
let average = averageSpeed();
test('Promedio velocidad 100', function () {
    expect(average(100)).toBe(100);
})
test('Promedio velocidad 50', function () {
    expect(average(50)).toBe(75);
})
test('Promedio velocidad 75', function () {
    expect(average(75)).toBe(75);
})
test('Promedio velocidad 0', function () {
    expect(average(0)).toBe(56.25);
})
test('Promedio velocidad 150', function () {
    expect(average(150)).toBe(75);
})
test('Promedio velocidad 200', function () {
    expect(average(225)).toBe(100);
})