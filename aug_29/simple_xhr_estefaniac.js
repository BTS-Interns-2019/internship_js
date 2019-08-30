var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const http = new XMLHttpRequest()

http.open("GET", "https://reqres.in/api/users/2")
http.send()

http.onload = () => console.log(http.responseText)


function get(method, url, onSuccess, onError) {
    let http = new XMLHttpRequest()
    http.open(method, url)
    http.send()
    http.onload = () => {
        if (http.status < 400) {
            console.log('Todo fue bien')
        } else {
            console.log('todo salió mal')
            return onError(http.responseText)
        }
        onSuccess(http.responseText)
    }
    http.onerror = (e) => console.log('error', e)
    onError(http)
}

console.log(get('GET','https://reqres.in/api/users/2', function success(responseText) {
    console.log('respuesta', responseText)}, function error(e) {console.log(e.status, e.statusText, e)}));