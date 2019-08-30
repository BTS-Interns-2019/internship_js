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

let url = 'https://reqres.in/api/use/2';
get(url)
  .then((value) => {
    console.log(`Result: ${value}`);
  }).catch((error) => {
    console.warn(`Error: ${error}`);
  });
url = 'https://reqres.in/api/users';
const user = JSON.stringify(
  {
    name: 'morpheus',
    job: 'leader',
  },
);
post(url, user)
  .then((value) => {
    console.log(`Result: ${value}`);
  }).catch((error) => {
    console.warn(`Error: ${error}`);
  });

request('POST', url, user)
  .then((value) => {
    console.log(`Result: ${value}`);
  }).catch((error) => {
    console.warn(`Error: ${error}`);
  });
