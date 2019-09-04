
// const get,post = require('xmlhttprequest').XMLHttpRequest;

// function get(url, onSuccess, onError) {
//     gerPromise = new Promise(url, )
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
  
// //   get('https://reqres.in/api/users/2', function success (responseText){console.log('respuesta: ', responseText)},function error (errorcito){});




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
  
//   post('https://reqres.in/api/users',JSON.stringify(data),function success (responseText){console.log('respuesta: ', responseText)},function error (errorcito){});

// const {XMLHttpRequest} = require('xmlhttprequest').XMLHttpRequest;
const { request: requestCB } = require('./simple_xhr_ricardom');


function request(method, url, data) {
  return new Promise((resolve, reject) => {
    requestCB(method, url, data, resolve, reject)
  });
}

function get(url) {
  return request("GET", url, undefined);
}

function post(url, data) {
  return request("POST", url, data);
}

module.exports = { request, get, post};


// get('https://enswc9cwyc6ho.x.pipedream.net/view')
//   .then((response) => {
//     console.log(response);
//   })
//   ;

// post('https://enswc9cwyc6ho.x.pipedream.net/like', { postId: 6585, now: Date.now() })
//   .then((response) => {
//     console.log('el like', response);
//   })
//   ;

// request("DELETE", 'https://enswc9cwyc6ho.x.pipedream.net/like', { postId: 6585 })
//   .then((response) => {
//     console.log('el delete de like', response);
//   });
  