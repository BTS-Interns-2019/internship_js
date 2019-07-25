function sum(primero, segundo) {
    return primero + segundo;
}

test('Suma de 2 + 2', function(){
    expect(sum(2,2)).toBe(4);
})

test('Suma de 4 + 3', function(){
    expect(sum(4,3)).toBe(7);
})
test('Suma de 4 + 9', function(){
    expect(sum(4,9)).toBe(13);
})




test('Suma de 4.5 + 5.5', function() {
    expect(sum(4.5,5.5)).toBe(10)
})

test('Suma de 4 + -3', function() {
    expect(sum(4,-3)).toBe(1)
})
test('Suma de 15 + -16 ', function() {
    expect(sum(15,-16)).toBe(-1)
})



///////
const averageSpeed = require('./functions_ex_sergio')

test('averageSpeed devuelve el valor', function (){
    var average =  averageSpeed();
   expect(average(100)).toBe(100);
   expect(average(50)).toBe(75);
})

test('no esta dividiendo por el numero correct', function (){
    var average =  averageSpeed();
    var contador = conta = 1;
   expect(contador).toBe(1);
})

test('es hija una funcion', function (){
    var hija = averageSpeed();
   expect(typeof hija).toBe('function');  
})

test('es hija una funcion', function (){
    var average =  averageSpeed();
    expect(average(100)).toBe(100);
    expect(average(50)).toBe(75);
    expect(average(75)).toBe(75);
    expect(average(450)).toBe(168.75);
})

test('es hija devuelve correcto 100', function (){
    var hija = averageSpeed(100);
   expect(hija(100)).toBe(100);  
})

test('averageSpeed resive string devuelve error', function (){
    var average =  averageSpeed();
   expect(average('sergio')).toBe(NaN);
})






