var XMLHttpRequest = require('xmlhttpRequest').XMLHttpRequest;
const url = 'https://reqres.in/api/users/2';
const http = new XMLHttpRequest();
http.open("GET", url)
http.onreadystatechange = function(){

    if(this.readyState == 4 && this.status == 200){
        var resultado = JSON.parse(this.responseText);
        console.log(resultado.data);
        
    }
}
http.send();