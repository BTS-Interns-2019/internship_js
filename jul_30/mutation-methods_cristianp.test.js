const {sort,generateSeed,
encrypt,decrypt} = require ("./mutation-methods_cristianp.js");

let originalArray;

//realiza esto antes de cada test
/*beforeEaCh(()=>{
    originalArray=[6,4,21,2];
})//*/

test('returns an array', () =>{
    originalArray=[6,4,21,2];
    let result = sort(originalArray);
    expect(Array.isArray(result)).toBe(true);
})

test('returns an array of the same length', () =>{
    let result = sort(originalArray);
    expect(result.length).toBe(originalArray.length);
})

test('returns return the same array', () =>{
    let result = sort(originalArray);
    expect(result).toBe(originalArray);
})

test('order the array eithout params', () =>{
    originalArray=[6,4,21,2];
    let control = originalArray.concat();
    sort(originalArray);
    expect(originalArray).toEqual(control.sort());
})

test('order the array with params', () =>{
    originalArray=[6,4,21,2];
    let control = originalArray.concat();
    sort(originalArray, (a,b)=>a-b);
    expect(originalArray).toEqual(control.sort());
})
test('abiba abajo',()=>{
    result = sort(originalArray.slice(0), (a,b) => b-a); 
    expect(result).toEqual(originalArray.sort((a,b) => b-a));
})
test('Words nd string',()=>{
    stringArray=["f","r","de","7","ñ"];
    let result = sort(stringArray.slice(0));
    expect(result).toEqual(stringArray.sort());
})

var letras="qazwsxedcrfvtgbyhnujmikolpñ".split('');

test('prueba para generar seed',()=>{
    expect(generateSeed(letras).length).toBe(letras.length);
    expect(generateSeed(letras).sort()).toEqual(letras.sort());
})

var letras="abcdefg".split('');
var msj = "hola amigos";
var secreto = encrypt(letras,generateSeed(letras),msj);
test('Mensaje encriptado',()=>{
    expect(secreto.length).toBe(msj.length);
})

test('Mensaje desencriptado',()=>{
    expect(decrypt(letras, generateSeed(letras), secreto)).toBe(msj);
})