// const {default: xhrMock} = require('../node_modules/xhr-mock'); 
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// xhrMock.setup()


function put(url, onsuccess, onerror,dataString){
    const http = new XMLHttpRequest();
    http.open("PUT", url);
    
    
    http.onload = function(){
  
        if( this.status >= 200 && this.status < 299){
            var resultado = JSON.stringify(this.responseText);
            onsuccess(resultado);   
        }else if(this.status > 299){
            var resultado = JSON.stringify(this.responseText);
            onerror(resultado);
        }
    }
  dataString = JSON.stringify(dataString);
  http.send(dataString);
  
  
  }

  function get(url, onsuccess, onerror){
    
    
    const http = new XMLHttpRequest();
    http.open("GET", url);
    
    http.onload = function(){
      console.log('me carga la verga');
      
      
      console.log(this.status);
    if(this.status >= 200 ){
        var resultado = JSON.parse(this.responseText);
        
        
        
        
        
        
        onsuccess(resultado);
        
        
    }else if(this.status > 299){
        var resultado = JSON.parse(this.responseText);
        onerror(resultado);
    }
  }
  http.send();
  
  };

  function post(url, onsuccess, onerror, dataString){

    const http = new XMLHttpRequest();
    http.open("POST", url);
  
    http.onload = function(){
  
        if( this.status >= 200 && this.status < 299){
            var resultado = this.responseText;
            onsuccess(resultado);
        console.log(resultado);    
        }else if(this.status > 299){
            var resultado = JSON.stringify(this.responseText);
            onerror(resultado);
        }
    }
  dataString = JSON.stringify(dataString);
  http.send(dataString);
  
  };

  function postPromise(url,body){
  
    return new Promise((resolve, reject) => {
      
      post(url, resolve,reject,body);
    })
  }
  
  
  
  
  function getPromise(url){
    return new Promise((resolve, reject) => {
      get(url, resolve,reject);
    })
  }
  
  function putPromise(url,data){
    return new Promise((resolve, reject) => {
      put(url, resolve,reject,data);
    })
  }


  module.exports = {get,post,put};