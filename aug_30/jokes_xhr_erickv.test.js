const XMLHttpRequest = require( 'xmlhttprequest').XMLHttpRequest;
const {
  giveMeAJoke,
  saySetUp,
  sayPunchLine
} = require( './jokes_xhr_erickv.js');

const apiUrl = 'https://sv443.net/jokeapi/category';
const category = ['programming', 'miscellaneous', 'dark','any'];

test('Getting full joke object', () => {

  let joke = giveMeAJoke(apiUrl,category[0])
  joke.then( () => {
    expect(giveMeAJoke(apiUrl,category[0])).toMatch(joke)
  });
});

test('Failing request, bad apiUrl', () => {
  giveMeAJoke('https//sv443netjokeapicategory').catch( (err) => {

    expect(JSON.stringify(err)).toMatch({})
  });
});

describe('Setup and Punchline', () => {
  test('Setup', () => {
    giveMeAJoke(apiUrl, category[1]).then( (response) => {
      let setup = saySetUp(response);
  
      expect(saySetUp(response)).toBe(setup)
    });
  });
  test('Delivery', () => {
    giveMeAJoke(apiUrl, category[2]).then( (response) => {
      let delivery = sayPunchLine(response);

      expect(sayPunchLine(response)).toBe(delivery)
    });
  });
});
