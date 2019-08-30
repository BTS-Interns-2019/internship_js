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

console.log(getPromise('GET','https://reqres.in/api/users/2').then(function(result) {
    console.log(result)}));