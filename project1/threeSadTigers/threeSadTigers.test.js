const queenProblem = require("./threeSadTigers.js");



test('Regresa un arreglo', () => {
    let result = queenProblem(4, [0,1])
    expect(Array.isArray(result)).toBe(true);
})

test('4 Reynas ', () => {
    let result = queenProblem(4, [0,1])
    expect(result.length).toBe(4);
})

test('Las coordenadas no se encuentran en la solucion', () => {
    let result = queenProblem(4, [0,0])
    expect(result).toStrictEqual([ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ] ]);
})

test('8 Reynas ', () => {
    let result = queenProblem(8, [0,3])
    expect(result.length).toBe(8);
})
