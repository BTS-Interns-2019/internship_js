const sort = require('./mutation-methods_marlont');

let originalArray;

beforeEach(() => {
    originalArray = [6,4,21,2];
})

test('returns an array', () => {
    let result = sort(originalArray);
    expect(Array.isArray(result)).toBe(true);
})

test('returns an array of the same length', () => {
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length);
})

test('returns the same array', () => {
    let result = sort(originalArray);
    expect(Array.isArray(result)).toStrictEqual(true);
})

test('order the array without params', () => {
    let control = originalArray.concat();
    sort(originalArray);
    expect(originalArray).toEqual(control.sort());
})

test('order the array with params', () => {
    let control = originalArray.concat();
    sort(originalArray, (a,b) => a - b);
    expect(originalArray).toEqual([2,4,6,21]);
})

test('No callback', function(){
    expect(sort([1,'b','a',2,'a',0])).toEqual([0,1,2,"a","a","b"]);
})

test('Callback', function(){
    expect(sort([2,5,1,3,2,6,0], function(a,b){
        return b-a;
    })).toEqual([6,5,3,2,2,1,0]);
})

