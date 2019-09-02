const giveMeAJoke = require('./jokes_emmanuelr.js');

const url = 'https://sv443.net/jokeapi';
const cat = 'programming';
const noop = {};

test('Joke from a category', () => {
  return giveMeAJoke(url, cat).then((joke) => {
    expect(joke.category).toBe('Programming');
  }, noop);
});
test('function saySetup', () => {
  return giveMeAJoke(url, cat).then((joke) => {
    expect(joke.saySetup()).toBe(joke.setup);
  }, noop);
});
test('function sayPunchLine', () => {
  return giveMeAJoke(url, cat).then((joke) => {
    expect(joke.sayPunchLine()).toBe(joke.delivery);
  }, noop);
});

const cat2 = 'programmingggg';
test('Mistake API', () => {
  return giveMeAJoke(url, cat2).catch((error) => {
    expect(error.message).toBe(`No jokes at url: https://sv443.net/jokeapi/category/programmingggg?type=twopart`);
  }, noop);
});
