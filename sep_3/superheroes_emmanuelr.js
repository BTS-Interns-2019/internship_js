const md5 = require('md5');
const { get, post, request, } = require('./promises_xhr_emmanuelr');

const publicK = '3e72d0b0b66af3682ad177e39afbf6a1';
const privateK = 'c9c2bb1934a8084232297d0595fee551e213eb4d';
let ts; // timestamp
let k; // llave sin encriptar
let key; // llave encriptada

async function findHero(heroToSearch) {
  ts = Date.now();
  k = ts + privateK + publicK;
  key = md5(k);
  return get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroToSearch}&limit=1&ts=${ts}&apikey=${publicK}&hash=${key}`)
    .then((htmlText) => {
      const [hero] = JSON.parse(htmlText).data.results;
      hero.urls.forEach((item) => {
        [hero[item.type]] = item.url.split('?');
      });
      return hero;
    });
}

async function findSeries(serieToSearch, conditions) {
  try{
    ts = Date.now();
    k = ts + privateK + publicK;
    key = md5(k);
    let filters = '';
    for(const val in conditions) {
      filters+=`&${val}=${conditions[val]}`;
    };
    let resultT = await get(`https://gateway.marvel.com:443/v1/public/series?titleStartsWith=${serieToSearch}${filters}&ts=${ts}&apikey=${publicK}&hash=${key}`);
    const [serie] = JSON.parse(resultT).data.results;
    serie.characters.items.forEach((item) => {
      serie.characters[(item.name).toLowerCase()] = item.resourceURI;
    });
    ts = Date.now();
    k = ts + privateK + publicK;
    key = md5(k);
    resultT = await get(`${serie.characters.deadpool}/comics?issueNumber=1${filters}&ts=${ts}&apikey=${publicK}&hash=${key}`);
    const hero = JSON.parse(resultT);
    serie.characters.deadpool = { comics: { first: {} } };
    [serie.characters.deadpool.comics.first] = hero.data.results;
    return serie;
  } catch (error) {
    console.log(error);
  }
}
findSeries('Avengers', { startYear: 2016 });

module.exports = { findHero, findSeries };
