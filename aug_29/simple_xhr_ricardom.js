
/*Lo que hicimos en clase */

// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://reqres.in/api/users/2", true);
// xhr.onload = function(){
//     console.log(xhr.responseText);
// };
// xhr.send();


// const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// function get(url, onSuccess, onError) {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.send();
  
//     xhr.onload = () => {
//       if(xhr.status < 200 || xhr.status > 299){
//           onError(xhr.responseText)}
//           else{ onSuccess(xhr.responseText);}
//     };
  
//     xhr.onerror = () => {
//       onError(xhr.responseText);
//     };
//   }
  
//     //get('https://reqres.in/api/users/2', function success (responseText){console.log('respuesta: ', responseText)},function error (errorcito){});




//   function post(url,data, onSuccess, onError) {
//     const xhrp = new XMLHttpRequest();

//     xhrp.open('POST', url);
//     xhrp.send(data);
  
//     xhrp.onload = () => {
//       if(xhrp.status < 200 || xhrp.status > 299){
//           onError(xhrp.responseText)}
//           else{ onSuccess(xhrp.responseText);}
//     };
  
//     xhrp.onerror = () => {
//       onError(xhrp.responseText);
//     };
//   }
//     const data = {
//     "name": "morpheus",
//     "job": "leader"
// }
  
//     // post('https://reqres.in/api/users',JSON.stringify(data),function success (responseText){console.log('respuesta: ', responseText)},function error (errorcito){});

function request(method, url, data, onSucess, onError) {
  let http = new XMLHttpRequest()

  http.open(method, url)
  http.send(JSON.stringify(data));

  http.onload = () => {
    if (http.status >= 400) {
      return onError(http);
    }
    onSucess(http.responseText);
  }
  http.onerror = (e) => {
    onError(http, e);
  }

  return http;
}

function get(url, onSucess, onError) {
  request('GET', url, undefined, onSucess, onError);
}

function post(url, data, onSucess, onError) {
  request('POST', url, data, onSucess, onError);
}

module.exports = { request, get, post};
