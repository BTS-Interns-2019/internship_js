//https://reqres.in/api/users/2
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = 'https://reqres.in/api/users/2';
const http = new XMLHttpRequest();

http.open('GET', url, true);
http.onreadystatechange = function() {
    //readyState property eturns the state an XMLHttpRequest client is in
    // number 4 means tha the operation is complete 
    if (this.readyState == 4 && this.status == 200) {
        let result = this.responseText
        console.log(result)
    }
};
http.send();