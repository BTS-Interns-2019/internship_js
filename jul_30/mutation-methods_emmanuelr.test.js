const {
    sort,
    generateSeed,
    encrypt,
    decrypt 
}= require('./mutation-methods_emmanuelr.js');

let originalArray;
beforeEach(()=>originalArray=[6, 4, 21, 2]);

test('return an array',()=>{
    let result = sort(originalArray.slice(0));
    expect(Array.isArray(result)).toEqual(true);
})
test('returns an array of the same length',()=>{
    let result = sort(originalArray.slice(0));
    expect(result.length).toEqual(originalArray.length);
})
test('return the same array',()=>{
    let result = sort(originalArray);
    expect(result).toBe(originalArray);
})
test('order the array whitout params',()=>{
    let result = sort(originalArray.slice(0));
    expect(result).toEqual(originalArray.sort());
})
test('order the array whit params',()=>{
    result = sort(originalArray.slice(0), (a,b) => a-b); 
    expect(result).toEqual(originalArray.sort((a,b) => a-b));
})
test('order strings',()=>{
    stringArray=['a','x','9','r','22','g'];
    let result = sort(stringArray.slice(0));
    expect(result).toEqual(stringArray.sort());
})
test('order from highest to lowest',()=>{
    result = sort(originalArray.slice(0), (a,b) => b-a); 
    expect(result).toEqual(originalArray.sort((a,b) => b-a));
})

//communicacion encriptada
let alphabet="abcdefghijklmnopqrstuvwxyz".split('');

test('prueba para generar seed',()=>{
    expect(generateSeed(alphabet).length).toBe(alphabet.length);
    expect(generateSeed(alphabet).sort()).toEqual(alphabet.sort());
})

alphabet="aeiou".split("");
let mensaje="¡¡¡¡¡Este es el mensaje de prueba #1 !!!!!";
let encriptado=encrypt(alphabet, generateSeed(alphabet), mensaje);
test('encriptar mensaje',()=>{
    expect(encriptado.length).toBe(mensaje.length);
})

test('desencriptar mensaje',()=>{
    expect(decrypt(alphabet, generateSeed(alphabet), encriptado)).toBe(mensaje);
})
