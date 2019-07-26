const flattenArray = require('./flatten-array_hector');

const tests = [
  [[], []],
  [[1, 2, ['a', 'b'], 3, 4], [1, 2, 'a', 'b', 3, 4]],
  [[1, 2, ['a', ['b', 'x']], 3, 4], [1, 2, 'a', 'b', 'x', 3, 4]],
  [[1, 2, ['hola', ['b', 'x']], 3, 4], [1, 2, 'hola', 'b', 'x', 3, 4]]
];

test('Flatten arrays', () => {
  for (let index = 0; index < tests.length; index++) {
    const [input, output] = tests[index];
    expect(flattenArray(input)).toEqual(output);
  }
});