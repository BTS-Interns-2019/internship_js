const Person = require('./person_david.js');

describe('persona', () =>{
  const persona = new Person('David', 'Silva')

  test('get fullName', () => {
      expect(persona.fullName).toEqual('David Silva');
  });

  test('set lastName', () => {
    persona.lastName = 'Cruz';
    expect(persona.fullName).toEqual('David Cruz');
  });

  test('set fullName', () => {
      persona.fullName = 'Martin Silva';
      expect(persona.fullName).toEqual('Martin Silva');
  });

});