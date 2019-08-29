//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
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

ajaxGet ('https://reqres.in/api/users/2', show);



// var XMLHttpRequest = require('xmlhttpRequest').XMLHttpRequest;
// const url = 'https://reqres.in/api/users/2';
// const http = new XMLHttpRequest();
// http.open("GET", url)
// http.onreadystatechange = function(){

//     if(this.readyState == 4 && this.status == 200){
//         var resultado = JSON.parse(this.responseText);
//         console.log(resultado.data);
        
//     }
// }
// http.send();