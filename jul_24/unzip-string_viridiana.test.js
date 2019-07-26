const unzipString = require('./unzip-string_viridiana.js');


//let prueba=unzipString();

test('El resultado es :', function(){
    expect(unzipString('a2bc')).toBe('abbcc')
});

test('El resultado es :', function(){
    expect(unzipString('3D2a5d2f')).toBe('DDDaadddddff')
});

test('El resultado es :', function(){
    expect(unzipString('3d332f2a')).toBe('dddffaa')
});

test('El resultado es :', function(){
    expect(unzipString('abcd')).toBe('abcd')
});

test('El resultado es :', function(){
    expect(unzipString('a2f4zs1f')).toBe('affzzzzssssf')
});

test('El resultado es :', function(){
    expect(unzipString('2as2ert1')).toBe('aasseerrtt')
});