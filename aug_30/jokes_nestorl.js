var XMLHttpRequest = require('xmlhttpRequest').XMLHttpRequest;
// const url = 'https://sv443.net/jokeapi/category';

function get(url,onsuccess,error){
    const http = new XMLHttpRequest();
    http.open("GET", url, true)
    http.onreadystatechange = function() {
        if(http.readyState == 4){
            if(http.status == 200){
                var resultado = JSON.parse(http.responseText);
                if(resultado.type == "twopart"){
                    resultado.sayPunchLine = ()=>{return resultado.delivery };
                    resultado.saySetup = ()=>{return resultado.setup };
                    onsuccess(resultado);
                }else {
                    error(new Error('No jokes at url: ${url}'))
                }
                
            }
            error(new Error('No jokes at url: ${url}'))
        }
    };
    http.send();
}
// get(url + "dark"+ "?type=twopart",
//     (ok)=>{
//         console.log(ok.saySetup());
//         console.log(ok.sayPunchLine());
//     },(err)=>{
//         console.error(err);
// });

function giveMeAJoke(apiUrl, category) {
    return new Promise((resolve, reject) => {
    get(apiUrl +'/'+ category+"?type=twopart", resolve, reject);
    });  
}
// giveMeAJoke(url,"dark")
//     .then((ok)=>{
//         console.log(ok);
        
//     }).catch((er)=>{
//         console.error(er);
        
// });
module.exports = giveMeAJoke;