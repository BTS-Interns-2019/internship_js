const {
    forEach,
    map,
    filter,
    reduce,
    reduceRight
  } = require('./am_iterators_estefania.js');


let prueba = forEach()


function funcion(cv, index, arr) {
    return cv + 1;
}
  test('forEach', function(){
    expect(forEach(funcion, [1,2,3,4,5])).toBe(undefined);
});
   
