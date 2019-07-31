const {
    sort,
    generateSeed,
    encrypt,
    decrypt,
}= require('./mutation_methods_estefania.js');


let originalArray;

beforeEach(() => {
    originalArray = [6, 4, 21, 2]
})

test('returns an array', () => {
    let result = sort(originalArray);
    expect(Array.isArray(result).toBe(true));   
})

test('returns an array of the same lenght', () => {
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length);   
})

test('returns the same array', () => {
    let result = sort(originalArray);
    expect(result).toBe(originalArray);   
})

test('order the array without params', () => {
    let control = originalArray.concat();
    sort(originalArray);
    expect(originalArray).toEqual(control.sort());   
})

test('order the array with params', () => {
    let control = originalArray.concat();
    sort(originalArray, (a,b) => a - b);
    expect(originalArray).toEqual(control.sort());   
})


test('generate seed',()=>{
    expect(Array.isArray(generateSeed(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"]))).toBe(true)
})

test('encrypt',()=>{
    expect(encrypt(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"],["n","o","i","m","p","q","g","b","h","k","f","j","l","e","c","d","a"],"Aquí hay demasiados pingüinos")).toBe("nquí hny semndgnsod rgpdügpod")
})

test('decrypt',()=>{
    expect(decrypt(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q"],["n","o","i","m","p","q","g","b","h","k","f","j","l","e","c","d","a"],"nquí hny semndgnsod rgpdügpod")).toBe("Aquí hay demasiados pingüinos")
})