const sort = require ("");

let originalArray;

//realiza esto antes de cada test
beforeEaxh(()=>{
    originalArray=[6,4,21,2];
})

test('returns an array', () =>{
    let result = sort(originalArray);
    expect(Array.isArray(result)).toBe(true);
})

test('returns an array of the same length', () =>{
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length);
})

test('returns return the same array', () =>{
    let result = sort(originalArray);
    expect(result).toBe(originalArray);
})

test('order the array eithout params', () =>{
    let control = originalArray.concat();
    sort(originalArray);
    expect(originalArray).toEqual(control.sort());
})

test('order the array with params', () =>{
    let control = originalArray.concat();
    sort(originalArray, (a,b)=>a-b);
    expect(originalArray).toEqual(control.sort());
})