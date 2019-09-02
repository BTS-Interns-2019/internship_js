const giveMeAJoke = require('./jokes_estefaniac');

const apiUrl = 'https://sv443.net/jokeapi/category/';
const badApiUrl = 'https://sv443.net/jokeapiss/category/'
const category = 'miscellaneous';

describe('Jokes Testing', () => {
  test('Data is a promise', () => {
    expect(
      Object.getPrototypeOf(giveMeAJoke(apiUrl, category)) === Promise.prototype
    ).toBe(true);
  });
  test('the data', async () => {
    await expect(giveMeAJoke(apiUrl, category)).resolves.toBe();
  });
  
  test('fails with an error', async () => {
    await expect(giveMeAJoke(badApiUrl, category)).rejects.toThrow('error');
  });
});