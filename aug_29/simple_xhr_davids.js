var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const http = new XMLHttpRequest();
url = 'https://reqres.in/api/users/2';
http.open("GET", url);
http.send();

http.onreadystatechange = () => {
  console.log(http.responseText);
}