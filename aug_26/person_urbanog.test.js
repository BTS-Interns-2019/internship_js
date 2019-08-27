const person = require('./person_urbanog');

describe('Test for person function', () =>{
    const person1= new person('Jose', 'Martinez')
    test('Output must be a string', () => {
        expect(typeof person1.fullName).toEqual('string');
    });
    test('Get full name', () => {
        expect(person1.fullName).toEqual('Jose Martinez');
    });
    test('Set full name', () => {
        person1.fullName= 'Juan Lopez';
        expect(person1.fullName).toEqual('Juan Lopez');
    });
    test('set name', () => {
        person1.name = 'Pancho';
        expect(person1.fullName).toEqual('Pancho Lopez');
    });
});