/**
 * Using XMLHttpRequest
 */
// Vanilla JS API call
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

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
  dataString ? xhr.send(dataString) : xhr.send();

  xhr.onload = () => {
    xhr.status < 200 || xhr.status > 299 ? onError(xhr.responseText) : onSuccess(xhr.responseText);
  };

  xhr.onerror = () => {
    onError(xhr.responseText);
  };
}

// GET request wrapper
function get(url, onSuccess, onError) {
  request('GET', url, onSuccess, onError);
}

// POST request wrapper
function post(url, data, onSuccess, onError) {
  request('POST', url, onSuccess, onError, JSON.stringify(data));
}

module.exports = {
  request,
  get,
  post,
};
