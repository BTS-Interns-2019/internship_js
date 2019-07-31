const {sort}= require('./mutation-methods_urbanog');
    let originalArray= [6, 4, 21, 2];
beforeEach(() => {
    originalArray;
});
test("Return an array", () => {
    let result = sort(originalArray);
    expect(Array.isArray(result)).toBe(true);
});
test("returns an array of the same lenght", () => {
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length);
});
test("order the array without params", () => {
    let control = originalArray.concat();
    sort(originalArray)
    expect(originalArray).toEqual(control.sort());
});
test("order the array with params", () => {
    let control = originalArray.concat();
    sort(originalArray, (a,b)=>a-b);
    expect(originalArray).toEqual(control.sort());
});