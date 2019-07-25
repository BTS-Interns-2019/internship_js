const unzipString = require('./unzip-string_estefania.js');

test('unzip of " " ', function(){
    expect(unzipString(' ')).toBe('');
});

test('unzip of 2tdy1n4u', function(){
    expect(unzipString('2tdy1n4u')).toBe('ttddyynuuuu');
});

test('unzip of c4t5b', function(){
    expect(unzipString('c4t5b')).toBe('cttttbbbbb');
});

test('unzip of 1234', function(){
    expect(unzipString('1234')).toBe('');
});

test('unzip of cv1234', function(){
    expect(unzipString('cv1234')).toBe('cv');
});

test('unzip of 0cv2uu12', function(){
    expect(unzipString('0cv2uu12')).toBe('uuuu');
});