const arrayGenerator = require('./arrayception');
// nestor rabbin lira

describe('Arrayception', () => {

  test('Last number is n', ()=> {
    const result = arrayGenerator(8);
    expect(result[result.length-1]).toBe('8');
  });

  test('First element is an array', ()=> {
    const result = arrayGenerator(8);
    expect(Array.isArray(result[0])).toBe(true);
  });

  test('The penultimate element of the 15th inner array is number-1', ()=> {
    const result = arrayGenerator(79);
    const array15th = result[0][0][0][0][0][0][0][0][0][0][0][0][0][0][0];
<<<<<<< HEAD
    expect(array15th[array15th.length-2]).toBe("78");
  });
  test('input 100', ()=> {
    const result = arrayGenerator(100);
    expect(result[result.length-1]).toBe("100");
  });
  test('input 100 less 50 equal 50', ()=> {
    const result = arrayGenerator(100);
    expect(result[result.length-51]).toBe("50");
=======
    expect(array15th[array15th.length-2]).toBe('78');
>>>>>>> master
  });
});
