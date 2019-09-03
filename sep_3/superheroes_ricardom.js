var md5 = require('md5');
const { get, post, request } = require('../aug_29/promises_xhr_ricardom');
const {default: xhrMock} = require('xhr-mock');
xhrMock.setup()

 
 

 const publicKey = '43563844253c297d40b4ecdf4e7f969f', privateKey = '8548fec311911376717740d08dfad0dca8041651';

 findHero = () => {
     const ts = Date.now();
     hash = md5(ts + privateKey + publicKey);
     URL = `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`
     
 }

 get(URL+)
  .then((response) => {
    console.log(response);
  })
  ;
