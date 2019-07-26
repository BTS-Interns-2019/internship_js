test('Probando entrada sin numeros', function(){
    expect(unzipString('aabbcc')).toBe('aabbcc');
})

test('Probando entrada con un numero y seguido una letra', function(){
    expect(unzipString('2a3b4c')).toBe('aabbbcccc');
})

test('Probando entrada con un numero y seguido mas de una letra', function(){
    expect(unzipString('2ab3cd')).toBe('aabbcccddd');
})

test('Probando entrada con un mas de un numero seguido de una letra', function(){
    expect(unzipString('23a35b42c')).toBe('aaabbbbbcc');
})
//////////////////////////////////////////////////

const unzipString = require('./unzip-string_marlont.js');
