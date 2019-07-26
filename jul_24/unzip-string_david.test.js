const unzipString = require('./unzip-string_david.js')

test('unzip de 3abc', function() {
    expect(unzipString('3abc')).toBe('aaabbbccc');
})

test('unzip de abcd', function() {
    expect(unzipString('abcd')).toBe('abcd');
})

test('unzip de ""', function() {
    expect(unzipString('')).toBe('');
})

test('unzip de 22abc1d', function() {
    expect(unzipString('22abc1d')).toBe('aabbccd');
})