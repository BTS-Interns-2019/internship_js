

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
function get(url) {
  return new Promise(function(resolve, reject) {
    const dato = new XMLHttpRequest(); //creamos un objeto
    dato.open('GET' ,'https://reqres.in/api/users/2');
    dato.onload = function() {
      if (dato.status === 200) {
        resolve(dato.responseText)
  }
  else{
    reject(Error(dato.statusText));
  }
};

    dato.onError=function(){
      reject(Error('Error'));
    };
    dato.send();
  })
}

get().then(function(response) {
  console.log("Success!", response);
}, function(error) {
  console.error("Failed!", error);
});




 
 