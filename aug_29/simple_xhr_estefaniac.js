var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const http = new XMLHttpRequest()

http.open("GET", "https://reqres.in/api/users/2")
http.send()

http.onload = () => console.log(http.responseText)


function get(url, onSuccess, onError) {
    let http = new XMLHttpRequest()
    http.open('GET', url)
    http.send()
    http.onload = () => {
        if (http.status < 400) {
            console.log('Everything is fine :D')
        } else {
            console.log('Something was wrong :(')
            return onError(http.responseText)
        }
        onSuccess(http.responseText)
    }
    http.onerror = (e) => console.log('error', e)
    onError(http)
};

console.log(get('https://reqres.in/api/users/2', function success(responseText) {
    console.log('respuesta', responseText)}, function error(e) {console.log(e.status, e.statusText, e)}));

function post(url, dataString, onSuccess, onError) {
    let http = new XMLHttpRequest()
    http.open('POST', url)
    http.send(dataString)
    http.onload = () => {
        if (http.status < 400) {
            console.log('Created :D')
        } else {
            console.log('Not created :(')
            return onError(http.responseText)
        }
        onSuccess(http.responseText)
    }
    http.onerror = (e) => console.log('error', e)
    onError(http)
}

const dataString = {
    name: 'John Wick',
    job: 'killer'
  };
  
console.log(post('https://reqres.in/api/users', JSON.stringify(dataString), function success(responseText) {
    console.log(responseText)}, function error(e) {console.log(e.status, e.statusText, e)}));


function request(method, url, dataString, onSuccess, onError) {
    switch(method.toUpperCase()) {
        case 'GET':
        get(url, onSuccess, onError);
        break;
        case 'POST':
        post(url, dataString, onSuccess, onError);
        break;
        default:
        console.log('This method is unknown for us D:');
        break;
    }
}
    
console.log(request('POST','https://reqres.in/api/users/2', JSON.stringify(dataString), function success(responseText) {
    console.log(responseText)}, function error(e) {console.log(e.status, e.statusText, e)}));
    