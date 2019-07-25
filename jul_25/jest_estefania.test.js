
// function sum(primero, segundo) {
//     return primero + segundo;
// }

// test('Suma de 2+2', function(){
//     expect(sum(2, 2)).toBe(4);
// });

// test('Suma de 2+3', function(){
//     expect(sum(4, 3)).toBe(7);
// });

// test('Suma de 4+9', function(){
//     expect(sum(4, 9)).toBe(13);
// });

// test('Suma de 10+9', function(){
//     expect(sum(10, 9)).toBe(19);
// });

// test('Suma de 1+23', function(){
//     expect(sum(1, 23)).toBe(24);
// });

// test('Suma de 0+51', function(){
//     expect(sum(0, 51)).toBe(51);
// });

const averageSpeed = require('./functions_ex_estefania.js');
let prueba = averageSpeed()

test('Average of 100', function(){
    expect(prueba(100)).toBe(100);
});

test('Average of 50', function(){
    expect(prueba(50)).toBe(75);
});

test('Average of 75 ', function(){
    expect(prueba(75)).toBe(75);
});

test('Average of 63', function(){
    expect(prueba(63)).toBe(72);
});

test('Average of 70', function(){
    expect(prueba(70)).toBe(71.6);
});

test('Average of 80', function(){
    expect(prueba(80)).toBe(73);
});