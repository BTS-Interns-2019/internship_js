const {sort, generateSeed, encrypt, decrypt} = require('./mutation-methods_marlont');

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

//------------------------The Secret Communication--------------//

var baseAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var seed = generateSeed(baseAlphabet);

test('Create a seed: seed and baseAlphabet have the same length', function(){
    expect(baseAlphabet.length).toEqual(seed.length);
})

test('Create a seed: seed can be different in every case', function(){
    var seed2 = generateSeed(baseAlphabet);
    var bool = seed2 === seed;
    expect(bool).toEqual(false);
})

test('Encrypt a message: message encrypt is different to the original message', function(){
    var message = "hola mundo";
    var encrypted = encrypt(baseAlphabet, seed, message) 
    bool = encrypted === message;
    expect(bool).toEqual(false);
})

test('Encrypt a message: message encrypt and original message have the same length', function(){
    var message = "hola mundo";
    var encrypted = encrypt(baseAlphabet, seed, message) 
    expect(message.length).toEqual(encrypted.length);
})

test('Encrypt a message: characters doesnt have match with baseAlphabet', function(){
    var message = "hola mundo!1234&&hello World";
    var encrypted = encrypt(baseAlphabet, seed, message) 
    bool = encrypted.includes('!1234&&');
    expect(bool).toEqual(true);
})

test('Decrypt a message: decrypted message and the original message are equal', function(){
    var message = "hola mundo!";
    var encrypted = encrypt(baseAlphabet, seed, message);
    var decrypted = decrypt(baseAlphabet, seed, encrypted); 
    bool = decrypted === message;
    expect(bool).toEqual(true);
})



