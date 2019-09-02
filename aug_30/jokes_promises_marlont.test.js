const giveMeAJoke = require('./jokes_promises_marlont');

const url = 'https://sv443.net/jokeapi/category/';
const no_url = 'https://sv443.net/jokeapi/jshds/';
const cathegory = 'miscellaneous';

test('giveMeAJoke returns a Promise', () => {
  expect(
    Object.getPrototypeOf(giveMeAJoke(url, cathegory)) === Promise.prototype
  ).toBe(true);
});

test('Joke has the saySetup and sayPunchLine methods', () => {
  return giveMeAJoke(url, cathegory).then((joke) => {
    expect('saySetup' in joke).toBe(true);
    expect('sayPunchLine' in joke).toBe(true);
  });
});

test('saySetup and sayPunchLine are strong', () => {
  return giveMeAJoke(url, cathegory).then((joke) => {
    expect(typeof joke.saySetup()).toBe('string');
    expect(typeof joke.sayPunchLine()).toBe('string');
  });
});


test('Incorrect url throws an Error', () => {
  expect.assertions(1);
  return giveMeAJoke(no_url, cathegory).catch(e => expect(e).toMatch('error'));
});
