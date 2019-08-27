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

 describe ('fullName', ()=>{
    const person2=new Person('Viridiana','Escobedo')
    test('fullName',() =>{
        expect(person2.fullName).toEqual('Viridiana Escobedo')
    })
    test('LastName:', ()=>{
        expect(person2.lastName).toEqual('Escobedo')
    })
 })

})