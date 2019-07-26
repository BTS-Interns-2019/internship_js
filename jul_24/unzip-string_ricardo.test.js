
let unzipString = require('./unzip-string_ricardo.js');

console.log(unzipString);
test('test a233b4c', function(){
    expect(unzipString("a233b4c")).toBe("abbbcccc");
})

test('test 44bb98c1l', function(){
    expect(unzipString("44bb98c1l")).toBe("bbbbbbbbccccccccl");
})

test('test 1hola2mundo3bistec',function(){
    expect(unzipString("1hola2mundo3bistec")).toBe("holammuunnddoobbbiiisssttteeeccc");
})

test('test 123abc321bcaa1b2c3',function(){
    expect(unzipString("123abc321bcaa1b2c3")).toBe("aaabbbcccbcaabcc")
});

test('test cadena vacia',function(){
    expect(unzipString(" ")).toBe("")
});