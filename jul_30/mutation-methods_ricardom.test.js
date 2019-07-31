const sort = require('./mutation-methods_ricardom.js');


let originalArray;

beforeEach(() => {
    originalArray = [6,4,21,2];
})

test('returns an array : ', () => {
    let result = sort(originalArray);
    expect(Array.isArray(result)).toBe(true);
})

test('returns an array of the same length : ', () => {
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length);
})

test('returns the same array : ', () => {
    let result = sort(originalArray);
    expect(result).toBe(originalArray);
})

test('orders the array without params : ', () => {
    let control = originalArray.concat();
    sort(originalArray);
    expect(originalArray).toEqual(control.sort());
})


test('order the array with params : ',() => {
    let control = originalArray.concat();
    sort(originalArray, (a, b) => a-b);
    expect(originalArray).toEqual(control.sort())
})



// test('order the array backwards',() => {

//     expect().toBe()
// })


// test('',() => {
//     expect().toBe()
// })