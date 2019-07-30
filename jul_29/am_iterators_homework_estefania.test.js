const charCounter = require('./am_iterators_homework_estefania.js');


test("Hi Every body!", function () {
    expect(charCounter("Hi Every body!")).toStrictEqual({ h: 1, i: 1, e: 2, v: 1, r: 1, y: 2, b: 1, o: 1, d: 1 });
});

test("Aquí Hay Varios Pingüinos!", function () {
    expect(charCounter("Aquí Hay Varios Pingüinos!")).toStrictEqual({ a: 3, q: 1, u: 1, h: 1, y: 1, v: 1,
    r: 1, i: 3, o: 2, s: 2, p: 1, n: 2, g: 1 })
});

test("¡¿Qué caracteres estamos ignorando?!", function () {
    expect(charCounter("¡¿Qué caracteres estamos ignorando?!")).toStrictEqual({ q: 1, u: 1, c: 2, a: 4, r: 3, t: 2,
    e: 3, s: 3, m: 1, o: 3, i: 1, g: 1, n: 2, d: 1 })
});