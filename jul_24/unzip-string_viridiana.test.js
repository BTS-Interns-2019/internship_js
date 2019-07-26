const unzipString = require('./unzip-string_viridiana');


//let prueba=unzipString();

test('El resultado es :', function(){
    expect(unzipString('a2bc')).toBe('abbcc')
});
