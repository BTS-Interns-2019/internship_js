function get(url) {
  let newPromise= new Promise(function (resolve, reject) {
      var http = new XMLHttpRequest();
      http.open('GET', url);
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

function post (method, url, dataString) {
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

module.exports = {
  get,
  post
}