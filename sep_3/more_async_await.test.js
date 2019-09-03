const {get,post, put } = require('../sep_3/get_post_put.js');
const urlMarvel = 'https://gateway.marvel.com:443/v1/public/characters?name=';
let md5 = require('blueimp-md5');
const findHero = require('./superheroes_sergior.js');
const apikey = '3741cf3185ddf0e0680c6fc3cabeb0e6';
let hash = md5('14e5bbc9393ca7b70cf6df726d3cbc408ab8d4a3f3741cf3185ddf0e0680c6fc3cabeb0e6');

console.log(hash);


describe('Find Super heroes', () => {

  test('Spider-Man', async () => {

    const spiderman = await findHero('Spider-man');
    // original -> "http://marvel.com/universe/Spider-Man_(Peter_Parker)?utm_campaign=apiRef&utm_source=a736913c879d22d50f62b4f286ca23bd"
    // remove traking keys from url
    console.log(spiderman);
    
    expect(spiderman.wiki).toBe("http://marvel.com/universe/Spider-Man_(Peter_Parker)");
  });

  test('Thor', () => {

    expect.assertions(1)

    return findHero('Thor')
      .then(thor => {
        expect(thor.description).toBe("As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.");
      })
  });
});

describe('Find Series', () => {
  test('Avengers', async () => {
    const avengers = await findSeries('Avengers', { startYear: 2016 });

    expect(avengers.title).toBe('Avengers (2016 - 2018)')
    expect(avengers.characters.deadpool.comics.first.issueNumber).toBe(1)
    expect(avengers.characters.deadpool.comics.first.title).toBe("Deadpool: Back in Black (2016) #1")
  })
})
