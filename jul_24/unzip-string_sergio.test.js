
const unzipString = require('./unzip-string_sergio');


test('no creaste la funcion o fue nombreada diferente', function (){
    let string = unzipString('letras14numeros4')
   expect(typeof string).toBe('string');  
})


test('se spera sergio', function (){
      
     var arg = '1s1e1r1g1i1o';

   expect(unzipString(arg)).toBe('sergio');  
})

test('solo strings no number', function (){
      
   var arg = 77;

 expect(unzipString(arg)).toBe(false);  
})

test('esta vacio', function (){
   var arg = '8a';

 expect(unzipString(arg)).toBe('aaaaaaaa');  
})


