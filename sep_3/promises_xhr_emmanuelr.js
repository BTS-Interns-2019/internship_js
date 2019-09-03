const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const request = (method, url, dataString) => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open(method, url);
    http.send(dataString);
    http.onload = () => {
      if (http.status >= 400) {
        reject(http);
      }
      resolve(http.responseText);
    };
    http.onerror = (e) => {
      reject(http, e);
    };
  });
};
function get(url) {
  return request('GET', url, undefined);
}
function post(url, dataString) {
  return request('POST', url, dataString);
}

module.exports = {
  get, post, request,
};
