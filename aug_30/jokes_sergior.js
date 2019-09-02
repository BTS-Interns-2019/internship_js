const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const apiUrl = 'https://sv443.net/jokeapi/category';

function get(url, onsuccess, onerror){
    const http = new XMLHttpRequest();
    // console.log(url);
    
    http.open("GET", url);
    // console.log(http);
    
    http.onload = function(){

    if(this.readyState == 4 && this.status >= 200){
        var resultado = JSON.parse(this.responseText);
        // console.log(resultado);
        resultado.saySetup = function(){
            return this.setup;
        };
        resultado.sayPunchLine = function (){
            return this.delivery;
        }
        // console.log('Aqui arriba');
        
        onsuccess(resultado);
        
        
    }else if(this.status > 299){
        onerror('No jokes at url:{url}');
    }
}
http.send();

};
// function resolve(val) {
//     console.log(val);
// }
// function error(e) {
//     console.log(e);
// }
// console.log(get('https://sv443.net/jokeapi/category/miscellaneous?type=twopart',resolve,error));




function giveAJoke(apiUrl, category) {
    return new Promise((resolve, reject) => {
      get(apiUrl +'/'+ category, resolve, reject);
    });
  }


giveAJoke(apiUrl, 'Miscellaneous')
  .then(function (val) {
      console.log(val);
      console.log(val.saySetup())
      console.log(val.sayPunchLine())
    }
  ).catch(function (dato) {
  console.log(dato);
});


module.exports = giveAJoke;