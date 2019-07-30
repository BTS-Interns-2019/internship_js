
const sort = require('/mutation-mehods_edgar.js');

let originalArray = [6,4,21,2];

beforeEach(()=>{
    originalArray[6,4,21,2]
})

test ('returns an array', () => {
    let result = sort(originalArray);
    expect(Array.isArray(result)).toBe(true);
})

test ('returns an arra of the same length', () => {
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length);
})

test ('returns the same array', () => {
    let result = sort(originalArray);
    expect(result).toBe(originalArray);
})

test ('order the arrays without params', () => {
    let control = originalArray.concat();
    sort(originalArray), (a,b)=> a-b;
    expect(originalArray).toEqual(control.sort());
})



