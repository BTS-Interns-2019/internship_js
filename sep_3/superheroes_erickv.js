const XMLHttpRequest = require( 'xmlhttprequest' ).XMLHttpRequest;
const md5 = require( 'md5' );

const timestamp = new Date().getTime();
const pubK = '7de5a7fc6ca5ee89c865219abb275b95';
const privK = 'b37c7a43e3e8e9935f813b43faff8809557444ab'; 
const hash = md5( timestamp+privK+pubK );
const keys = `ts=${timestamp}&apikey=${pubK}&hash=${hash}`

const marvel = `https://gateway.marvel.com:443/v1/public/series?title=Avengers&startYear=2016&ts=${timestamp}&apikey=${pubK}&hash=${hash}`
const deadpool = `http://gateway.marvel.com/v1/public/characters?id=1009268&ts=${timestamp}&apikey=${pubK}&hash=${hash}`
const deadpoolComic = `http://gateway.marvel.com/v1/public/comics?id=58990&ts=${timestamp}&apikey=${pubK}&hash=${hash}`
console.log(deadpool)
console.log(deadpoolComic)

// findHero(marvel).then( (data) => {
//   const body = JSON.parse(data);
//     console.log(body.data.results)
    
// }).catch( (reason) => {
//   console.log('Try again.')
// });

findSeries('Avengers', { startYear: 2016 }).then( async (response) => {
  const data = JSON.parse(response);
  data.title = data.data.results[0].title;
  data.characters = data.data.results[0].characters;
  data.characters.deadpool = JSON.parse( await findHero(deadpool) );
  data.characters.deadpool.comics = data.characters.deadpool.data.results[0].comics;
  data.characters.deadpool.comics.first = JSON.parse( await findHero(deadpoolComic));
  data.characters.deadpool.comics.first.title = data.characters.deadpool.comics.first.data.results[0].title
  data.characters.deadpool.comics.first.issueNumber = data.characters.deadpool.comics.first.data.results[0].issueNumber
}).catch( () => {
  console.log('Try again')
})


function findHero(url){

  return new Promise( (resolve, reject) => {
    const Request = new XMLHttpRequest();
    Request.open('GET', url);
  
      Request.onload = () => {

        Request.status === 200 ? resolve(Request.responseText) : reject(Request.responseText);
      };
      Request.onerror = () => {
          reject(Request.responseText);
      };
  
    Request.send();
  
  }).then( (response) => {
      return response
  }).catch( (reason) => {
    return reason
  })
};

function findSeries(title, condition){

  const specific = `${Object.keys(condition)[0]}=${Object.values(condition)[0]}`;
  const serieUrl = `https://gateway.marvel.com:443/v1/public/series?title=${title}&${specific}&ts=1567549805500&apikey=7de5a7fc6ca5ee89c865219abb275b95&hash=0cb8b86bb3e41fb38d7f91194f5965fe`;

  return findHero(serieUrl).then( (data) => {
  
    return data
  }).catch( (reason) => {
    return reason
  })
}

module.exports = { findHero, findSeries };