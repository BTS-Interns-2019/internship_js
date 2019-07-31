const { sort, generateSeed, encrypt, decrypt } = require("./mutation-methods_nestor");

let prueba = [756,34,undefined,5,65,34,23,342,undefined,1,35,24,45];
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
    expect(originalArray).toStrictEqual(control.sort((a,b)=>a-b));
});
test("order the array without params", () => {
    let control = prueba.concat();
    sort(prueba)
    expect(prueba).toEqual(control.sort());
});
test("order the array with params", () => {
    let control = prueba.concat();
    sort(prueba, (a,b)=>b-a);
    expect(prueba).toStrictEqual(control.sort((a,b)=>b-a));
});

//-----------------------------------------------------------
const mensaje = 'nestor Rabbin';
test(`Encryptying and decrypting message '${mensaje}'`, () => {
  const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"];
  const seed = generateSeed(letras);
  const encrypted = encrypt(letras, seed, mensaje);

  expect(decrypt(letras, seed, encrypted)).toBe(mensaje.toLowerCase());
});

const mensaje2 = 'Hello everybody, como estan? life for the king!!!';
test(`Encryptying and decrypting message '${mensaje2}'`, () => {
  const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"];
  const seed = generateSeed(letras);
  const encrypted = encrypt(letras, seed, mensaje2);

  expect(decrypt(letras, seed, encrypted)).toBe(mensaje2.toLowerCase());
});