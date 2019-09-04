const toMD5 = require('../node_modules/blueimp-md5');
const {XMLHttpRequest} = require('../node_modules/xmlhttprequest');

const ts = 1;
const publicKey = '667b28d13784d155d0759f9ca264742e';
const privateKey = '61fbdc2c82c1827370e472ff3acc57b35c1ff9cf';
const hash = toMD5(ts + privateKey + publicKey);

function generateInfo(httpResponse) {
  const brute = JSON.parse(httpResponse);
  const info = brute.data.results[0];
  if (typeof info.urls !== 'undefined') {
    const urls = info.urls;
    const urlwiki = urls.filter((element) => {
      if (element.type === 'wiki') {
        return element;
      }
    });
    const wikiu = urlwiki[0].url;
    let cut = 0;
    for (let i = 0; i < wikiu.length; i += 1) {
      if (wikiu.charAt(i) === '?') {
        cut = i;
      }
    }
    info.wiki = wikiu.substring(0, cut);
  }

  return info;
}

function getCB(url, onSuccess, onError) {
  const http = new XMLHttpRequest();
  http.open('GET', url);
  http.addEventListener('load', () => {
    if(http.status >= 200 && http.status < 400){
      onSuccess(generateInfo(http.responseText));
    } else {
      onError(http.status + ' ' + http.statusText);
    }
  });
  http.send();
  return http;
}

function get(url) {
  return new Promise((resolve, reject) => {
    getCB(url, resolve, reject);
  });
}

function findHero(heroName) {
  return get(`https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=1&apikey=${publicKey}&hash=${hash}`);
}

function findSeries(title, extra) {
  const key = Object.keys(extra);
  const value = Object.values(extra);
  return get(`https://gateway.marvel.com:443/v1/public/series?title=${title}&${key}=${value}&ts=1&apikey=${publicKey}&hash=${hash}`);
}

findHero('Spider-man').then(data => {
  console.log('');
});
/*
findSeries('Avengers', { startYear: 2016 }).then(data => {
  console.log
});*/

module.exports = findHero;