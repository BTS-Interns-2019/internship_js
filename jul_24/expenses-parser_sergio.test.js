const expensesParser = require('./expenses-parser_sergio.js');

test('no se puede leer el string', function (){
    let dato = 'astffdgjhfhgjdgfdfhdfdghfgfsgffghhjgffhdghfkjhgffhfjhggjfkg ';
    
   expect(expensesParser(dato)> 15).toBe(false);  
})

test('string muy corto', function (){
    let dato = ' hola';
    
   expect(expensesParser(dato)< 15).toBe(false);  
})

test('muy extenso', function (){
    let dato = '123456847577575433436876276428675645646466545645445';
    
   expect(expensesParser(dato)> 15).toBe(false);  
})