const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const request = (method, url, dataString) => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open(method, url);
    http.send(dataString);
    http.onload = () => {
      if (http.status >= 400) {
        reject(new Error(message = `No jokes at url: ${url}`));
      }
      try {
        const joke = JSON.parse(http.responseText);
        joke.saySetup = () => joke.setup;
        joke.sayPunchLine = () => joke.delivery;
        resolve(joke);
      } catch (e) {
        reject(new Error(message = `No jokes at url: ${url}`));
      }
    };
    http.onerror = () => {
      reject(new Error(message = `No jokes at url: ${url}`));
    };
  });
};

const giveMeAJoke = (url, category) => {
  return request('GET', `${url}/category/${category}?type=twopart`);
};

module.exports = giveMeAJoke;
