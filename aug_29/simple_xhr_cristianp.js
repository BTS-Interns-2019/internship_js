//const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const url = 'https://enn5ncwmw9ci.x.pipedream.net';

/*function post(url, dataString, onsuccess, onerror) {
  const XMLHttpRequest1 = require('xmlhttprequest').XMLHttpRequest;
  const http = new XMLHttpRequest1();
  const data = JSON.stringify(dataString,null);
  http.open('POST', url, true);
  proceso(http);
  http.send(data);
}


function get(url, onsuccess, onerror){
  const XMLHttpRequest2 = require('xmlhttprequest').XMLHttpRequest;
  const http = new XMLHttpRequest2();
  http.open("GET", url);
  proceso(http)
  http.send();
}
function proceso(obj){
  function onsucces(onsucces){
    console.log("Se armo" + onsucces);
  }
  function onerror(error){
    console.log("No se armo" + error);
  }
  obj.onload = function(){
    if(this.status <= 400){
      var res = this.responseText;
      onsucces(res);
      console.log(res.data);
    }else{
      onerror(this.status + " " + this.statusText);
    }
  }
}//*/
function request(method, url, dataString){
  return new Promise((resolve,reject)=>{
    let http = new XMLHttpRequest();

    http.open(method, url);
    http.send(JSON.stringify(dataString));

    http.onload = ()=>{
      if(http.status >=400){
        return reject(http);
      }
      resolve(http.responseText);
    }
    http.onerror = (e)=>{
      reject(http, e);
    }
  });
  return http;
}
//let req = new request("post", url, "Toño");

function get(url){
  return request("GET", url);
}
function post(url, data){
  return request("POST", url, data);
}

/*get('https://envkltpq4il7.x.pipedream.net')
.then ((response)=>{
  console.log(response);
})
/*post('https://envkltpq4il7.x.pipedream.net/like', {postId:01, now:Date.now()} )
.then((response)=>{
  console.log("El like ", response);
})//*/

/*request("DELETE", "https://envkltpq4il7.x.pipedream.net/like", {postId:01, now:Date.now()})
.then((response)=>{
  console.log("el like fue borrado ", response);
});*/




/*request(
  method,
  function(respuesta) {
    console.log(respuesta);
  },
  function(algo) {
    console.log(algo);
  },
  function(error) {
    console.log(error);
  }
)
/*
const url = "https://reqres.in/api/users/2";
const http = new XMLHttpRequest();
http.open("GET", url);
http.onreadystatechange = function(){
    if(this.readyState == 4 && this.status ==200){
        var resultado = JSON.parse(this.responseText)
        console.log(JSON.stringify(resultado.data, null))
    }
}
http.send();*/

/*var req = new XMLHttpRequest();
req.open('GET', "https://reqres.in/api/users/2/",false);
req.send(null);
if (req.status == 200)
  dump(req.responseText);*/

/*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users/2",false);*/

module.exports = {get, post, request};
