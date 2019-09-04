const { findHero, findSeries } = require('./superheroes_erickv.js');


describe('Find Super heroes', () => {

  test('Spider-Man', async () => {
   
    const spiderUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Spider-man&ts=1567536420430&apikey=7de5a7fc6ca5ee89c865219abb275b95&hash=1a628c70e96b613258675347951a2aed'
    const spiderman = JSON.parse( await findHero(spiderUrl) );
    spiderman.wiki = spiderman.data.results[0].urls[1].url.split('?')[0];

    expect(spiderman.wiki).toBe("http://marvel.com/universe/Spider-Man_(Peter_Parker)");
  });

  test('Thor', () => {

    expect.assertions(1)

    const thorUrl = 'https://gateway.marvel.com:443/v1/public/characters?name=Thor&ts=1567547184486&apikey=7de5a7fc6ca5ee89c865219abb275b95&hash=e0b71287640723f1fe289e24ee8882f3'
   
    return findHero(thorUrl)
      .then( (data) => {
        const thorData = JSON.parse(data);
        const thor = thorData.data.results[0];

        expect(thor.description).toBe("As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate.  He's self-assured, and he would never, ever stop fighting for a worthwhile cause.");
      })
  });
});

describe('Find Series', () => {
  test('Avengers', async () => {

    const deadpoolChar = 'http://gateway.marvel.com/v1/public/characters?id=1009268&ts=1567569588816&apikey=7de5a7fc6ca5ee89c865219abb275b95&hash=5124b5c396a8e38b3b69020e845fab81';
    const deadpoolComic = 'http://gateway.marvel.com/v1/public/comics?id=58990&ts=1567569588816&apikey=7de5a7fc6ca5ee89c865219abb275b95&hash=5124b5c396a8e38b3b69020e845fab81';
    
    const avengers = JSON.parse( await findSeries('Avengers', { startYear: 2016 }) );
    avengers.title = avengers.data.results[0].title;
    avengers.characters = avengers.data.results[0].characters;
    avengers.characters.deadpool = JSON.parse( await findHero(deadpoolChar) );
    avengers.characters.deadpool.comics = avengers.characters.deadpool.data.results[0].comics;
    avengers.characters.deadpool.comics.first = JSON.parse( await findHero(deadpoolComic));
    avengers.characters.deadpool.comics.first.title = avengers.characters.deadpool.comics.first.data.results[0].title
    avengers.characters.deadpool.comics.first.issueNumber = avengers.characters.deadpool.comics.first.data.results[0].issueNumber

    expect(avengers.title).toBe('Avengers (2016 - 2018)')
    expect(avengers.characters.deadpool.comics.first.issueNumber).toBe(1)
    expect(avengers.characters.deadpool.comics.first.title).toBe("Deadpool: Back in Black (2016) #1")
  })  
})
