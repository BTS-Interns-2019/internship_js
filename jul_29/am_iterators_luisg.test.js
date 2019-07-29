const forEach = require('./am_iterators_luisg.js').forEach;
const map = require('./am_iterators_luisg.js').map;
const filter = require('./am_iterators_luisg.js').filter;
const reduce = require('./am_iterators_luisg.js').reduce;
const reduceRight = require('./am_iterators_luisg.js').reduceRight;

let arr=[1,2,3,4,5]
function imprimir(x){
    console.log(x)
}
function longerThanSix(v){
 return v>6
}
function multiplicar(v1,v2){
    return v1*v2
}

test('forEachPrueba 1 imprime valor [1-5] regresa undefined', function () {
    expect(forEach(arr,imprimir)).toBe(undefined);
})
test('forEachPrueba 2 imprime valor +1 regresa undefined', function () {
    expect(forEach(arr,function(x){console.log(x+1)})).toBe(undefined);
})
test('forEachPrueba 3 imprime valor -1 regresa undefined', function () {
    expect(forEach(arr,function(x){console.log(x+1)})).toBe(undefined);
})

test('map Prueba 1 imprime [1-5] regresa [undefined,undefined,undefined,undefined,undefined]', function () {
    expect(map(arr,imprimir)).toStrictEqual([undefined,undefined,undefined,undefined,undefined]);
})
test('map Prueba 2 mayor a 6 [1-5] regresa [false,false,false,false,false]', function () {
    expect(map(arr,longerThanSix)).toStrictEqual([false,false,false,false,false]);
})
test('map Prueba 3 mayor a 6 [3,5,8,3,10] regresa [false,false,true,false,true]', function () {
    expect(map([3,5,8,3,10],longerThanSix)).toStrictEqual([false,false,true,false,true]);
})

test('filter Prueba 1 mayor a 6 [1-5] regresa []', function () {
    expect(filter(arr,longerThanSix)).toStrictEqual([]);
})
test('filter Prueba 2 mayor a 6 [3,5,8,3,10] regresa [8,10]', function () {
    expect(filter([3,5,8,3,10],longerThanSix)).toStrictEqual([8,10]);
})
test('filter Prueba 3 mayor a 6 [6,7,8,9,10] regresa [7,8,9,10]', function () {
    expect(filter([6,7,8,9,10],longerThanSix)).toStrictEqual([7,8,9,10]);
})

test('reduce Prueba 1 mutiplicar [1-5],1 regresa 120', function () {
    expect(reduce(arr,multiplicar,1)).toBe(120);
})
test('reduce Prueba 2 sumar [1-5],0 regresa 15', function () {
    expect(reduce(arr,function(x1,x2){return x1+x2},0)).toBe(15);
})
test('reduce Prueba 3 restar [1-5],0 regresa -15', function () {
    expect(reduce(arr,function(x1,x2){return -x1+x2},0)).toBe(-15);
})

test('reduceRight Prueba 1 multiplicar [1-5] regresa 120', function () {
    expect(reduceRight(arr,multiplicar,1)).toBe(120);
})
test('reduceRight Prueba 2 dividir [5,3,2,2,2],120 regresa 1', function () {
    expect(reduceRight(arr,function(x1,x2){return x2/x1},120)).toBe(1);
})
test('reduceRight Prueba 3 concatenar [" tina"," la"," lava","Anita"],"" regresa "Anita lava la tina"', function () {
    expect(reduceRight([" tina"," la"," lava","Anita"],function(x1,x2){return x2+x1},"")).toBe("Anita lava la tina");
})
