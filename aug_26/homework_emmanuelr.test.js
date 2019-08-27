const Person = require('./homework_emmanuelr');

const p = new Person('Juanito', 'Uno');

test('Inicializar valores', () => {
  expect(p.name).toBe('Juanito');
  expect(p.lastName).toBe('Uno');
});

test('Cambiar nombre', () => {
  p.name = 'Hernán';
  expect(p.name).toBe('Hernán');
  expect(p.lastName).toBe('Uno');
});

test('Cambiar lastName', () => {
  p.lastName = 'Dos';
  expect(p.name).toBe('Hernán');
  expect(p.lastName).toBe('Dos');
});

test('Cambiar fullName', () => {
  p.fullName = 'Este es el nuevo nombre'
  expect(p.name).toBe('Este');
  expect(p.lastName).toBe('es el nuevo nombre');
});

test('Cambiar fullName sin appellidos', () => {
  p.fullName = 'Dos';
  expect(p.name).toBe('Dos');
  expect(p.lastName).toBe('');
});
