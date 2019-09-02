const giveMeAJoke = require ('./giveMeAJoke_edgarp.js');

describe('GiveMeAJoke function Testing', async () => {
  test('The return is a Promise', async () => {
    expect(
      Object.getPrototypeOf(giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark')) === Promise.prototype
    ).toBe(true);
  });

  test('Joke has methods saySetup and sayPunchLine', async () => {
    return giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark').then(joke => {
      expect('saySetup' in joke).toBe(true);
      expect('sayPunchLine' in joke).toBe(true);
    });
  });

  test('Joke method saySetup returns a string', async () => {
    return giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark').then(joke => {
    expect(typeof joke.saySetup()).toBe('string');
    });
  });

  test('Joke method sayPunchLine returns a string', async () => {
    return giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark').then(joke => {
    expect(typeof joke.sayPunchLine()).toBe('string');
    });
  });

  test('Promise throws an error if joke is not of the correct "shape"', async () => {
    return expect(giveMeAJoke('https://sv443.net/jokeapi/category/', 'dark')).rejects.toMatch(new RegExp('No jokes'));
  });
});
