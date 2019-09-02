const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function giveAJoke(apiUrl, category) {
  if (category === '' || category === ' ' || category === undefined) {
    category = 'any'
  }
  return new Promise((resolve, reject) => {
    request('GET', apiUrl +'/'+ category, resolve, reject);
  });
}

//https://api.chucknorris.io/jokes/random
//https://sv443.net/jokeapi/category/miscellaneous?type=twopart
///category/miscellaneous?type=twopart
giveAJoke('https://sv443.net/jokeapi/category')
  .then(function (val) {
      console.log(val.saySetup())
      console.log(val.sayPunchLine())
    }
  ).catch(function (val) {
  console.log(val);
});


function request(method, url, callback, error, body) {
  if (typeof method !== 'string') {
    return 'Method parameter, must be a String';
  }
  let meth = method.toUpperCase();
  const postBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open(meth, url, true);
  request.onload = function () {
    if (this.status >= 200 && this.status <= 299) {
      console.log((this.status))
      if (this.responseText.includes('twopart') && this.responseText.includes('setup') && this.responseText.includes('delivery') && this.responseText.includes('category') && this.responseText.includes('id')) {
        const result = JSON.parse(this.responseText);
        result.saySetup = function () {
          return this.setup;
        }
        result.sayPunchLine = function () {
          return this.delivery;
        }
        callback(result);
      } else {

        error(new Error (`No jokes at url: ${url}`));
      }

    } else {
      error(new Error (`No jokes at url: ${url}`));
    }
  };
  request.send(postBody);
}

module.exports = {giveAJoke}