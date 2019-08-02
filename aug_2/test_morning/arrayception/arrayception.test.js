//Emmanuel Rubio Navarro
const arrayGenerator = require('./arrayception');

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
    expect(array15th[array15th.length-2]).toBe('78');
  });
  test("From the position 1 to the end, must be strings",()=>{
    const result = arrayGenerator(79);
    const strings=result.slice(1).every(x=>typeof(x)=="string");
    expect(strings).toBe(true);
  })
  test("From the psoition 1 to the end must be the numbers from 1 to \'number\'",()=>{
    const result = arrayGenerator(200);
    const filled =result.slice(1).every((x,i)=>parseInt(x)===i+1);
    expect(filled).toBe(true);
  })
});
