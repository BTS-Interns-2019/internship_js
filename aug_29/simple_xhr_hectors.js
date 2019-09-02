/**
 * Using XMLHttpRequest
 */
// Vanilla JS API call
// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://reqres.in/api/users/2');
// xhr.send();

// /**
//  * Events for the request
//  */
// // When a response is received
// xhr.onload = () => {
//   if (xhr.status !== 200) {
//     console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//     return false;
//   }

//   console.log(`Response: ${xhr.responseText}`);
//   return true;
// };

// // When an error occurs
// xhr.onerror = () => {
//   console.log('Something unexpected happened');
//   return false;
// };

/**
 * Using fetch
 */
// const fetch = require('node-fetch');

// fetch('https://reqres.in/api/users/2')
//   .then(response => response.json())
//   .then(json => console.log(json));

/**
 * Functions using XMLHttpRequests
 */
// Function that executes a request depending on the method
function request(method, url, onSuccess, onError, data) {
  const xhr = new XMLHttpRequest();
  let dataString;

  if (data) {
    dataString = JSON.stringify(data);
  }

  xhr.open(method, url);
  xhr.send(dataString);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          onSuccess(xhr.responseText);
        } catch (error) {
          onError(error);
        }
      } else if (xhr.status) {
        try {
          onError(xhr.responseText);
        } catch (error) {
          onError(error);
        }
      } else {
        onError(new Error('An error ocurred'));
      }
    }
  };
}

// GET request wrapper
function get(url) {
  return new Promise((resolve, reject) => {
    request('GET', url, resolve, reject);
  });
}

// POST request wrapper
function post(url, data) {
  return new Promise((resolve, reject) => {
    request('POST', url, resolve, reject, data);
  });
}

// PUT request wrapper
function put(url, data) {
  return new Promise((resolve, reject) => {
    request('PUT', url, resolve, reject, data);
  });
}

module.exports = {
  request,
  get,
  post,
  put,
};
