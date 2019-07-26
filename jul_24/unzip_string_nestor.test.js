const unzipString = require("./unzip-string_nestor");

test('1233abc', function(){
    expect(unzipString('1233abc')).toBe('aaabbbccc');
});
test('3abc', function(){
    expect(unzipString('3abc')).toBe('aaabbbccc');
});
test('8abc', function(){
    expect(unzipString('8abc')).toBe('aaaaaaaabbbbbbbbcccccccc');
});
test('2abc', function(){
    expect(unzipString('2abc')).toBe('aabbcc');
});
test('abcd', function(){
    expect(unzipString('abcd')).toBe('abcd');
});
test('', function(){
    expect(unzipString('')).toBe('');
});
test('1233abc', function(){
    expect(unzipString('1233abc')).toBe('aaabbbccc');
});
test('22abc1d', function(){
    expect(unzipString('22abc1d')).toBe('aabbccd');
});