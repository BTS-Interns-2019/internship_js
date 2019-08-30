const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const {get, post, request} = require ('./simple_xhr_urbanog');
const url = 'https://reqres.in/api/users/2';

function promisesXhr(method, url) {
    return new Promise ((resolve, reject) => {
        const http = new XMLHttpRequest();
        http.open(method,url);
        http.onload = function () {
            if (this.status >=200 && this.status < 300) {
                resolve(http.responseText);
            }else{
                reject({
                    status: this.status,
                    statusText: this.statusText
                });
            }
        };
        http.onerror = function (){
            reject({
                status: this.status,
                statusText: http.statusText
            });
        };
        http.send();
    });
}

// promise


function promRequest(){
  return new Promise((resolve, reject) =>{
    request(method, url, body)
  });
}
function promPost(url, data) {
  return new Promise ((resolve, reject) => {
    request('POST', url, data)
});
}
function promGet(url) {
  return new Promise ((resolve, reject) => {
    request('get', url)
});
}

const me = {
  name: 'urabano',
  apellido: 'gonzalez'
}
promPost('https://envkltpq4il7.x.pipedream.net', me);

promGet('https://envkltpq4il7.x.pipedream.net');

request('DELETE','https://envkltpq4il7.x.pipedream.net/post/1')