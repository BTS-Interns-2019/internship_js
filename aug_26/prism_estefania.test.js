const prism = require('./prism_estefania.js');

test('prism de 1, 1, 1', function() {
  expect(prism(1, 1, 1).long).toEqual(1);
});

test('prism de 1, 1, 1', function() {
  expect(prism(1, 1, 1).width).toEqual(1);
});

test('prism de 1, 1, 1', function() {
  expect(prism(1, 1, 1).height).toEqual(1);
});

test('prism de 1, 1, 1', function() {
  expect(prism(1, 1, 1).perimeter()).toEqual(4);
});

test('prism de 1, 1, 1', function() {
  expect(prism(1, 1, 1).area()).toEqual(1);
});

test('prism de 1, 1, 1', function() {
  expect(prism(1, 1, 1).volume()).toEqual(1);
});