const toMD5 = require('../node_modules/blueimp-md5');
const get = require('../aug_29/promises_xhr_marlont');

const ts = 1;
const publicKey = '667b28d13784d155d0759f9ca264742e';
const privateKey = '61fbdc2c82c1827370e472ff3acc57b35c1ff9cf';
const hash = toMD5(ts + privateKey + publicKey);

const api = `https://gateway.marvel.com/v1/public/characters?name=Spider-man&ts=1&apikey=${publicKey}&hash=${hash}`;
console.log(api);

async function findHero(heroName) {
  const apiEndpoint = `https://gateway.marvel.com/v1/public/characters?name=${heroName}&ts=1&apikey=${publicKey}&hash=${hash}`;
  const data = await get(apiEndpoint);
  const res = JSON.parse(data);
  return res.data.results[0].description;
  /*.then(data => {
    const res = JSON.parse(data);
    return res.data.results[0].description;
  }).catch(data => {
    console.error(data);
  });
}

const res = findHero('Spider-man');
console.log(res);*/
