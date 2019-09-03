const {giveMeAJoke} = require('./jokes_urbanog');
describe('Test for asyncronus function', () => {
  test('Data is an object', () => {
    function callback(data) {
      expect(typeof data).toBe('object');
    }
    giveMeAJoke('https://sv443.net/jokeapi/category', 'dark').then(callback(this))
  });

  test('Has a mothod called sayPunch line',  () => {
    return giveMeAJoke('https://sv443.net/jokeapi/category', 'dark').then( function(data){
      expect(data.hasOwnProperty('saySetup')).toBe(true);
      expect(typeof data.saySetup()).toBe('string');
    });
  });
  test('Punch Line return delivery',  () => {
    return giveMeAJoke('https://sv443.net/jokeapi/category', 'dark').then(function (data) {
      expect(data.delivery).toBe(data.sayPunchLine());
    })
  });
  test('Is a promise', async () => {
    const data = await giveMeAJoke('https://sv443.net/jokeapi/category', 'dark');
    expect(typeof data).toBe('object');
  });
  test('Reject function', async () => {
    await expect(giveMeAJoke('http://api.icndb.com/jokes','random')).rejects.toMatch('new Error (No jokes at url: http://api.icndb.com/jokes/random')
  });
});