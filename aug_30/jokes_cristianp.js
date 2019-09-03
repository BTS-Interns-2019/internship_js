const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//const url = 'https://sv443.net/jokeapi/category/miscellaneous?type=twopart';

function giveMeAJoke(apiUrl, category) {
  if (category === '' || category === ' ') {
    category = 'Miscellaneous';
  }
  return new Promise((resolve, reject) => {
    request('GET', apiUrl + '/' + category, resolve, reject);
  });
}

function request(method, url, callback, error) {
  
  const http = new XMLHttpRequest();
  //para un post...
  //const pBody = JSON.stringify(body);
  http.open(method, url, true);

  http.onload = function() {
    if (this.status >= 200 && this.status <= 299) {
      if (this.responseText.includes('delivery') && this.responseText.includes('setup')) {
        const result = JSON.parse(this.responseText);
        //console.log(result);
        /*utilizar funciones para retornar propiedad setup y delivery*/
        result.saySetup = function() {
          return this.setup;
        };
        result.sayPunchLine = function() {
          return this.delivery;
        };
        callback(result);
      } else {
        error(new Error `(No jokes at url: ${url}`);
      }
    } else {
      error(new Error `(No jokes at url: ${url}`);
    }
  };
  http.send();
}

// giveMeAJoke('https://sv443.net/jokeapi/category', '')
//   .then(function(val) {
//     console.log(val.saySetup());
//     console.log(val.sayPunchLine());
//   })
//   .catch(function(vale) {
//     console.log(vale);
//   });

  module.exports = giveMeAJoke;