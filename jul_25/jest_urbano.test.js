// function sum(primero, segundo) {
//     return primero+segundo;
//     switch (primero) {
//         case 2:
//             return 4;
//             break;
//         case 4:
//             return 7;
//             break
//     }
//
// }
// test('Suma de 2+2', function () {
//     expect(sum(2,2)).toBe(4)
// })
// test('Suma de 4+3', function () {
//     expect(sum(4,3)).toBe(7)
// })
// test('Suma de 4+9', function () {
//     expect(sum(4,9)).toBe(13)
// })
//
// test('Suma de 150+250', function () {
//     expect(sum(150,250)).toBe(400);
// })
// test('Suma de 40+90', function () {
//     expect(sum(40,90)).toBe(130);
// })
// test('Suma de 2000+3500', function () {
//     expect(sum(2000,3500)).toBe(5500);
// })
// test('Suma de 50/50', function () {
//     expect(sum(50,50)).toBe(1);
// })
const averageSpeed = require('./funciones_ex_urbano');

test('promedio de 100', function () {
    let  testVar= averageSpeed();
    expect(testVar(100)).toBe(100);
})
test('Promedio de 100,50', function () {
    let  testVar;
    testVar= averageSpeed();
    expect(testVar(100)).toBe(100);
    expect(testVar(50)).toBe(75);
})
test('Promedio de 50,40,90', function () {
    let  testVar;
    testVar= averageSpeed();
    expect(testVar(50)).toBe(50);
    expect(testVar(40)).toBe(45);
    expect(testVar(90)).toBe(60);

})
test('Promedio de 150,60,80,10', function () {
    let  testVar;
    testVar= averageSpeed();
    expect(testVar(150)).toBe(150);
    expect(testVar(60)).toBe(105);
    expect(testVar(80)).toBeCloseTo(96.66666);
    expect(testVar(10)).toBe(75);
})
test('Promedio de 125,65,15,76', function () {
    let  testVar;
    testVar= averageSpeed();
    expect(testVar(125)).toBe(125);
    expect(testVar(65)).toBe(95);
    expect(testVar(15)).toBeCloseTo(68.33);
    expect(testVar(76)).toBe(70.25);
})
test('Promedio de 89,136,50,79,150,200,500', function () {
    let  testVar;
    testVar= averageSpeed();
    expect(testVar(89)).toBe(89);
    expect(testVar(136)).toBe(112.5);
    expect(testVar(50)).toBeCloseTo(91.6667);
    expect(testVar(79)).toBe(88.5);
    expect(testVar(150)).toBe(100.8);
    expect(testVar(200)).toBeCloseTo(117.33);
    expect(testVar(500)).toBe(172);
})