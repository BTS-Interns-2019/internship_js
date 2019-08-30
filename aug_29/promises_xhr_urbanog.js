const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

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
function resolve(response) {
    console.log(response);
  }
  function reject(e, st) {
    console.log(e, st);
  }
promisesXhr('GET', url)
.then (resolve)
.catch(reject);

