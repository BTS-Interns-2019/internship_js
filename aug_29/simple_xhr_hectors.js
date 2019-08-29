/**
 * Using XMLHttpRequest
 */
// Vanilla JS API call
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users/2');
xhr.send();

/**
 * Events for the request
 */
// When a response is received
xhr.onload = () => {
  if (xhr.status !== 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
    return false;
  }

  console.log(`Response: ${xhr.responseText}`);
  return true;
};

// When an error occurs
xhr.onerror = () => {
  console.log('Something unexpected happened');
  return false;
};

/**
 * Using fetch
 */
// const fetch = require('node-fetch');

// fetch('https://reqres.in/api/users/2')
//   .then(response => response.json())
//   .then(json => console.log(json));
