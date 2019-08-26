const Person = require('./person_hector');

const person = new Person('Doroteo', 'Arango');

test('Name and last name are the ones passed to the prototype', () => {
  expect(person.name).toBe('Doroteo');
  expect(person.lastName).toBe('Arango');
});

test('Name was modified when altering the full name', () => {
  person.fullName = 'Porfirio';
  expect(person.name).toBe('Porfirio');
});

test('Full name is modified when modifying the last name', () => {
  person.lastName = 'Díaz';
  expect(person.fullName).toBe('Porfirio Díaz');
});
