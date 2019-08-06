const queenProblem = require('./Las_reynas.js')

test('validando si es un array:', () => {
    let result = queenProblem(8, [0, 1])
    expect(Array.isArray(result).toBe(true))
})

test('Crear una matriz de parametros correctos', () => {
    let result = queenProblem(6, [0, 1])
    expect(result.length).toBe(6)
})

test('El tamaño de la matriz es de 8, x0, y0', () => {
    let result = queenProblem(8, [0, 0]);
    expect(result[0]).toEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(result[1]).toEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(result[2]).toEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(result[3]).toEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(result[4]).toEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(result[5]).toEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(result[6]).toEqual([0, 0, 0, 0, 0, 0, 0]);
    expect(result[7]).toEqual([0, 0, 0, 0, 0, 0, 0]);

})

test('El array es un objeto:', () => {
    expect(typeof queenProblem(4, [0, 1])), toBe('string')
})
