//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function get(url, onSuccess, onError) {
  let newPromise = new Promise(function(resolve, reject) {
    let http = new XMLHttpRequest();
    http.open('GET', url);

    http.onload = () => {
      if (http.status < 400) {
        resolve(http.responseText);
      } else {
        reject(new Error(http.responseText));
      }
    };
    http.send();
  });
  return newPromise;
}

function post(url,data, onSuccess, onError) {
    let newPromise = new Promise(function(resolve, reject) {
      let http = new XMLHttpRequest();
      http.open('POST', url);
  
      http.onload = () => {
        if (http.status < 400) {
          resolve(http.responseText);
          console.log('Ok!!!');
        } else {
          reject(new Error(http.responseText));
          console.log('Algo salio mal');
        }
      };
      http.send(data);
    });
    return newPromise;
  }
  
  module.exports = {
    get,
    post
  };


