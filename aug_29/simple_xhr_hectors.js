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
function executeRequest(method, url, onSuccess, onError, dataString) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, url);
  if (dataString) {
    xhr.send(dataString);
  } else {
    xhr.send();
  }

  xhr.onload = () => {
    xhr.status < 200 || xhr.status > 299 ? onError(xhr.responseText) : onSuccess(xhr.responseText);
  };

  xhr.onerror = () => {
    onError(xhr.responseText);
  };
}

// GET request wrapper
function get(url, onSuccess, onError) {
  executeRequest('GET', url, onSuccess, onError);
}

// get('https://reqres.in/api/users/4', response => console.log(response), response => console.log(`Error: ${response}`));

// POST request wrapper
function post(url, data, onSuccess, onError) {
  executeRequest('POST', url, onSuccess, onError, JSON.stringify(data));
}

const data = {
  name: 'morpheus',
  job: 'leader',
};

// post(
//   'https://reqres.in/api/users',
//   data,
//   response => console.log(response),
//   response => console.log(`Error: ${response}`),
// );

// Any request wrapper
function request(method, url, data, onSuccess, onError) {
  switch (method.toUpperCase()) {
    case 'POST':
      post(url, data, onSuccess, onError);
      break;
    case 'GET':
      get(url, onSuccess, onError);
      break;
    default:
      console.log('Unknown method');
      break;
  }
}

// request(
//   'post',
//   'https://reqres.in/api/users', 
//   data,
//   response => console.log(response), 
//   response => console.log(`Error: ${response}`)
// );

module.exports = {
  get,
};
