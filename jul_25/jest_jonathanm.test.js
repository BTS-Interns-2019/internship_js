function sum(primero, segundo){
    return primero + segundo;
}

test('Suma de 2 + 2', function() {
    expect(sum(2, 2)).toBe(4);
})