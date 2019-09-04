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

      resolve(res);
    } else {
      reject(`${request.status} ${request.statusText}`);
    }
  };
}


async function findHero(name) {
  const apikey = '14e5bbc9393ca7b70cf6df726d3cbc408ab8d4a3f3741cf3185ddf0e0680c6fc3cabeb0e6';
  const hash = md5(apikey);
  const urlApi = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=3741cf3185ddf0e0680c6fc3cabeb0e6&hash=${hash}`;
  console.log(urlApi);
  const hero = await new Promise((resolve, reject) => {
    
    
    justRequest('GET', urlApi, resolve, reject);
  });

  Object.defineProperties(hero, {
    wiki: {
      get() {
        const simpleUrl = (this.data.results[0].urls[1].url).split('?');
        return simpleUrl[0];
      },
    },
    description: {
      get() {
        return this.data.results[0].description;
      },
    },
    name: {
      get() {
        return this.data.results[0].name;
      },
    },
    id: {
      get() {
        return this.data.results[0].id;
      },
    },
  });
  return hero;
}

findHero('Spider-man')
  .then((val) => {
    // const personaje = JSON.parse(val);
    console.log(val.data.results[0].id);
  });

async function findSeries(title, filter) {
  const apikey = '14e5bbc9393ca7b70cf6df726d3cbc408ab8d4a3f3741cf3185ddf0e0680c6fc3cabeb0e6';
  const hash = md5(apikey);
  const urlApi = `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${title}&startYear=${filter.startYear}&ts=1&apikey=3741cf3185ddf0e0680c6fc3cabeb0e6&hash=${hash}`;
  console.log(urlApi);
  
  const serie = await new Promise((resolve, reject) => {
    justRequest('GET', urlApi, resolve, reject);
  });

  Object.defineProperties(serie, {
    title: {
      get() {
        return this.data.results[0].title;
      },
    },
    characters: {
      get() {
        
        return this.data.results[0].characters[6];

      }, 
    },
    // comics: {
    //   get() {
        
    //     return this.data.results[0].comics;

    //   }, 
    // },

  });
  return serie;
}

const Series = findSeries('Avengers', { startYear: 2016 })
  .then((data) => {

    console.log(data.characters[6].name);
    console.log(data.characters[6]);
    console.log(data.comics);
    
    return 'Avengers (2016 - 2018)';

  })
  .catch((error) => {
    console.log(error);
  });
module.exports = {findHero, findSeries};