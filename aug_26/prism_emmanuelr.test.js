const Prism = require('./generates_prisms.js');

const p = new Prism(1, 2, 3);
const p3 = new Prism(2, 1, 1);

test('valores inicializados', () => {
  expect(p.long).toBe(1);
  expect(p.height).toBe(2);
  expect(p.width).toBe(3);
  expect(p3.long).toBe(2);
  expect(p3.height).toBe(1);
  expect(p3.width).toBe(1);
});

test('test de area', () => {
  expect(p.area()).toBe(3);
  expect(p3.area()).toBe(2);
});

test('test de perimetro', () => {
  expect(p.perimeter()).toBe(8);
  expect(p3.perimeter()).toBe(6);
});

test('test de volumen', () => {
  expect(p.volume()).toBe(6);
  expect(p3.volume()).toBe(2);
});
