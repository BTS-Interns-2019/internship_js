const Prism = require('./prism');

const p = new Prism(1, 1, 1);

test('Object gets returned from Prism Prototype', () => {
  expect(typeof p).toBe('object');
});

test('Length, width, and height is defined in the new instance of Prism Prototype', () => {
  expect(typeof p.length).toBe('number');
  expect(typeof p.width).toBe('number');
  expect(typeof p.height).toBe('number');
});

test('Perimeter of the prism is 4 with length, width and height as 1', () => {
  expect(p.perimeter()).toBe(4);
});

test('Area of the prism is 1 with length, width and height as 1', () => {
  expect(p.area()).toBe(1);
});

test('Volume of the prism is 1 with length, width and height as 1', () => {
  expect(p.volume()).toBe(1);
});
