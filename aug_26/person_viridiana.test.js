const Person = require ('./person_viridiana.js');



describe('fullName', ()=>{
    const person1= new Person('Angel' , 'Esponda')
 test('Enviando nombre',()=>{
        expect(person1.fullName).toEqual('Angel Esponda')
    });


test('Name', ()=>{
    person1.name='Angel';
    expect(person1.fullName).toEqual('Angel Esponda') 
 });

 test('Tipo de entrada:', ()=>{
    expect(typeof person1.fullName).toEqual('string') 
 });

})