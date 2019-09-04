const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const { get, post, request } = require('./simple_xhr_urbanog');
// const url = 'https://reqres.in/api/users/2';

function justRequest(method, url, resolve, reject, body) {
  // const meth = method.toUpperCase();
  const postBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open(method, url, true);
  request.send(postBody);
  request.onload = function () {
    if (request.status >= 200 && request.status <= 299) {
      const result = request.responseText;
      resolve(result);
    } else {
      reject(`${request.status} ${request.statusText}`);
    }
  };
}
function promRequest(method, url, body) {
  return new Promise((resolve, reject) => {
    justRequest(method, url, resolve, reject, body);
    // console.log(body);
  });
}
function promPost(url, data) {
  return new Promise((resolve, reject) => {
    post(url, data, resolve, reject);
  });
}
function promGet(url) {
  return new Promise((resolve, reject) => {
    get('get', url);
  });
}
function promisesXhr(method, url) {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open(method, url);
    http.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(http.responseText);
      } else {
        reject({
          status: this.status,
          statusText: this.statusText,
        });
      }
    };
    http.onerror = function () {
      reject({
        status: this.status,
        statusText: http.statusText,
      });
    };
    http.send();
  });
}
// promise

const me = {
  name: 'urabano',
  apellido: 'gonzalez',
};
// promPost('https://envkltpq4il7.x.pipedream.net', me);

// promGet('https://envkltpq4il7.x.pipedream.net');

// request('get', 'https://envkltpq4il7.x.pipedream.net/post/1')

module.exports = {
  promGet, promPost, promRequest, promisesXhr, justRequest,
};
