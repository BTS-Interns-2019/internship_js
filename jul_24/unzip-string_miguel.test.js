const unzipString = require('./unzip-string_miguel.js');

//PRUEBAS
test("Prueba c2a5f2b",function(){
    expect(unzipString('c2a5f2b')).toBe('caafffffbb');
})
test("Prueba 5cos2n6x",function(){
    expect(unzipString('5cos2n6x')).toBe('cccccooooosssssnnxxxxxx');
})
test("Prueba 2la6mi2c1e",function(){
    expect(unzipString('2la6mi2c1e')).toBe('llaammmmmmiiiiiicce');
})
test("Prueba abc2xyz",function(){
    expect(unzipString('abc2xyz')).toBe('abcxxyyzz');
})