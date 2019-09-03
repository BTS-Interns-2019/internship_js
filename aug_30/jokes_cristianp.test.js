const giveMeAJoke = require('./jokes_cristianp.js');

describe('Test for asyncronus function', () => {
    test('Data is an object', () => {
    giveMeAJoke('https://sv443.net/jokeapi/category', '').then(callback(this))
      function callback(data) {
        expect(typeof data).toBe('object');
      }
    });
});