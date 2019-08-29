var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var request=new XMLHttpRequest();
request.open('GET','https://reqres.in/api/users/2',false);
request.send();
//return request.responseText;
console.log(request.responseText);