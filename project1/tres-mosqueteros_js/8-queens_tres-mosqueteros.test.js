const queenProblem = require("./8-queens_tres-mosqueteros.js");
test('array', () => {
    let result = queenProblem(4, [0,1])
    expect(Array.isArray(result)).toBe(true);
})
test('array length of 4', () => {
    let result = queenProblem(4, [0,1])
    expect(result.length).toBe(4);
})
test('the array\'s length in the resulting array must be 4',()=>{
    let result = queenProblem(4, [0,1])
    expect(result[0].length).toBe(4);
    expect(result[1].length).toBe(4);
    expect(result[2].length).toBe(4);
    expect(result[3].length).toBe(4);
})

test('array length of 20', () => {
    let result = queenProblem(20, [0,1])
    expect(result.length).toBe(20);
})
test('size of mesh 4, x 0, y 1', function(){
    let result = queenProblem(4, [0,1]);
    expect(result[0]).toEqual([0,  1,  0,  0]);
    expect(result[1]).toEqual([0,  0,  0,  1]);
    expect(result[2]).toEqual([1,  0,  0,  0]);
    expect(result[3]).toEqual([0,  0,  1,  0]);
})
test('size of mesh 4, x 0, y 0', function(){
    let result = queenProblem(4, [0,0]);
    expect(result[0]).toEqual([0,  0,  0,  0]);
    expect(result[1]).toEqual([0,  0,  0,  0]);
    expect(result[2]).toEqual([0,  0,  0,  0]);
    expect(result[3]).toEqual([0,  0,  0,  0]);
})
test('size of mesh 4, without cordinates', function(){
    let result = queenProblem(4);
    expect(result[0]).toEqual([0,  1,  0,  0]);
    expect(result[1]).toEqual([0,  0,  0,  1]);
    expect(result[2]).toEqual([1,  0,  0,  0]);
    expect(result[3]).toEqual([0,  0,  1,  0]);
})
test('array length of 4, without cordinates', () => {
    let result = queenProblem(4)
    expect(result.length).toBe(4);
})
test('size of mesh 4, cordinates out of mesh', function(){
    let result = queenProblem(4, [0,10]);
    expect(result).toBe("Coordenadas fuera del talbero");
})
test('size of mesh 4, cordinates out of mesh', function(){
    let result = queenProblem(4, [0,4]);
    expect(result).toBe("Coordenadas fuera del talbero");

})
    
