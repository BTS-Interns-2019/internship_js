const url_example = 'https://reqres.in/api/users/2';
const fake_url = 'https://reqres.in/lalala/lalala';
const me = { first_name: 'Marlon', last_name: 'Torres' };
const method = 'GET';

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

const promiseRequest = new Promise((onSuccess, onError) => {
  
});

function request(method, url, data) {
  return new Promise((resolve, rejected) => {
    switch (method.toUpperCase()) {
      case 'GET': {
        get(url);
        break;
      }
  
      case 'POST': {
        post(url, data);
        break;
      }
  
      default: {
        console.error('the specified method dont exists');
        break;
      }
    }
  });
}

function response(response) {
  console.log(response);
}

function error(error) {
  console.error(error);
}

/*promiseGet
  .then(response)
  .catch(error);

promisePost
  .then(response)
  .catch(error);

promiseRequest
  .then(response)
  .catch(error);*/

module.exports = { get, post, request };
