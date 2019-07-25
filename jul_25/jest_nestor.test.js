function sum(a, b){
    return a + b ;    
}
test('Suma de 2+2', function(){
    expect(sum(2, 2)).toBe(4);
});
test('Suma de 3+1', function(){
    expect(sum(3, 1)).toBe(4);
});
test('Suma de 0+4', function(){
    expect(sum(0, 4)).toBe(4);
});
test('Suma de 1+3', function(){
    expect(sum(1, 3)).toBe(4);
});

//--------------------------------


const averageSpeed = require('./functions_ex_nestor');

test('velocidad 225, 3 carro', function(){
    var average = averageSpeed();
    expect(average(100)).toBe(100);
    expect(average(50)).toBe(75);
    expect(average(75)).toBe(75);    
});

test('velocidad 325, 4 carro', function(){
    var average = averageSpeed();
    expect(average(100)).toBe(100);
    expect(average(50)).toBe(75);
    expect(average(75)).toBe(75);
    expect(average(100)).toBe(81.25);    
});

test('velocidad 225, 3 carro dos funciones', function(){
    var average = averageSpeed();
    expect(average(100)).toBe(100);
    expect(average(50)).toBe(75);
    expect(average(75)).toBe(75);
    
    var average1 = averageSpeed();
    expect(average1(100)).toBe(100);
    expect(average1(50)).toBe(75);
    expect(average1(75)).toBe(75);
});


test('velocidad -100, 1 carro', function(){
    var average = averageSpeed();
    expect(average(-100)).toBe(-100);    
});

test('velocidad 325, 4 carro', function(){
    var average = averageSpeed();
    expect(average(-100)).toBe(-100);
    expect(average(50)).toBe(-25);
    expect(average(-75)).toBe(-41.6666);
    expect(average(300)).toBe(175);    
});
test('velocidad 325, 4 carro', function(){
    var average = averageSpeed();
    expect(average("hola")).toBe(NaN);    
});

test('llamando al padre', function(){
    var average = averageSpeed();
    expect(typeof averageSpeed(100)).toBe("function");    
});
