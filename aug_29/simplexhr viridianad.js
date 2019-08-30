/*var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const dato = new XMLHttpRequest(); //creamos un objeto
dato.open('GET', 'https://reqres.in/api/users/2'); //especificamos metodo, URL
dato.onload = function() {
    if(dato.status === 200) {
        console.log(dato.responseText)
      // respuesta lista para procesar
    }
  }
  dato.send();*/
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
              console.log('Ok!!!')
          } else {
              console.log('Algo salio mal')
              return onError(http.responseText)
          }
          onSuccess(http.responseText)
      }
      http.onerror = (e) => console.log('Error', e)
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
              console.log('Creado')
          } else {
              console.log('No creado')
              return onError(http.responseText)
          }
          onSuccess(http.responseText)
      }
      http.onerror = (e) => console.log('Error', e)
      onError(http)
  }
  
  const dataString = {
      name: 'Viridiana',
      job: 'De la rocha'
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
          console.log('?');
          break;
      }
  }
      
  console.log(request('POST','https://reqres.in/api/users/2', JSON.stringify(dataString), function success(responseText) {
      console.log(responseText)}, function error(e) {console.log(e.status, e.statusText, e)}));