var XMLHttpRequest = require('xmlhttpRequest').XMLHttpRequest;

function get(url,cb,error){
    const http = new XMLHttpRequest();
    http.open("GET", url, true)
    http.onreadystatechange = () =>{
        if(http.readyState == 4){
            if(http.status == 200){
                const res = JSON.parse(http.responseText)
                // let wiki = res.data.results[0].urls[1].url;
                // let arr = wiki.split("?");           
                let hero = {};
                hero.wiki = res.data.results[0].urls[1].url.split("?")[0];
                hero.description = res.data.results[0].description;
            return cb(hero);
            } 
            return error(`Error ${http.status} ${url}`);
        }
    };
    http.send();
}
function post(url, body, cb, error){
    const http = new XMLHttpRequest();
    http.open("POST", url, true)
    http.onreadystatechange = () =>{
        if(http.readyState == 4){
            if(http.status == 200){
                var resultado = JSON.parse(http.responseText);
                cb(http.responseText);
            }else{
                error(`Error ${http.status} ${url}`)
            }
        }
    };
    http.send(body);
}
  module.exports = {get, post}