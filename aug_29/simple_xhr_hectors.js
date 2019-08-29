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
function get(url, onSuccess, onError) {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url);
  xhr.send();

  xhr.onload = () => {
    xhr.status < 200 || xhr.status > 299 ? onError(xhr.responseText) : onSuccess(xhr.responseText);
  };

  xhr.onerror = () => {
    onError(xhr.responseText);
  };
}

get('https://reqres.in/api/users/4', response => console.log(response), response => console.log(`Error: ${response}`));

function post(url, dataString, onSuccess, onError) {
  const xhr = new XMLHttpRequest();

  xhr.open('POST', url);
  xhr.send(dataString);

  xhr.onload = () => {
    xhr.status < 200 || xhr.status > 299 ? onError(xhr.responseText) : onSuccess(xhr.responseText);
  };

  xhr.onerror = () => {
    onError(xhr.responseText);
  };
}

const dataString = {
  name: 'morpheus',
  job: 'leader'
};

post(
  'https://reqres.in/api/users', 
  JSON.stringify(dataString),
  response => console.log(response), 
  response => console.log(`Error: ${response}`)
);

function request(method, url, dataString, onSuccess, onError) {
  switch(method.toUpperCase()) {
    case 'POST':
      post(url, dataString, onSuccess, onError);
      break;
    case 'GET':
      get(url, onSuccess, onError);
      break;
    default:
      console.log('Unknown method');
      break;
  }
}

request(
  'post',
  'https://reqres.in/api/users', 
  JSON.stringify(dataString),
  response => console.log(response), 
  response => console.log(`Error: ${response}`)
);
