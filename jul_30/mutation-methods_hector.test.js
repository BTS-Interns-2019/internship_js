const { sort, generateSeed, encrypt, decrypt } = require('./mutation-methods_hector');

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

// Encrypt and decrypt test
const message = 'I have never listened to anyone who criticized my taste in space travel, sideshows or gorillas. When this occurs, I pack up my dinosaurs and leave the room.';
test(`Encryptying and decrypting message '${message}'`, () => {
  const alpha = ['r', 'e', 'w', 'a', 'c', 'u', 'p', 'm', 'q', 'i', 'o', 'b', 'l', 'n', 'k', 't', 'h', 's'];
  const seed = generateSeed(alpha);
  const encrypted = encrypt(alpha, seed, message);

  expect(decrypt(alpha, seed, encrypted)).toBe(message.toLowerCase());
});