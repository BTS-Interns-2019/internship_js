const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const url = 'https://enn5ncwmw9ci.x.pipedream.net';

function post(url, dataString, onsuccess, onerror) {
  const http = new XMLHttpRequest();
  http.open('POST', url);
  http.onreadystatechange = function() {
    if (this.readyState == 4 && (this.status >= 200 && this.status < 300)) {
      var res = dataString;
      onsuccess(res);
      console.log(res.data);
    } else if (this.status > 299) {
      var res = JSON.parse(this.datastring);
      onerror(res);
    }
  };
  http.send();
}

post(
  url,
  function(respuesta) {
    console.log(respuesta);
  },
  function(algo) {
    console.log(algo);
  },
  function(error) {
    console.log(error);
  }
);
function get(url, onsuccess, onerror){
      const http = new XMLHttpRequest();
      http.open("GET", url);
      http.onreadystatechange = function(){
        if(this.readyState == 4 && (this.status >= 200 && this.status <300)){
          var res = JSON.parse(this.responseText);
          onsuccess(res);
          console.log(res.data);
        }else if(this.status >299){
          var res = JSON.parse(this.responseText);
          onerror(res);
        }
      }
      http.send();
    };

get(url, function(respuesta){
  console.log(respuesta);

  },function(msjerror){
    console.log(msjerror);
  }
)//*/
function request(method, url, dataString, onsuccess, onerror){
  switch (method.toUpperCase()){
    case 'GET':
        ajaxGet (URL, onsuccess, onerror);
        break;
    case 'POST':
        ajaxPost (URL, datastring, onsuccess, onerror);
        break;   
    default:
        console.log('unknow method');
        break;
  }  
}

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
