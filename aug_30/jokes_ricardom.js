const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function giveMeAJoke(apiUrl, category) {
  if (category === '' || category === ' ') {
    category = 'any'
  }
  return new Promise((resolve, reject) => {
    request('GET', apiUrl +'/'+ category, resolve, reject);
  });
}
giveMeAJoke('https://sv443.net/jokeapi/category/miscellaneous?type=twopart', 'random')
  .then(function (value) {
      console.log(value.hasOwnProperty('saySetup'));
      console.log(value.saySetup())
      console.log(value.sayPunchLine())
    }
  ).catch(function (value) {
  console.log(value);
});

function request(method, url, callback, error, body) {
  if (typeof method !== 'string') {
    return 'Method parameter, must be a String';
  }
  let m = method.toUpperCase();
  const postBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open(m, url, true);
  request.onload = function () {
    if (this.status >= 200 && this.status <= 299) {
      console.log((this.status))
      if (this.responseText.includes('twopart')) {
        const result = JSON.parse(this.responseText);
        result.saySetup = function () {
          return this.setup;
        }
        result.sayPunchLine = function () {
          return this.delivery;
        }
        callback(result);
      } else {
        new Error(`No jokes at url: ${url}`);
      }
    } else {
      new Error(`No jokes at url: ${url}`);
    
  };
  request.send(postBody);
}
}

module.exports = {giveMeAJoke};