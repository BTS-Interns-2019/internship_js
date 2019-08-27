const Person = require('./person_sergio.js');

test('Cabmiando solo name', () => {
    var p = new Person('Diego','Rivera');
    p.name = "Sergio";
    expect(p.name).toBe('Sergio');
  });

  test('Cabiando full name', () => {
    var p = new Person('Pancho','Cachondo');
    p.fullName = "James Bond";
    expect(p.fullName).toBe('James Bond');
  });

  test('Cabiando full name', () => {
    var p = new Person('Pancho','Cachondo');
    expect(p.lastName).toBe('Cachondo');
  })