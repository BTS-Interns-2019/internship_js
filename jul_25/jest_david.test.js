function sum(uno,dos) {
    return uno + dos;
}

test('Suma de 2+2', function() {
    expect(sum(2, 2)).toBe(4);
})

test('Suma de 4+3', function() {
    expect(sum(4, 3)).toBe(7);
})

test('Suma de 4+9', function() {
    expect(sum(4, 9)).toBe(13);
})

test('Suma de 5+5', function() {
    expect(sum(5, 5)).toBe(10);
})

test('Suma de 0+0', function() {
    expect(sum(0, 0)).toBe(0);
})

test('Suma de -1+-1', function() {
    expect(sum(-1, -1)).toBe(-2);
})

const averageSpeed = require('./functions_ex_david.js')

test('average de 100', function() {
    expect(averageSpeed(100)).toBe(100);
})

test('average de 50', function() {
    expect(averageSpeed(50)).toBe(75);
})

test('average de 75', function() {
    expect(averageSpeed(75)).toBe(75);
})