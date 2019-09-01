const giveMeAJoke = require('./jokes_hectors');

const apiUrl = 'https://sv443.net/jokeapi/category/';
const wrongApiUrl = 'https://geek-jokes.sameerkumar.website/api';
const category = 'miscellaneous';

describe('Jokes Testing', () => {
  test('The return data is a Promise', () => {
    expect(
      Object.getPrototypeOf(giveMeAJoke(apiUrl, category)) === Promise.prototype
    ).toBe(true);
  });

  test('Joke has methods saySetup and sayPunchLine', () => {
    return giveMeAJoke(apiUrl, category).then(joke => {
      expect('saySetup' in joke).toBe(true);
      expect('sayPunchLine' in joke).toBe(true);
    });
  });

  test('Joke method saySetup returns a string as setup', () => {
    return giveMeAJoke(apiUrl, category).then(joke => {
      expect(typeof joke.saySetup()).toBe('string');
    });
  });

  test('Joke method sayPunchLine returns a string as punch line or delivery', () => {
    return giveMeAJoke(apiUrl, category).then(joke => {
      expect(typeof joke.sayPunchLine()).toBe('string');
    });
  });

  test('Promise throws an error if joke is not of the correct "shape"', () => {
    return expect(giveMeAJoke(wrongApiUrl, category)).rejects.toMatch(new RegExp('No jokes'));
  });
});
