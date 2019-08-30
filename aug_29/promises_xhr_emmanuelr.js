const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const get = (url) => {
  return new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    http.open('GET', url);
    http.send();
    http.onload = () => {
      if (http.status < 400) {
        resolve(http.responseText);
      } else {
        reject(`status: ${http.status}, ${http}`);
      }
      http.onerror = (e) => {
        reject(e);
      };
    };
  });
};

const url = ('https://reqres.in/api/users/2');
get(url)
  .then((value) => {
    console.log(`Result: ${value}`);
  }).catch((error) => {
    console.warn(`Error: ${error}`);
  });
