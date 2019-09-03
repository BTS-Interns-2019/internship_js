const md5 = require('blueimp-md5');
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function justRequest(method, url, resolve, reject, body) {
    // const meth = method.toUpperCase();
    const postBody = JSON.stringify(body);
    const request = new XMLHttpRequest();
    request.open(method, url, true);
    request.send(postBody);
    request.onload = function () {
      if (request.status >= 200 && request.status <= 299) {
        const result = request.responseText;
        const ob = JSON.parse(result);
        Object.defineProperties(ob,{
            wiki:{
                get(){
                    const wik = (this.data.results[0].urls[1].url).split('?');
                    return wik[0];
                }
            },
            description:{
                get(){
                    const des = this.data.results[0].description;
                    return des;
                }
            }
        });
        resolve(ob);
      } else {
        reject(`${request.status} ${request.statusText}`);
      }
    };
  }
function promRequest(method, url, data){
    return new Promise( (resolve, reject)=>{
        justRequest(method, url, resolve, reject, data);
    });
}
function findHero(name){
    const url = "https://gateway.marvel.com:443/v1/public/characters?&name=";
    const a = "121b5746b0e0e8c51dc917ff06704ade25c26ba8e317b52d1a706d7643efb0cfa14652722";
    const hash = md5(a);
    const api = "ts=1&apikey=317b52d1a706d7643efb0cfa14652722";
    const todo = url + name +"&"+ api + "&hash=" + hash;
    //console.log(todo);
    return promRequest("GET", todo);
  }

const a = findHero("Spider-man");
console.log(a.then((a)=>{return a}));

module.exports = {findHero};