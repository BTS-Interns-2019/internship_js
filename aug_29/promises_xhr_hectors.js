// Promises
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const promise = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://reqres.in/api/users/10');
  xhr.send();

  xhr.onload = () => {
    xhr.status < 200 || xhr.status > 299 ? reject(xhr.responseText) : resolve(xhr.responseText);
  };

  xhr.onerror = () => {
    reject(xhr.responseText);
  };
});

promise
  .then(response => console.log(response))
  .catch(error => console.log(`Error: ${error}`));
