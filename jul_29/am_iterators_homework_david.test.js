const charCounter = require('./am_iterators_homework_david.js');

test('charCounter de "Hi Every body!"', function() {
    expect(charCounter("Hi Every body!")).toEqual({ h: 1, i: 1, e: 2, v: 1, r: 1, y: 2, b: 1, o: 1, d: 1 });
});

test('charCounter de "Anita lava la tina"', function() {
    expect(charCounter("Anita lava la tina")).toEqual({ a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 });
});

test('charCounter de "Blue Trail Software"', function() {
    expect(charCounter("Blue Trail SoftWare")).toEqual({ b: 1, l: 2, u: 1, e: 2, t: 2, r: 2, a: 2, i: 1, s: 1, o: 1, f: 1, w: 1 });
});