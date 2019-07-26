//function sum(primero, segundo){
//  return primero + segundo;
//}

//test('Suma de 2+2', function() {
//  expect(sum(2,2)).toBe(4);
//})

//test('Suma de 4+3', function() {
//  expect(sum(4, 3)).toBe(7);
//})

//test('Suma de 4+9', function() {
//    expect(sum(4, 9)).toBe(13);
//})

//test('Suma de 4+4', function() {
//    expect(sum(4, 4)).toBe(8);
//})

//test('Suma de 4+5', function() {
//    expect(sum(4, 5)).toBe(9);
//})

//test('Suma de 6+6', function() {
//    expect(sum(6, 6)).toBe(12);
//})

test('Probando 1 entrada', function(){
    expect(averageSpeed(100)).toBe(100);
})

test('Probando 2 entradas', function(){
    expect(averageSpeed(50)).toBe(75);
})

test('Probando entrada string', function(){
    expect(averageSpeed('m')).toBe(75);
})

test('Probando 3 entradas: 100 + 50 + 150', function(){
  expect(averageSpeed(150)).toBe(100);
})

test('Probando 4 entradas: 100 + 50 + 150 + 100', function(){
  expect(averageSpeed(100)).toBe(100);
})

test('Probando 5 entradas: 100 + 50 + 150 + 100 + 200', function(){
  expect(averageSpeed(200)).toBe(120);
})

////////////////////////////////////////////////////////////////////////

const averageSpeed = require('./functions_ex_marlont');
