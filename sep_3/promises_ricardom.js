const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


function request(method, url, data) {
    return new Promise((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open(method, url);
        http.send(data);
        http.onload = () => {
          if (http.status >= 400) {
            reject(http);
          }
          resolve(http.responseText);
        };
        http.onerror = (e) => {
          reject(http);
        };
      });
    };


function get(url) {
  return request("GET", url, undefined);
}

function post(url, data) {
  return request("POST", url, data);
}

module.exports = { request, get, post};