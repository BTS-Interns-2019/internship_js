const charCounter = require ("./am_iterators_homework_cristianp.js");

test('Prueba ejemplo', function(){
    expect(charCounter('Hi Every body')).toEqual({h: 1, i: 1, e: 2, v: 1, r: 1, y: 2, b: 1, o: 1, d: 1});
})

test('Prueba de nombre', function(){
    expect(charCounter("CriStiAn")).toEqual({c: 1, r: 1, i: 2, s: 1, t: 1, a: 1, n: 1});
})

test("Caracteres al azar", function(){
    expect(charCounter("asdfasd4123g485cb496dftgewrt sdgf6s74r92435!#$")).toEqual({a: 2, s: 4, d: 4, f: 3, g: 3, c: 1, b: 1, t: 2, e: 1, w: 1, r: 2 });
})