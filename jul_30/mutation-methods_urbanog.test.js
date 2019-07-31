const {
    sort,
    decrypt,
    generateSeed,
    encrypt
} = require('./mutation-methods_urbanog');
let originalArray = [6, 4, 21, 2];
let wordsArr = ["urbano", "jose", "Alex"]
let abc = ["a", "e", "i", "o", "u", "g"];
let word="adios";
beforeEach(() => {
    originalArray;
    wordsArr;
    abc;
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
    sort(originalArray, (a, b) => a - b);
    expect(originalArray).toEqual(control.sort());
});

test("order the array whit strings", () => {
    let control = wordsArr.concat();
    sort(wordsArr);
    expect(wordsArr).toEqual(control.sort());
});
test("order the array whit params in the other side", () => {
    let control = originalArray.concat();
    sort(originalArray, (a, b) => b - a);
    expect(originalArray).toEqual(control.sort());
});

test("Test for seed Generator", function () {
    let result = generateSeed(abc);
    expect(generateSeed(abc)).toBe(result);
});
test("Test for encrypting a word", function () {
    let sed= generateSeed(abc)
    let result = encrypt(abc,sed,word);
    expect(encrypt(abc,sed,word)).toBe(result);
});
test("Test for decrypt", function () {
    let sed= generateSeed(abc);
    let encryp = encrypt(abc,sed,word);
    let result = decrypt(abc,sed,encryp)
    expect(decrypt(abc,sed,encryp)).toBe(word);
})
