var md5 = require('md5');
const { get, post, request } = require('./promises_ricardom');
const {default: xhrMock} = require('xhr-mock');
xhrMock.setup()

 
 

 const publicKey = '43563844253c297d40b4ecdf4e7f969f', privateKey = '8548fec311911376717740d08dfad0dca8041651';

 async function findHero(heroe){
     const ts = Date.now();
     hash = md5(ts + privateKey + publicKey);
     URL = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroe}&limit=1&ts=${ts}&apikey=${publicKey}&hash=${hash}`
     return get(URL)
      .then((html) => {
       const[hero] = JSON.parse(html).data.results;
      hero.urls.forEach((item) =>{
        [hero[item.type]] = item.url.split('?');
      })
      return hero;
     })
 }


// async function findSeries(){

// }



 module.exports = findHero;
