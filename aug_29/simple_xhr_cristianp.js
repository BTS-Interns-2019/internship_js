const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const url = "https://reqres.in/api/users/2";
const http = new XMLHttpRequest();
http.open("GET", url);
http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status ==200){
        var resultado = JSON.parse(this.responseText)
        console.log(JSON.stringify(resultado.data, null))
    }
}
http.send();

/*var req = new XMLHttpRequest();
req.open('GET', "https://reqres.in/api/users/2/",false);
req.send(null);
if (req.status == 200)
  dump(req.responseText);*/

/*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users/2",false);*/