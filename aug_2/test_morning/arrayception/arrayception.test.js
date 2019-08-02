
const arrayGenerator = require('./arrayception');

describe('Arrayception', () => {

  test('Last number is n', ()=> {
    const result = arrayGenerator(8);
    expect(result[result.length-1]).toBe("8");
  });

  test('First element is an array', ()=> {
    const result = arrayGenerator(8);
    expect(Array.isArray(result[0])).toBe(true);
  });

  test('The penultimate element of the 15th inner array is number-1', ()=> {
    const result = arrayGenerator(79);
    const array15th = result[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0];
    expect(array15th[array15th.length-2]).toBe("78");
  });
});

test('number is integer', ()=> {
  expect(arrayGenerator("a")).toBe(false);
});

