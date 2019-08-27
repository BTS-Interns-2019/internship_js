const person = require ( './person_erick.js' )

let person1 = new person()

describe('Passing no values on contructor', () => {
  test('No name, No lastname', () => {
    expect(person1.name).toBe(undefined)
  });
  test('No name, No lastname', () => {
    expect(person1.lastname).toBe(undefined)
  });
});
describe('no initial values, but setting a full name', () => {
  let person2 = new person()
  person2.fullname = 'Kokoriko Okirokok'
  test('undefined to the new name', () => {
    expect(person2.name).toBe('Kokoriko')
  });
  test('Undefined to new lastname', () => {
    expect(person2.lastname).toBe('Okirokok')
  });
});
