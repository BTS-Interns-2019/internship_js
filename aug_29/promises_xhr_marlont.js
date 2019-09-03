const XMLHttpRequest = require('../node_modules/xmlhttprequest').XMLHttpRequest;

function get(url) {
  return new Promise((resolve, rejected) => {
    const http = new XMLHttpRequest();
    http.open('GET', url, true);
    http.addEventListener('load', () => {
      if (http.status >= 200 && http.status < 400) {
        resolve(http.responseText);
      } else {
        rejected(`${http.status} ${http.statusText}`);
      }
    });
    http.send();
  });
}

function post(url, data) {
  return new Promise((resolve, rejected) => {
    const http = new XMLHttpRequest();
    http.open('POST', url, true);
    http.send(JSON.stringify(data));
    http.addEventListener('load', () => {
      if (http.status >= 200 && http.status < 400) {
        resolve(http.responseText);
      } else {
        rejected(`${http.status  } ${  http.statusText}`);
      }
    });
  });
}

function request(method, url, data) {
  return new Promise((resolve, rejected) => {
    const http = new XMLHttpRequest();
    http.open(method, url, true);
    http.send(JSON.stringify(data));
    http.addEventListener('load', () => {
      if (http.status >= 200 && http.status < 400) {
        resolve(http.responseText);
      } else {
        rejected(`${http.status  } ${  http.statusText}`);
      }
    });   
  });
}

function response(response) {
  console.log(response);
}

function error(error) {
  console.error(error);
}

module.exports = get;
