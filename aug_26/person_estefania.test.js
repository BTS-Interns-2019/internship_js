const Person = require('./person_estefania.js');
 
describe('fullName one', () =>{
    const personOne= new Person('George', 'Orwell')
    test('Get fullName', () => {
        expect(personOne.fullName).toEqual('George Orwell');
    });
    test('Set fullName', () => {
        personOne.fullName= 'Julio Cortázar';
        expect(personOne.fullName).toEqual('Julio Cortázar');
    });
    test('Set lastName', () => {
        personOne.lastName= 'Verne';
        expect(personOne.fullName).toEqual('Julio Verne');
    });
});

describe('fullName two', () =>{
    const personTwo= new Person('Wes', 'Anderson')
    test('Get fullName', () => {
        expect(personTwo.fullName).toEqual('Wes Anderson');
    });
    test('Set name', () => {
        personTwo.name= 'Wales';
        expect(personTwo.fullName).toEqual('Wales Anderson');
    });
    test('string output', () => {
        expect(typeof personTwo.fullName).toEqual('string');
    });
});