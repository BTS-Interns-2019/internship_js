const {default: xhrMock} = require('xhr-mock');
const { giveMeAJoke } = require('./jokes_braulior');

// console.log(mock);

describe('get jokes', () => {
  // replace the real XHR object with the mock XHR object before each test
  beforeEach(() => xhrMock.setup());

  // put the real XHR object back and clear the mocks after each test
  afterEach(() => xhrMock.teardown());

  test('gets a joke with', () => {
    const api = {
      url: '/jokeapi/category/miscellaneous',
      body: {
        "category": "Miscellaneous",
        "type": "twopart",
        "setup": "I WRITE MY JOKES IN CAPITALS.",
        "delivery": "THIS ONE WAS WRITTEN IN PARIS.",
        "id": 82
      }
    };

    xhrMock.get(api.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.body));
    });


    expect.assertions(2)
    return giveMeAJoke(api.url)
      .then(joke => {
        expect(joke.saySetup()).toBe(api.body.setup);
        expect(joke.sayPunchLine()).toBe(api.body.delivery);
      });
  });

  test('rejects with a malformed joke', () => {
    const api = {
      url: '/jokeapi/category/miscellaneous',
      body: {
        "category": "Miscellaneous",
        "type": "twopart",
        "line": "I WRITE MY JOKES IN CAPITALS. THIS ONE WAS WRITTEN IN PARIS.",
        "id": 82
      }
    };

    xhrMock.get(api.url, (req, res) => {
      return res
        .status(200)
        .body(JSON.stringify(api.body));
    });


    expect.assertions(1)
    return giveMeAJoke(api.url)
      .catch(error => {
        expect(error).toEqual(new Error(`No jokes at url: ${api.url}`));
      });
  });

  test('rejects with a non-working url', () => {
    const api = {
      url: '/thisDoesntWork',
    };

    xhrMock.get(api.url, (req, res) => {
      return res
        .status(404)
        .body('');
    });


    expect.assertions(1)
    return giveMeAJoke(api.url)
      .catch(error => {
        expect(error).toEqual(new Error(`No jokes at url: ${api.url}`));
      });
  });

});
