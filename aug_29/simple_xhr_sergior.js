const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const {default: xhrMock} = require('../node_modules/xhr-mock');
// Creación de la petición HTTP

function ajaxGet (URL, callback) {
    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

    let req = new XMLHttpRequest ();
    req.open ('GET', URL, true);
    req.addEventListener('load', function () {
        if (req.status >= 200 && req.status < 400) {
       callback(req.responseText);
        } else {
            console.error(req.status + ' ' + req.statusText)
        } 
    });
    req.addEventListener('error', function () {
        console.error('network error');
    });
    req.send(null);
}

function show (answer){
    console.log(answer);
}

//ajaxGet ('https://reqres.in/api/users/2', show);



//var XMLHttpRequest = require('xmlhttpRequest').XMLHttpRequest;
 const url = 'https://enwk6idcs9d6.x.pipedream.net';
// const http = new XMLHttpRequest();
// http.open("GET", url)
// http.onreadystatechange = function(){

//     if(this.readyState == 4 && this.status == 200){
//         var resultado = JSON.parse(this.responseText);
//         console.log(resultado.data);
        
//     }
// }
// http.send();

function get(url, onsuccess, onerror){
    const http = new XMLHttpRequest();
    http.open("GET", url);

    http.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        var resultado = JSON.parse(this.responseText);
        onsuccess(resultado);
        console.log(resultado.data);
        
    }else if(this.status > 299){
        var resultado = JSON.parse(this.responseText);
        onerror(resultado);
    }
}
http.send();

};


const dataString = {
    nombre: 'Braulio',
    trabajo: 'te pasas con las tareas'
  };


function post(url, onsuccess, onerror, dataString){

    const http = new XMLHttpRequest();
    http.open("POST", url);

    http.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            var resultado = JSON.stringify(this.responseText);
            onsuccess(resultado);
        console.log(resultado.data);    
        }else if(this.status > 299){
            var resultado = JSON.stringify(this.responseText);
            onerror(resultado);
        }
    }
dataString = JSON.stringify(dataString);
http.send(dataString);

};




function request(method, url, onsuccess, onerror,dataString){
    if(method == 'GET'){
        get(url,onsuccess,onerror);
    }else if(method == 'POST'){
        post(url, onsuccess, onerror,dataString)
    }

    
};


get('https://en74aq4z283n.x.pipedream.net',function (respuesta){

    console.log(respuesta);
    
})

post('https://en74aq4z283n.x.pipedream.net/', function (respuesta){
    console.log(respuesta+ "nestor se la come");   
}, function (respuesta){

    console.log(respuesta); 
},dataString);

request('POST','https://en74aq4z283n.x.pipedream.net/', function (respuesta){
    console.log(respuesta+ "nestor se la come");   
}, function (respuesta){

    console.log(respuesta); 
},dataString);

module.exports = {get, post, request}