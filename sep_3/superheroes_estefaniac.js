const fetch = require('node-fetch');
// var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const MD5 = require('./md5')


const privatekey = '807870abdff028a9ab8578cef3d55ffccad3d81a'
      publickey = 'b4634c5cf151afd2689657d7c50b2abc'

function findHero(nameHero) {
    
const marvel = {
    render: () => {
        const ts = Date.now()
        const hash = MD5(ts + privatekey + publickey)
    /*la url donde vamos hacer la peticion de los personajes de la api de marvel*/
        const urlApi= `https://gateway.marvel.com:443/v1/public/characters?name=${nameHero}&ts=${ts}&apikey=${publickey}&hash=${hash}`;
        
        fetch(urlApi)
        .then(res => res.json())
        .then((json) => {
            // console.log(json)
            // for(const hero of json.data.results) {
            // let nameHero = hero.name
            // console.log(nameHero)
            console.log(json.data.results)
            // }
            for(const hero of json.data.results) {
            let urlHero = hero.urls[1].url
            // console.log(urlHero)
            let obj ={
                wiki: urlHero
            }
            // return obj
            console.log(obj)
            }
            
        })
    }
    }
 return marvel.render()
}

console.log(findHero('Spider-Man'))
// console.log(marvel.render());


module.exports = {
    findHero,
};