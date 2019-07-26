
const unzipString = require('./unzip-string_sergio')


test('no creaste la funcion o fue nombreada diferente', function (){
    let string = unzipString('letras14numeros4')
   expect(typeof string).toBe('string');  
})


test('no creaste la funcion o fue nombreada diferente', function (){
    
    try {
       let e =  unzipString('string');
       throw "esta resibiendo un numero";
    } catch (e) {
        

    }
   expect(e).toBe(false);  
})

