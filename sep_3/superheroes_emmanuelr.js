const md5 = require('md5');
const { get, post, request, } = require('./promises_xhr_emmanuelr');

const publicK = '3e72d0b0b66af3682ad177e39afbf6a1';
const privateK = 'c9c2bb1934a8084232297d0595fee551e213eb4d';
const ts = Date.now();
const k = ts + privateK + publicK;
const key = md5(k);

async function findHero(heroToSearch) {
  let hero;
  await get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroToSearch}&ts=${ts}&apikey=${publicK}&hash=${key}`)
    .then((resultT) => {
      [hero] = JSON.parse(resultT).data.results;
      hero.urls.forEach((item) => {
        [hero[item.type]] = item.url.split('?');
      });
    });
  return hero;
}
async function findSeries(serieToSearch) {
  // await get(`https://gateway.marvel.com:443/v1/public/series?nameStartsWith=${serieToSearch}&ts=${ts}&apikey=${publicK}&hash=${key}`)
  // .then((resultT) => {
  //   console.log(resultT);
  // }).catch((e) => {
  //   console.log(e);
  // });
}
findSeries('Avengers');

module.exports = { findHero, findSeries };
