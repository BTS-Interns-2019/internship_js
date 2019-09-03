const { XMLHttpRequest } = require('xmlhttprequest');
const md5 = require('blueimp-md5');


function justRequest(method, url, resolve, reject, body) {
  // const meth = method.toUpperCase();
  const postBody = JSON.stringify(body);
  const request = new XMLHttpRequest();
  request.open(method, url, true);
  request.send(postBody);
  request.onload = function () {
    if (request.status >= 200 && request.status <= 299) {
      const result = request.responseText;
      const res = JSON.parse(result);
      Object.defineProperties(res, {
        wiki: {
          get() {
            const simpleUrl = (this.data.results[0].urls[1].url).split('?')
            return simpleUrl[0];
          }
        },
        description: {
          get(){
            return this.data.results[0].description;
          }
        },
        name: {
          get() {
            return this.data.results[0].name
          }
        }
      });
      resolve(res);
    } else {
      reject(`${request.status} ${request.statusText}`);
    }
  };
}

function findHero(name) {
  const apikey = '11c2e531436ba70475725db077377796648609e42eb47d94cc85c07c9bd75002b35d3a3f3';
  const hash = md5(apikey);
  const urlApi = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=eb47d94cc85c07c9bd75002b35d3a3f3&hash=${hash}`;

  return new Promise((resolve, reject) => {
    justRequest('GET', urlApi, resolve, reject);
  });
}

findHero('Spider-man')
  .then((val) => {
    // const personaje = JSON.parse(val);
    console.log(val.wiki);
  });

function findSeries(title, filter) {
  
}
module.exports= findHero;