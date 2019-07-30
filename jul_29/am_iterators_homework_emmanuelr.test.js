let charCounter=require('./am_iterators_homework_emmanuelr.js');

test('Caso de prueba con cadena vacia', function(){
    expect(charCounter('')).toEqual({});
})

test('caso del ejemplo', function(){
    expect(charCounter("Hi Every body!")).toEqual({h: 1,i: 1,e: 2,v: 1,r: 1,y: 2,b: 1,o: 1,d: 1 });
})

test("muchas letras y caracteres", function(){
    expect(charCounter(" este mesnaje9832 esta medio &%$# rarillo kkjuhhhhhhhh ")).toEqual({"a": 3, "d": 1, "e": 6, "h": 8, "i": 2, "j": 2, "k": 2, "l": 2, "m": 2, "n": 1, "o": 2, "r": 2, "s": 3, "t": 2, "u": 1});
})