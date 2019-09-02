const XMLHttpRequest = require('../node_modules/xmlhttprequest').XMLHttpRequest;

class Joke {
  constructor(setup, delivery) {
    this.setup = setup;
    this.delivery = delivery;
  }

  saySetup() {
    return this.setup;
  }

  sayPunchLine() {
    return this.delivery;
  }
}

function createJoke(httpResponse) {
  const resObj = JSON.parse(httpResponse);
  const nJoke = new Joke(resObj.setup, resObj.delivery);
  return nJoke;
}

function requestCB(method, url, data, onSuccess, onError) {
  const http = new XMLHttpRequest();

  http.open(method, url);
  http.send(JSON.stringify(data));
  http.onload = () => {
    if (http.status >= 400) {
      return onError(new Error(`No jokes at url: ${url}`));
    }
    onSuccess(createJoke(http.responseText));
  };
  http.onerror = (e) => {
    onError(http, e);
  };
  return http;
}

function request(method, url, data) {
  return new Promise((resolve, reject) => {
    requestCB(method, url, data, resolve, reject);
  });
}

function giveMeAJoke(url, cathegory) {
  return request('GET', `${url + cathegory}?type=twopart`);
}

giveMeAJoke('https://sv443.net/jokeapi/category/', 'miscellaneous').then((joke) => {
  console.log(joke.saySetup());
  console.log(joke.sayPunchLine());
}).catch((err) => {
  console.error(err);
});

module.exports = giveMeAJoke;
