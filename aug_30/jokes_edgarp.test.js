const giveMeAJoke = require ('./jokes_edgarp.js');

describe('GiveMeAJoke function Testing', () => {
  test('The return is a Promise',  () => {
    expect(
      Object.getPrototypeOf(giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark')) === Promise.prototype
    ).toBe(true);
  });

  test('Joke has methods saySetup and sayPunchLine', async () => {
    const joke = await giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark');
      expect('saySetup' in joke).toBe(true);
      expect('sayPunchLine' in joke).toBe(true);
  });

  test('Joke method saySetup returns a string', async () => {
    const joke = await giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark');
    expect(typeof joke.saySetup()).toBe('string');
  });

  test('Joke method sayPunchLine returns a string', async () => {
    const joke = await giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark');
    expect(typeof joke.sayPunchLine()).toBe('string');
  });

  test('Promise throws an error if joke is not of the correct "shape"', () => {
    return expect(giveMeAJoke('https://sv443.net/jokeapi', 'dark')).rejects.toMatch(new RegExp('No jokes'));
  });
});
