const sort = require('./mutation-methods_hector');

let originalArray;
beforeEach(() => originalArray = [6, 4, 21, 2]);

test('Returns an array', () => {
  let result = sort(originalArray);
  expect(Array.isArray(result)).toBe(true);
});
test('Same length as original array', () => {
  let result = sort(originalArray);
  expect(result.length).toBe(originalArray.length);
});
test('Returns the same array', () => {
  let result = sort(originalArray);
  expect(result).toBe(originalArray);
});
test('Order array without params', () => {
  let control = Array.from(originalArray);
  sort(originalArray);
  expect(originalArray).toEqual(control.sort());
});
test('Order array with params', () => {
  let control = Array.from(originalArray);
  sort(originalArray, (a, b) => a - b);
  expect(originalArray).toEqual(control.sort((a, b) => a - b));
});
test('Order array with params backwards', () => {
  let control = Array.from(originalArray);
  sort(originalArray, (a, b) => b - a);
  expect(originalArray).toEqual(control.sort((a, b) => b - a));
});
test('Order array with letters and numbers in it', () => {
  let newArray = ['a', 5, 't', 8];
  let control = Array.from(newArray);
  sort(newArray);
  expect(newArray).toEqual(control.sort());
});