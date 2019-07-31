const {sort,generateSeed,encrypt,descrypt} = require('./mutation_methods_luisg.js')

let originalArray

beforeEach(()=>{
    originalArray = [6,4,21,2]
})

test('return an array',()=>{
    let result = sort(originalArray);
    expect(Array.isArray(result)).toBe(true)
})

test('return an array of the same length',()=>{
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length)
})

test('return the same array',()=>{
    let result = sort(originalArray);
    expect(result).toBe(originalArray)
})

test('order the array without params',()=>{
    let control = originalArray.concat();
    sort(originalArray)
    expect(originalArray).toEqual(control.sort())
})

test('order the array with params',()=>{
    let control = originalArray.concat();
    sort(originalArray,(a,b)=>a-b)
    expect(originalArray).toEqual(control.sort((a,b)=>a-b))
})

test('order the array without params letters',()=>{
    control=['C','D','A','B']
    expect(sort(['C','D','A','B'])).toEqual(control.sort())
})

test('order the array without params letters and numbers',()=>{
    control = ['C',1,'A','B',2]
    expect(sort(['C',1,'A','B',2])).toEqual(control.sort())
})

test('generate seed is array',()=>{
    expect(Array.isArray(generateSeed(['a','b','c','d','e','f','r','s','t','u']))).toBe(true)
})

test('encrypt',()=>{
    expect(encrypt(['a','b','c','d','e','f','r','s','t','u'],['e','b','r','c','s','f','d','a','u','t'],"free beer")).toBe("fdss bssd")
})

test('encrypt',()=>{
    expect(descrypt(['a','b','c','d','e','f','r','s','t','u'],['e','b','r','c','s','f','d','a','u','t'],"fdss bssd")).toBe("free beer")
})
