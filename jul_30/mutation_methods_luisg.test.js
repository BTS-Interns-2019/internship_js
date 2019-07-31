const sort = require('./mutation_methods_luisg.js')

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
    expect(originalArray).toEqual(control.sort())
})

//dos mas