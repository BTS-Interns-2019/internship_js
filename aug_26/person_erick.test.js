const Person = require ( './person_erick.js' )

let person1 = new Person()

describe('Passing no values on contructor', () => {
  test('No name, No lastname', () => {
    expect(person1.name).toBe(undefined)
  });
  test('No name, No lastname', () => {
    expect(person1.lastname).toBe(undefined)
  });
});
describe('no initial values, but setting a full name', () => {
  let person2 = new Person()
  person2.fullname = 'Kokoriko Okirokok'
  test('undefined to the new name', () => {
    expect(person2.name).toBe('Kokoriko')
  });
  test('Undefined to new lastname', () => {
    expect(person2.lastname).toBe('Okirokok')
  });
  let person3 = new Person('Gallo', 'Loco')
  person3.fullname = 'Harry Po Po Potter'
  test('Big last name', () => {
    expect(person3.lastname).toBe('Po Po Potter')
  });
});
