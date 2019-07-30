const {
    forEach,
    map,
    filter,
    reduce,
    reduceRight
  } = require('./am_iterators_estefania.js');


  let prueba = forEach()



test('forEach', function(){
    expect(prueba(function funcion(cv, index, arr) {
        return cv + 1;
    }, [1,2,3,4,5])).toBe(undefined);
});
   
