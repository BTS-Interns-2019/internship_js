const unzipString = require ("./unzip-string_urbano");
//Test Urbano unzip
test('unzip abc', function () {
    expect(unzipString("abc")).toBe("abc");
});
test('unzip a2cd3c', function () {
    expect(unzipString("a2cd3c")).toBe("accddccc");
});
test("unzip 3a2bd3e", function () {
    expect(unzipString("3a2bd3e")).toBe("aaabbddeee");
});
test("unzip a23ed2c", function () {
    expect(unzipString("a23ed2c")).toBe("aeeedddcc");
});