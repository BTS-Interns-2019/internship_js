const person = require ( './person_erick' )

describe('Passing no values on contructor', () => {
  test('No name, No lastname', () => {
    expect(cosa.name).toBe(undefined)
  });
  test('No name, No lastname', () => {
    expect(cosa.lastname).toBe(undefined)
  });
});
describe('no initial values, but setting a full name', () => {
  cosa.fullname = 'Kokoriko Okirokok'
  test('undefined to the new name', () => {
    expect(cosa.name).toBe('Kokoriko')
  });
  test('Undefined to new lastname', () => {
    expect(cosa.lastname).toBe('Okirokok')
  });
});
