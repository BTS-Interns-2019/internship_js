/*function suma(primero, segundo){
   return primero + segundo;
}

test('Suma de 2 + 2', function(){
    expect(suma(2,2)).toBe(4)
})

test('Suma de 4 + 3', function(){
    expect(suma(4,3)).toBe(7)
})

test('Suma de 4 + 9', function(){
    expect(suma(4,9)).toBe(13)
})

test('Suma de 5 + 10', function(){
    expect(suma(5,10)).toBe(15)
})

test('Suma de 10 + 10', function(){
    expect(suma(10,10)).toBe(20)
})

test('Suma de 5 + 5', function(){
    expect(suma(5,5)).toBe(10)
})*/



const averageSpeedPadre = require('./functions_ex_viridiana.js');
let prueba=averageSpeedPadre();

test('El promedio de esta funcion es', function(){
    expect(prueba(100)).toBe(100)
});

test('El promedio de esta funcion es', function(){
    expect(prueba(50)).toBe(75)
});

test('El promedio de esta funcion es', function(){
    expect(prueba(75)).toBe(75)
});

test('El promedio de esta funcion es', function(){
    expect(prueba(63)).toBe(72)
});

test('El promedio de esta funcion es', function(){
    expect(prueba(80)).toBeCloseTo(73.6)
});

test('El promedio de esta funcion es', function(){
    expect(prueba(60)).toBeCloseTo(71.33)
});