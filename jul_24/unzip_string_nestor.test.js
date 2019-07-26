const unzipString = require("./unzip-string_nestor");

test('323oj43ac', function(){
    expect(unzipString('323oj43ac')).toBe('ooojjjaaaccc');
});
test('3233cdf4m4', function(){
    expect(unzipString('3233cdf4m4')).toBe('cccdddfffmmmm');
});
test(' ', function(){
    expect(unzipString(' ')).toBe(' ');
});
test('abcde3', function(){
    expect(unzipString('abcde3')).toBe('abcde');
});