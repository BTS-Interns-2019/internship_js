function suma(a,b){
    return a + b;
}


test('suma de 2+2', function(){
    expect(suma(2, 2)).toBe(4);
})

test('suma de  4 + 3',function() {
    expect(suma(4, 3)).toBe(7);
})

test('suma de 4 + 9', function(){
    expect(suma(4, 9)).toBe(13);
})

test('suma de 100 + 100', function(){
    expect(suma(100, 100)).toBe(200);
})

test('suma de 15 + 15', function(){
    expect(suma(15, 15)).toBe(30);
})

test('suma de 32 +32', function(){
    expect(suma(32, 32)).toBe(64);
})


    // Test average speed
    
    
    
function averageSpeed(){
    let promedio = 0;
    let ite = 0;

        return function funcionHija(numero){
            ite++;
            promedio+=numero; 
            return promedio / ite;
        }
}

let average = averageSpeed();
// console.log(average(100));
// console.log(average(50));
// console.log(average(75));


test('promedio de velocidad 100', function(){
    expect(average(100)).toBe(100);
})

test('promedio de velocidad 50', function(){
    expect(average(50)).toBe(75);
})

test('promedio de velocidad 50',function(){
    expect(average(75)).toBe(75);
})

test('promedio de velocidad 10', function(){
    expect(average(10)).toBe(58.75);
})

test('promedio de velocidad 32',function(){
    expect(average(32)).toBe(53.4);
})

test('promedio de velocidad de 81', function(){
    expect(average(81)).toBe(58);
})

