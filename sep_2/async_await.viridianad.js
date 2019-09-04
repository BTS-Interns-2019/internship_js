//var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function get(url, onSuccess, onError, request) {
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

function post(url, data) {
  return new Promise((resolve, reject) => {
    request('POST', url, resolve, reject, data);
  });
}

function put(url, data) {
  return new Promise((resolve, reject) => {
    request('PUT', url, resolve, reject, data);
  });
}
  module.exports = {
    get,
    post,
    put,
    post
  };


