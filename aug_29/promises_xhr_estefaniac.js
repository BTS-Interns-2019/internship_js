var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function getPromise (method, url) {
    let newPromise= new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        http.open(method, url);
        http.onload = function () {
            if (http.status < 400) {
                resolve(http.responseText);
                console.log('Everything is fine :D')
            }
            else {
                reject(new Error(http.responseText));
                console.log('Something was wrong :(')
            }
        };
        http.send();
    })
    return newPromise
}

console.log(getPromise('GET','https://reqres.in/api/users/2').then(function(responseText) {
    console.log('response', responseText)}).catch((function error(e) {console.log(e.status, e.statusText, e)})));

function postPromise (method, url, dataString) {
    let newPromise= new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        http.open(method, url);
        http.onload = function () {
            if (http.status < 400) {
                resolve(http.responseText);
                console.log('Everything is fine :D')
            }
            else {
                reject(new Error(http.responseText));
                console.log('Something was wrong :(')
            }
        };
        http.send(dataString);
    })
    return newPromise
}

const dataString = {
    name: 'John Wick',
    job: 'killer'
  };
  
console.log(postPromise('POST','https://reqres.in/api/users/2', JSON.stringify(dataString)).then(function(responseText) {
    console.log('response', responseText)}).catch((function error(e) {console.log(e.status, e.statusText, e)})));


function requestPromise (method, url, dataString) {
    let newPromise= new Promise(function (resolve, reject) {
        var http = new XMLHttpRequest();
        switch(method.toUpperCase()) {
            case 'GET':
            resolve(getPromise(method, url));
            break;
            case 'POST':
            resolve(postPromise(method, url, dataString));
            break;
            default:
            reject(console.log('This method is unknown for us D:'));
            break;
        }
    })
    return newPromise
}

console.log(requestPromise('POST','https://reqres.in/api/users/2', JSON.stringify(dataString)).then(function(responseText) {
    console.log('response', responseText)}).catch((function error(e) {console.log(e.status, e.statusText, e)})));