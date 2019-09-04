var XMLHttpRequest = require('xmlhttpRequest').XMLHttpRequest;

function get(url,cb,error){
    const http = new XMLHttpRequest();
    http.open("GET", url, true)
    http.onreadystatechange = () =>{
        if(http.readyState == 4){
            if(http.status == 200){
                if(url.includes("characters")){
                const res = JSON.parse(http.responseText)
                // let wiki = res.data.results[0].urls[1].url;
                // let arr = wiki.split("?");           
                let hero = {};
                hero.wiki = res.data.results[0].urls[1].url.split("?")[0];
                hero.description = res.data.results[0].description;
                return cb(hero);
                }else if(url.includes("series")){
                    const res = JSON.parse(http.responseText)
                    return cb(res.data.results[0].title);
                }
            } 
            return error(`Error ${http.status} ${url}`);
        }
    };
    http.send();
}
function findSeries(serie, year){
    const hash =  'c2ea1985191bf9ebc56e3dbf95619284'
    const url = `https://gateway.marvel.com:443/v1/public/series?title=${serie}&startYear=${year.startYear}&ts=1&apikey=9b04d37e84bdf94e5610a5caa34dd978&hash=${hash}`
    return new Promise((resolve, reject) => {
      get(url, resolve, reject);
      });
}
findSeries("avengers",{startYear: 2016})
.then(ok => {console.log(ok);
});
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