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
// 58990
async function findHero(name) {
  const apikey = '11c2e531436ba70475725db077377796648609e42eb47d94cc85c07c9bd75002b35d3a3f3';
  const hash = md5(apikey);
  const urlApi = `https://gateway.marvel.com:443/v1/public/characters?name=${name}&ts=1&apikey=eb47d94cc85c07c9bd75002b35d3a3f3&hash=${hash}`;

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
    comics: {
      get() {
        return this.data.results[0].comics;
      },
    },
  });
  return hero;
}
async function findComic(idComic) {
  const apikey = '11c2e531436ba70475725db077377796648609e42eb47d94cc85c07c9bd75002b35d3a3f3';
  const hash = md5(apikey);
  const comic = await new Promise((resolve, reject) => {
    justRequest('GET', `https://gateway.marvel.com/v1/public/comics/${idComic}?apikey=eb47d94cc85c07c9bd75002b35d3a3f3&hash=${hash}&ts=1`, resolve, reject);
  });
  return comic;
}
findHero('deadpool')
  .then((val) => {
    // const personaje = JSON.parse(val);
    console.log(val.data.results[0].id);
  });

async function findSeries(title, filter) {
  const apikey = '11c2e531436ba70475725db077377796648609e42eb47d94cc85c07c9bd75002b35d3a3f3';
  const hash = md5(apikey);
  const urlApi = `https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${title}&startYear=${filter.startYear}&ts=1&apikey=eb47d94cc85c07c9bd75002b35d3a3f3&hash=${hash}`;
  const serie = await new Promise((resolve, reject) => {
    justRequest('GET', urlApi, resolve, reject);
  });
  serie.title = serie.data.results[0].title;
  serie.characters = serie.data.results[0].characters;
  serie.characters.deadpool = await findHero('deadpool');
  serie.characters.deadpool.comics.first = await findComic(58990);
  serie.characters.deadpool.comics.first.issueNumber = serie.characters.deadpool.comics.first.data.results[0].issueNumber;
  serie.characters.deadpool.comics.first.title = serie.characters.deadpool.comics.first.data.results[0].title;
  // serie.characters.deadpool.comics

  // for (let i = 0; i < (serie.data.results[0].characters.items).length; i += 1) {
  //   serie.characters[(serie.data.results[0].characters.items[i].name).toLowerCase()] = await findHero(serie.data.results[0].characters.items[i].name);
  // }
  // Object.defineProperties(serie, {
  //   title: {
  //     get() {
  //       return this.data.results[0].title;
  //     },
  //   },
  //   characters: {
  //     this.data.results[0].characters.items;
  //   },
  // });
  return serie;
}

const Series = findSeries('Avengers', { startYear: 2016 })
  .then((data) => {
    console.log(data.characters.deadpool.comics.first.title);
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = { findHero, findSeries };
