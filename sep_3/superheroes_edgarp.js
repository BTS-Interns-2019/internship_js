const axios = require ('axios');

function  request (url) {
    return axios.get(url);
}

async function findHero (name) {
link ='https://gateway.marvel.com:443/v1/public/characters?'
apikey = 'ca07ee3a91c19295d08a91cd49ba1596&hash=98d893735cfa455ead385b953c25f13d'
url = link.concat('ts=1&name='+name+'&apikey='+apikey);
let heroe;

  try {
    heroe = await request(url);
  } catch (error) {
    return error;
  }

  const hero = heroe.data.data.results[0];
  
  if (hero) {
    [hero.wiki] = hero.urls.filter(url => url.type === 'wiki');
    if (hero.wiki) {
      hero.wiki = hero.wiki.url.substring(0, hero.wiki.url.indexOf('?'));
    }
      return hero;
  }
  return new Error('Hero not found');
}

async function findSeries (SName, filter) {
  link ='https://gateway.marvel.com:443/v1/public/series?'
  apikey = 'ca07ee3a91c19295d08a91cd49ba1596&'
  hash ='98d893735cfa455ead385b953c25f13d';

  if (filter) {
    const filterKeys = Object.keys(filter);
     url = link.concat('title='+SName);
    filterKeys.forEach(key => {
      url += `&${key}=${filter[key]}`;
    });
    url = url.concat('&ts=1&apikey='+apikey+'&hash='+hash);
  } else {
   url = link.concat('title='+SName+'&ts=1&apikey='+apikey+'&hash='+hash);
  }

  const serie = await request(url).catch(error => console.log(error));
  const [series] = serie.data.data.results;

  const heroesPromises = series.characters.items.map(character => findHero(character.name).catch(error => console.log(error)));
  
  let heroes = await Promise.all(heroesPromises);
  heroes = heroes.filter(hero => hero);

  heroes.forEach((hero) => {
    series.characters[hero.name.toLowerCase()] = hero;
    [series.characters[hero.name.toLowerCase()].comics.first] = series.characters[hero.name.toLowerCase()].comics.items;

    const issueIndex = series.characters[hero.name.toLowerCase()].comics.first.name.indexOf('#');
    const issueNumber = series.characters[hero.name.toLowerCase()].comics.first.name.substring(issueIndex + 1);

    series.characters[hero.name.toLowerCase()].comics.first.issueNumber = issueNumber;
    series.characters[hero.name.toLowerCase()].comics.first.title = series.characters[hero.name.toLowerCase()].comics.items[0].name;
    delete series.characters[hero.name.toLowerCase()].comics.first.name;
  });

  return series;
}

module.exports = {
  findHero,
  findSeries,
};