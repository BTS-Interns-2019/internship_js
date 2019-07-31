let arry = ["Sergio","Rabanito","Urbanus","Pere","Powers","Marlon"];


const charCounter = require('./am_iterators_homework_sergio');
const {forEach,map,filter,reduce} = require('./am_iterators_sergio');
// const map = require('./am_iterators_sergio');
// const filter = require('./am_iterators_sergio');
// const reduce = require('./am_iterators_sergio');

test('cuenta cuantas veces se repite la letra', () => {
    expect(charCounter('abracadabra')).toStrictEqual({a: 5, b: 2, r: 2, c: 1, d: 1});
  })

test('cuenta cuantas veces se repite la letra MAYUSCULAS', () => {
    expect(charCounter('ABRACADABRA')).toStrictEqual({a: 5, b: 2, r: 2, c: 1, d: 1});
})
test('cuenta cuantas veces se repite la letra ESPACIOS', () => {
    expect(charCounter('AB RAC ADabRA')).toStrictEqual({a: 5, b: 2, r: 2, c: 1, d: 1});
})

test('map debe devolver un array', () => {
    expect(map(function(uno) {
        return uno.toLowerCase();
    },arry)).toStrictEqual(["sergio", "rabanito", "urbanus", "pere", "powers", "marlon"]);
})



  