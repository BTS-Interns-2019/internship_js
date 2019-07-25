function sum(primero,segundo){
    return primero+segundo;
}

test('Suma de 2+2', function(){
    expect(sum(2,2)).toBe(4);
})

test('Suma de 4+3', function(){
    expect(sum(4,3)).toBe(7);
})

test('Suma de 4+9', function(){
    expect(sum(4,9)).toBe(13);
})

test('Suma de 10+11', function(){
    expect(sum(10,11)).toBe(21);
})

test('Suma de 2+4', function(){
    expect(sum(2,4)).toBe(6);
})

test('Suma de 6+16', function(){
    expect(sum(6,16)).toBe(22);
})


//tests de avergeSpeed
const averageSpeed = require('./functions_ex_EmmanuelR.js')

const average =averageSpeed();
test('Promedio de velocidad con 100', function(){
    expect(average(100)).toBe(100);
})
test('Promedio de 100, 50', function(){
    expect(average(50)).toBe(75);
})
test('promedio de 100, 50, 75', function(){
    expect(average(75)).toBe(75);
})
test('Promedio de 100, 50, 75, 10', function(){
    expect(average(10)).toBe(58.75);
})
test('Proemdio de 100, 50, 75, 10, 200', function(){
    expect(average(200)).toBe(87);
})
test('Preomedio de 100, 50, 75, 10, 200, 750', function(){
    expect(average(750)).toBe(197.5);
})