let charCounter = require('./am_iterators_homework_ricardom.js');



console.log(charCounter("Hola"));


test('test "Hola mundo" ', () => {
    expect(charCounter("Hola mundo")).toBe({ a: 1, d: 1, h: 1, l: 1, m: 1, n: 1, o: 2, u: 1 });
})

test('test "Ajalas Bistec" ', () =>{
    expect("Ajalas Bistec").toBe({ a: 3, b: 1, c: 1, e: 1, i: 1, j: 1, l: 1, s: 2, t: 1 });
})

test('test "Yo Queria Dormir :( "', () => {
    expect("Yo Queria Dormir :( ").toBe({ a: 1, d: 1, e: 1, i: 2, m: 1, o: 2, q: 1, r: 3, u: 1, y: 1 })
} )