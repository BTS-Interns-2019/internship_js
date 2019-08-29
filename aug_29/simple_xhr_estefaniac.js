var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const http = new XMLHttpRequest()

http.open("GET", "https://reqres.in/api/users/2")
http.send()

http.onload = () => console.log(http.responseText)