const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const Http = new XMLHttpRequest();
const url = 'https://jsonplaceholder.typicode.com/posts'

Http.onreadystatechange = function (){
    if(this.readyState == 4 && this.status == 200)
    console.log(`StatusCode: ${this.status}`)
    console.log(this.responseText)
};

Http.open('GET', url);
Http.send();