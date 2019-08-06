const queenProblem = require('./Las_reynas.js')

test('validando si es un array:',()=>{
    let result = queenProblem(8,[0,1])
    expect(Array.isArray(result).toBe(true))
})

test('')
