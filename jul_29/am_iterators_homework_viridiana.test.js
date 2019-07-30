const charCounter = require('./am_iterators_homework_viridiana.js')

test('El resultado de la prueba es:', () => {
    expect(charCounter("Hola Como EstaS")).toStrictEqual({ h: 1, o: 3, l: 1, a: 2, c: 1, m: 1, e: 1, s: 2, t: 1 })
})

test('El resultado de la prueba es:', () => {
    expect(charCounter("Bienvenidos a Tepatitlan")).toStrictEqual({ b: 1, i: 3, e: 3, n: 3, v: 1, d: 1, o: 1, s: 1, a: 3, t: 3, p: 1, l: 1 })
})

test('El resultado de la prueba es:', () => {
    expect(charCounter("Aprendiendo a usar metodos de Arrays")).toStrictEqual( { a: 5,
        p: 1,
        r: 4,
        e: 4,
        n: 2,
        d: 4,
        i: 1,
        o: 3,
        u: 1,
        s: 3,
        m: 1,
        t: 1,
        y: 1 })
})