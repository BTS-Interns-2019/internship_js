var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const http = new XMLHttpRequest();
url = 'https://reqres.in/api/users/2';
http.open("GET", url);
http.send();

http.onload = () => {
  console.log(http.responseText);
}