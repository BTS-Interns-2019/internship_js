
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const dato = new XMLHttpRequest(); //creamos un objeto
dato.open('GET', 'https://reqres.in/api/users/2'); //especificamos metodo, URL
dato.onload = function() {
    if(dato.readyState === 4) {
        console.log(dato.responseText)
      // respuesta lista para procesar
    }
  }
  dato.send();

//fase de peticion
/*  0: Petición aún no inicializada
    1: Conexión establecida con el servidor
    2: Petición enviada
    3: Proceso de la petición
    4: Respuesta lista*/