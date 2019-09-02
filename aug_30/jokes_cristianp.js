const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//const url = 'https://sv443.net/jokeapi/category/miscellaneous?type=twopart';

function giveMeAJoke(apiUrl, category) {
  if (category === '' || category === ' ') {
    category = 'dark';
  }
  return new Promise((resolve, reject) => {
    request('GET', apiUrl + '/' + category, resolve, reject);
  });
}

function request(method, url, callback, error, body) {
  if (typeof method !== 'string') {
    return 'Need a string method';
  }
  const http = new XMLHttpRequest();
  const pBody = JSON.stringify(body);
  http.open(method, url, true);
  http.onload = function() {
    if (this.status >= 200 && this.status <= 299) {
      console.log(this.status);
      if (this.responseText.includes('twopart')) {
        const result = JSON.parse(this.responseText);
        result.saySetup = function() {
          return this.setup;
        };
        result.sayPunchLine = function() {
          return this.delivery;
        };
        callback(result);
      } else {
        error(`new Error (No jokes at url: ${url}`);
      }
    } else {
      error(`new Error (No jokes at url: ${url}`);
    }
  };
  http.send(pBody);
  /*return new Promise((resolve, reject)=>{
        const http = new XMLHttpRequest();
        const pBody = JSON.stringify(body);
        http.open(method, url,true);

        http.onload = ()=>{
            if(http.status >= 400){
                error.send(pBody);
            }
            resolve(http.responseText);
        }
    });*/
}
// giveMeAJoke('http://api.icndb.com/jokes', '')
//   .then(function(val) {
//     console.log(val.hasOwnProperty('saySetup'));
//     console.log(val.saySetup());
//     console.log(val.sayPunchLine());
//   })
//   .catch(function(val) {
//     console.log(val);
//   });

/*function get(url){
    return request("GET", url);
}
function post(url, data){
    return request("POST", url, data);
}*/
