/**
 * MARVEL API
 */
const axios = require('axios');
const md5 = require('blueimp-md5');

const apiEndpoint = 'https://gateway.marvel.com/v1/public';
const publicKey = '392d6156c440a4eb89f7c18d763c3b2c';
const privateKey = '09a4d95f86c5233051ce652133a57c2bd92b619f';

function request(url) {
  return axios.get(url);
}

// Find superhero
async function findHero(name) {
  // Add the characters to the API endpoint
  let heroEndpoint = `${apiEndpoint}/characters`;

  // Modify heroEndpoint
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const formattedName = name.toLowerCase();

  heroEndpoint += `?name=${formattedName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  // make the request for the hero and format it
  let heroData;

  try {
    heroData = await request(heroEndpoint);
  } catch (error) {
    return error;
  }

  const hero = heroData.data.data.results[0];
  
  if (hero) {
    // obtain the wiki from the urls of the hero
    [hero.wiki] = hero.urls.filter(url => url.type === 'wiki');

    if (hero.wiki) {
      // remove the tracking keys from the url
      hero.wiki = hero.wiki.url.substring(0, hero.wiki.url.indexOf('?'));
    }
  
    return hero;
  }

  return new Error('Hero not found');
}

// Find series
async function findSeries(seriesName, filterData) {
  // Add the series to the API endpoint
  let seriesEndpoint = `${apiEndpoint}/series`;

  // Modify heroEndpoint
  const ts = Date.now();
  const hash = md5(ts + privateKey + publicKey);
  const formattedSeries = seriesName.toLowerCase();

  // if there are filters
  if (filterData) {
    // obtain the keys of the filter data and modify the endpoint according to it
    const filterKeys = Object.keys(filterData);
    seriesEndpoint += `?title=${formattedSeries}`;
    filterKeys.forEach(key => {
      seriesEndpoint += `&${key}=${filterData[key]}`;
    });
    seriesEndpoint += `&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  } else {
    // add only the title of the series if no filter was provided
    seriesEndpoint += `?title=${formattedSeries}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  }

  // obtain the response from the request
  const seriesData = await request(seriesEndpoint).catch(error => console.log(error));
  // return the series that has every data from the filter data
  const [series] = seriesData.data.data.results;

  // get the characters in that series
  const heroesPromises = series.characters.items.map(character => findHero(character.name).catch(error => console.log(error)));
  
  let heroes = await Promise.all(heroesPromises);

  // filtering undefined heroes because of broken api
  heroes = heroes.filter(hero => hero);

  heroes.forEach((hero) => {
    // assing a new property to the series characters with each hero and his/her info
    series.characters[hero.name.toLowerCase()] = hero;

    // assign a new property to get the first comic of the hero
    [series.characters[hero.name.toLowerCase()].comics.first] = series.characters[hero.name.toLowerCase()].comics.items;

    // get the issue number
    const issueIndex = series.characters[hero.name.toLowerCase()].comics.first.name.indexOf('#');
    const issueNumber = series.characters[hero.name.toLowerCase()].comics.first.name.substring(issueIndex + 1);

    // set the issue number and title of the first comic
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
