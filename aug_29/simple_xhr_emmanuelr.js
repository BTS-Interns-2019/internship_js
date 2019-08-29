const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users/2', true);
xhr.onload = () => {
  console.log(xhr.responseText);
};
xhr.send();
