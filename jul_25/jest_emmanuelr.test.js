function sum(primero,segundo){
    return primero+segundo;

}

test('Suma de 2+2', function(){
    expect(sum(2,2)).toBe(4);
})

test('Suma de ', function(){
    expect(sum(4,3).toBe(7));
})

test('Suma de ', function(){
    expect(sum(4,9).toBe(13));
})

test('Suma de ', function(){
    expect(sum(10,11).toBe(22));
})

test('Suma de ', function(){
    expect(sum(2,4).toBe(6));
})

test('Suma de ', function(){
    expect(sum(6,16).toBe(22));
})