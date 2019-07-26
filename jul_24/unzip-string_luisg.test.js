const unzipString = require('./unzip-string_luis.js');

test('Prueba 1', function () {
    expect(unzipString('a2bc')).toBe('abbcc');
})

test('Prueba 2', function () {
    expect(unzipString('')).toBe('');
})

test('Prueba 3', function () {
    expect(unzipString('3D2a5d2f')).toBe('DDDaadddddff');
})

test('Prueba 4', function () {
    expect(unzipString('3d332f2a')).toBe('dddffaa');
})

