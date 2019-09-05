//const { default: xhrMock } = require('xhr-mock');
const { get, post, request } = require('../aug_29/promises_xhr_luisg');

/*function findFromMarvel(path,options){
return get()
}*/

async function findHero(nombre){
  let obj
     let g = get('https://gateway.marvel.com:443/v1/public/characters?name='+nombre+'&ts=1567528097271&apikey=1b53183162c44292d29aa540ad174a7b&hash=71557eb2386f763417caa4e2174c5511');
     //obj = g.then(resolve => obj =resolve)
    // return g
    // g = JSON.parse(g).data.result[0]; 
     return g;
     }
     /*const result = await(findFromMarvel(path,{name}))
     const hero = reuslt.data.[0]
     return hero

    }*/

async function findSeries(serie, obj){
let start = obj.startYear
return get('https://gateway.marvel.com:443/v1/public/series?title='+serie+'&startYear='+start+'&ts=1567528097271&apikey=1b53183162c44292d29aa540ad174a7b&hash=71557eb2386f763417caa4e2174c5511')
//const results = await getFfromMRVEL('',{})
}
//console.log(findHero('Thor'))
module.exports = {findHero,findSeries}