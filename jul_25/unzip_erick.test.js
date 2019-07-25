const unzipStr = require('./unzip-string_erick.js')

test("Unzipit", function(){
    expect(unzipStr("a2bc")).toBe("abbcc")
});

test("Unzipit", function(){
    expect(unzipStr("3d332f2a")).toBe("dddffaa")
});

test("Unzipit", function(){
    expect(unzipStr("abcd")).toBe("abcd")
});


test("Unzipit", function(){
    expect(unzipStr("84urru48ru")).toBe("uuuurrrrrrrruuuurrrrrrrruuuuuuuu")
})

test("Unzipit", function(){
    expect(unzipStr("f0f0ferfr")).toBe("f")
})

test("Unzipit", function(){
    expect(unzipStr("")).toBe("")
})
