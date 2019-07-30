const charCounter = require('./am_iterators_homerowk_luisg.js')
test("Hi Every body!", function () {
    expect(charCounter("Hi Every body!")).toStrictEqual({ h: 1, i: 1, e: 2, v: 1, r: 1, y: 2, b: 1, o: 1, d: 1 });
})
test("papa", function () {
    expect(charCounter("Papa")).toStrictEqual({ p: 2, a: 2 });
})
test("paracutirimicuaro", function () {
    expect(charCounter("paracutirimicuaro")).toStrictEqual({ p: 1, a: 3, r:3, c:2, u:2, t:1, i:3, m:1, o:1 });
})